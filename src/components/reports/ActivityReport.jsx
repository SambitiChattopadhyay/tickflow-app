// import { Clock3, ListChecks } from "lucide-react";

// export default function ActivityReport({ activities }) {
//   const formatTime = (seconds) => {
//     const hours = Math.floor(seconds / 3600);
//     const minutes = Math.floor(
//       (seconds % 3600) / 60
//     );

//     return `${hours}h ${minutes}m`;
//   };

//   return (
//     <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">

//       <div className="mb-6">
//         <h2 className="text-lg font-semibold text-slate-900">
//           Activity Performance
//         </h2>

//         <p className="text-sm text-slate-500 mt-1">
//           A breakdown of your tracked activities.
//         </p>
//       </div>


//       <div className="space-y-4">
//         {activities.map((activity) => (
//           <div
//             key={activity.name}
//             className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-slate-50"
//           >

//             <div>
//               <h3 className="font-semibold text-slate-800">
//                 {activity.name}
//               </h3>

//               <div className="flex gap-4 mt-2 text-sm text-slate-500">

//                 <span className="flex items-center gap-1.5">
//                   <Clock3 size={15} />

//                   {formatTime(
//                     activity.seconds
//                   )}
//                 </span>

//                 <span className="flex items-center gap-1.5">
//                   <ListChecks size={15} />

//                   {activity.sessions} sessions
//                 </span>

//               </div>
//             </div>


//             <div className="w-full sm:w-48 h-2 bg-slate-200 rounded-full overflow-hidden">

//               <div
//                 className="h-full bg-blue-600 rounded-full"
//                 style={{
//                   width: `${activity.percentage}%`,
//                 }}
//               />

//             </div>

//           </div>
//         ))}
//       </div>

//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { Clock3, ListChecks } from "lucide-react";


export default function ActivityReport() {

  const [activities, setActivities] =
    useState([]);


  useEffect(() => {

    const fetchActivityReport =
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
              "Failed to fetch activity report"
            );

          }


          const data =
            await response.json();


          console.log(
            "Today's Activity Report:",
            data
          );


          const completedActivities =
            data.completedActivities || [];


          /*
            Group activities
            with the same name
          */

          const groupedActivities =
            completedActivities.reduce(
              (acc, activity) => {

                const name =
                  activity.name || "Others";


                if (!acc[name]) {

                  acc[name] = {
                    name,
                    milliseconds: 0,
                    sessions: 0,
                  };

                }


                acc[name].milliseconds +=
                  activity.duration || 0;


                acc[name].sessions += 1;


                return acc;

              },
              {}
            );


          const groupedArray =
            Object.values(
              groupedActivities
            );


          /*
            Calculate total duration
            for percentages
          */

          const totalMilliseconds =
            groupedArray.reduce(
              (total, activity) =>
                total +
                activity.milliseconds,
              0
            );


          /*
            Create final data
          */

          const formattedActivities =
            groupedArray.map(
              (activity) => ({

                name:
                  activity.name,


                seconds:
                  Math.floor(
                    activity.milliseconds /
                    1000
                  ),


                sessions:
                  activity.sessions,


                percentage:
                  totalMilliseconds > 0
                    ? Math.round(
                        (
                          activity.milliseconds /
                          totalMilliseconds
                        ) * 100
                      )
                    : 0,

              })
            );


          setActivities(
            formattedActivities
          );


        } catch (error) {

          console.error(
            "Failed to fetch activity report:",
            error
          );

        }

      };


    fetchActivityReport();

  }, []);



  const formatTime =
    (seconds) => {

      const hours =
        Math.floor(
          seconds / 3600
        );


      const minutes =
        Math.floor(
          (seconds % 3600) / 60
        );


      const remainingSeconds =
        seconds % 60;


      let formattedTime =
        "";


      if (hours > 0) {

        formattedTime +=
          `${hours}h `;

      }


      if (
        minutes > 0 ||
        hours > 0
      ) {

        formattedTime +=
          `${minutes}m `;

      }


      formattedTime +=
        `${remainingSeconds}s`;


      return formattedTime;

    };



  return (

    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">

      <div className="mb-6">

        <h2 className="text-lg font-semibold text-slate-900">

          Activity Performance

        </h2>


        <p className="text-sm text-slate-500 mt-1">

          A breakdown of your tracked activities today.

        </p>

      </div>


      <div className="space-y-4">

        {activities.length === 0 ? (

          <p className="text-sm text-slate-500">

            No completed activities today.

          </p>

        ) : (

          activities.map(
            (activity) => (

              <div
                key={activity.name}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-slate-50"
              >

                <div>

                  <h3 className="font-semibold text-slate-800">

                    {activity.name}

                  </h3>


                  <div className="flex gap-4 mt-2 text-sm text-slate-500">

                    <span className="flex items-center gap-1.5">

                      <Clock3 size={15} />

                      {formatTime(
                        activity.seconds
                      )}

                    </span>


                    <span className="flex items-center gap-1.5">

                      <ListChecks size={15} />

                      {activity.sessions} sessions

                    </span>

                  </div>

                </div>


                <div className="w-full sm:w-48 h-2 bg-slate-200 rounded-full overflow-hidden">

                  <div
                    className="h-full bg-blue-600 rounded-full"
                    style={{

                      width:
                        `${activity.percentage}%`,

                    }}
                  />

                </div>

              </div>

            )
          )

        )}

      </div>

    </div>

  );

}