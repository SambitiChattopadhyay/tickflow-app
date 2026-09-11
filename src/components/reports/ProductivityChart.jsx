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


export default function ProductivityChart({
  productivityData = [],
  activityData = [],
}) {


  const formatTime =
    (seconds) => {

      const hours =
        Math.floor(seconds / 3600);

      const minutes =
        Math.floor(
          (seconds % 3600) / 60
        );

      const remainingSeconds =
        Math.floor(
          seconds % 60
        );


      if (
        hours === 0 &&
        minutes === 0
      ) {

        return `${remainingSeconds}s`;

      }


      if (hours === 0) {

        return `${minutes}m`;

      }


      return `${hours}h ${minutes}m`;

    };



  const colors = [
    "#2563eb",
    "#7c3aed",
    "#10b981",
    "#f59e0b",
    "#ef4444",
  ];



  /*
    Find largest value
    from the selected period
  */

  const highestSeconds =
    Math.max(
      ...productivityData.map(
        (item) =>
          item.seconds || 0
      ),
      0
    );



  /*
    Dynamic Y-axis maximum
  */

  let maxSeconds;


  if (
    highestSeconds <=
    15 * 60
  ) {

    maxSeconds =
      15 * 60;

  } else if (
    highestSeconds <=
    60 * 60
  ) {

    maxSeconds =
      60 * 60;

  } else if (
    highestSeconds <=
    3 * 60 * 60
  ) {

    maxSeconds =
      3 * 60 * 60;

  } else if (
    highestSeconds <=
    6 * 60 * 60
  ) {

    maxSeconds =
      6 * 60 * 60;

  } else if (
    highestSeconds <=
    12 * 60 * 60
  ) {

    maxSeconds =
      12 * 60 * 60;

  } else {

    maxSeconds =
      24 * 60 * 60;

  }



  /*
    Create evenly spaced
    Y-axis values
  */

  const yAxisTicks =
    Array.from(
      { length: 7 },
      (_, index) =>
        (maxSeconds / 6) *
        index
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

            Time tracked across your selected period.

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

                domain={[
                  0,
                  maxSeconds,
                ]}

                ticks={
                  yAxisTicks
                }

                interval={0}

                tickFormatter={
                  (value) =>
                    formatTime(value)
                }

              />


              <Tooltip

                formatter={
                  (value) =>
                    formatTime(value)
                }

              />


              <Bar

                dataKey="seconds"

                fill="#2563eb"

                radius={[
                  8,
                  8,
                  0,
                  0,
                ]}

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

            How your tracked time is distributed.

          </p>

        </div>


        <div className="h-72">

          <ResponsiveContainer
            width="100%"
            height="100%"
          >

            <PieChart>

              <Pie

                data={
                  activityData
                }

                dataKey="seconds"

                nameKey="name"

                cx="50%"

                cy="50%"

                outerRadius={95}

                label={
                  ({
                    name,
                    percent,
                  }) =>
                    `${name} ${(
                      percent * 100
                    ).toFixed(0)}%`
                }

              >

                {activityData.map(
                  (
                    item,
                    index
                  ) => (

                    <Cell

                      key={
                        item.name
                      }

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
                    formatTime(value)
                }

              />

            </PieChart>

          </ResponsiveContainer>

        </div>

      </div>


    </div>

  );

}