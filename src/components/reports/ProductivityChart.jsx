// import {
//   BarChart,
//   Bar,
//   PieChart,
//   Pie,
//   Cell,
//   ResponsiveContainer,
//   XAxis,
//   YAxis,
//   Tooltip,
//   CartesianGrid,
// } from "recharts";

// export default function ProductivityChart({
//   productivityData,
//   activityData,
// }) {
//   const formatHours = (seconds) =>
//     (seconds / 3600).toFixed(1);

//   const colors = [
//     "#2563eb",
//     "#7c3aed",
//     "#10b981",
//     "#f59e0b",
//     "#ef4444",
//   ];

//   return (
//     <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

//       {/* Bar Chart */}

//       <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
//         <div className="mb-6">
//           <h2 className="text-lg font-semibold text-slate-900">
//             Daily Productivity
//           </h2>

//           <p className="text-sm text-slate-500 mt-1">
//             Time tracked across your selected period.
//           </p>
//         </div>

//         <div className="h-72">
//           <ResponsiveContainer width="100%" height="100%">
//             <BarChart data={productivityData}>
//               <CartesianGrid
//                 strokeDasharray="3 3"
//                 vertical={false}
//               />

//               <XAxis
//                 dataKey="day"
//                 axisLine={false}
//                 tickLine={false}
//               />

//               <YAxis
//                 axisLine={false}
//                 tickLine={false}
//                 tickFormatter={(value) =>
//                   `${value / 3600}h`
//                 }
//               />

//               <Tooltip
//                 formatter={(value) =>
//                   `${formatHours(value)} hours`
//                 }
//               />

//               <Bar
//                 dataKey="seconds"
//                 fill="#2563eb"
//                 radius={[8, 8, 0, 0]}
//               />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>
//       </div>


//       {/* Pie Chart */}

//       <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
//         <div className="mb-6">
//           <h2 className="text-lg font-semibold text-slate-900">
//             Time Distribution
//           </h2>

//           <p className="text-sm text-slate-500 mt-1">
//             How your tracked time is distributed.
//           </p>
//         </div>

//         <div className="h-72">
//           <ResponsiveContainer width="100%" height="100%">
//             <PieChart>
//               <Pie
//                 data={activityData}
//                 dataKey="seconds"
//                 nameKey="name"
//                 cx="50%"
//                 cy="50%"
//                 outerRadius={95}
//                 label={({ name, percent }) =>
//                   `${name} ${(percent * 100).toFixed(0)}%`
//                 }
//               >
//                 {activityData.map((item, index) => (
//                   <Cell
//                     key={item.name}
//                     fill={
//                       colors[index % colors.length]
//                     }
//                   />
//                 ))}
//               </Pie>

//               <Tooltip
//                 formatter={(value) =>
//                   `${formatHours(value)} hours`
//                 }
//               />
//             </PieChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//     </div>
//   );
// }
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

import {
  useEffect,
  useState,
} from "react";


export default function ProductivityChart() {

  const [
    productivityData,
    setProductivityData,
  ] = useState([]);


  const [
    activityData,
    setActivityData,
  ] = useState([]);


  const formatHours =
    (seconds) =>
      (seconds / 3600).toFixed(1);


  const colors = [
    "#2563eb",
    "#7c3aed",
    "#10b981",
    "#f59e0b",
    "#ef4444",
  ];


  useEffect(() => {

    const fetchProductivityData =
      async () => {

        try {

          const response =
            await fetch(
              `${import.meta.env.VITE_API_URL}/api/activities/summary/today`,
              {
                credentials: "include",
              }
            );


          if (!response.ok) {

            throw new Error(
              "Failed to fetch productivity data"
            );

          }


          const data =
            await response.json();


          console.log(
            "Today's Productivity Data:",
            data
          );


          const completedActivities =
            data.completedActivities || [];


          /*
            Total duration today
            in milliseconds
          */

          const totalMilliseconds =
            completedActivities.reduce(
              (total, activity) =>
                total +
                (activity.duration || 0),
              0
            );


          /*
            Convert today's total
            milliseconds → seconds
          */

          const totalSeconds =
            Math.floor(
              totalMilliseconds / 1000
            );


          /*
            Bar chart data
          */

          setProductivityData([
            {
              day: "Today",
              seconds:
                totalSeconds,
            },
          ]);


          /*
            Group activities
            by activity name
          */

          const groupedActivities =
            completedActivities.reduce(
              (acc, activity) => {

                const name =
                  activity.name ||
                  "Others";


                const seconds =
                  Math.floor(
                    (activity.duration || 0) /
                    1000
                  );


                if (acc[name]) {

                  acc[name] +=
                    seconds;

                } else {

                  acc[name] =
                    seconds;

                }


                return acc;

              },
              {}
            );


          /*
            Convert grouped object
            into Pie Chart array
          */

          const formattedActivities =
            Object.entries(
              groupedActivities
            ).map(
              ([name, seconds]) => ({

                name,

                seconds,

              })
            );


          setActivityData(
            formattedActivities
          );


        } catch (error) {

          console.error(
            "Failed to fetch productivity data:",
            error
          );

        }

      };


    fetchProductivityData();

  }, []);
const totalSeconds =
  productivityData[0]?.seconds || 0;


let maxSeconds;

if (totalSeconds <= 15 * 60) {

  maxSeconds = 15 * 60;

} else if (totalSeconds <= 60 * 60) {

  maxSeconds = 60 * 60;

} else if (totalSeconds <= 3 * 60 * 60) {

  maxSeconds = 3 * 60 * 60;

} else if (totalSeconds <= 6 * 60 * 60) {

  maxSeconds = 6 * 60 * 60;

} else if (totalSeconds <= 12 * 60 * 60) {

  maxSeconds = 12 * 60 * 60;

} else {

  maxSeconds = 24 * 60 * 60;

}
const yAxisTicks =
  Array.from(
    { length: 7 },
    (_, index) =>
      (maxSeconds / 6) * index
  );

  return (

    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">


      {/* Bar Chart */}

      <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">

        <div className="mb-6">

          <h2 className="text-lg font-semibold text-slate-900">

            Daily Productivity

          </h2>


          <p className="text-sm text-slate-500 mt-1">

            Time tracked today.

          </p>

        </div>


        <div className="h-72">

          <ResponsiveContainer
            width="100%"
            height="100%"
          >

            <BarChart
              data={productivityData}
            >

              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
              />


              <XAxis
                dataKey="day"
                axisLine={false}
                tickLine={false}
              />


                <YAxis
                axisLine={false}
                tickLine={false}
                domain={[0, maxSeconds]}
                ticks={yAxisTicks}
                interval={0}
                tickFormatter={(value) => {

                  if (value < 3600) {

                    return `${Math.round(
                      value / 60
                    )}m`;

                  }

                  return `${(
                    value / 3600
                  ).toFixed(1)}h`;

                }}
              />


              <Tooltip
                formatter={
                  (value) =>
                    `${formatHours(value)} hours`
                }
              />


              <Bar
                dataKey="seconds"
                fill="#2563eb"
                radius={[8, 8, 0, 0]}
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

      </div>



      {/* Pie Chart */}

      <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">

        <div className="mb-6">

          <h2 className="text-lg font-semibold text-slate-900">

            Time Distribution

          </h2>


          <p className="text-sm text-slate-500 mt-1">

            How your time was distributed today.

          </p>

        </div>


        <div className="h-72">

          <ResponsiveContainer
            width="100%"
            height="100%"
          >

            <PieChart>

              <Pie
                data={activityData}
                dataKey="seconds"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={95}
                label={
                  ({ name, percent }) =>
                    `${name} ${(
                      percent * 100
                    ).toFixed(0)}%`
                }
              >

                {activityData.map(
                  (item, index) => (

                    <Cell
                      key={item.name}
                      fill={
                        colors[
                          index %
                          colors.length
                        ]
                      }
                    />

                  )
                )}

              </Pie>


              <Tooltip
                formatter={
                  (value) =>
                    `${formatHours(value)} hours`
                }
              />

            </PieChart>

          </ResponsiveContainer>

        </div>

      </div>


    </div>

  );

}