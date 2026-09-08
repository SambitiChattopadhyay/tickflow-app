import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";


const DashboardCharts = () => {

  const activityData = [
    {
      name: "Study",
      duration: 150,
    },
    {
      name: "Project",
      duration: 105,
    },
    {
      name: "Reading",
      duration: 75,
    },
    {
      name: "Workout",
      duration: 45,
    },
    {
      name: "Others",
      duration: 30,
    },
  ];


  const colors = [
    "#2563EB",
    "#7C3AED",
    "#EC4899",
    "#F59E0B",
    "#10B981",
  ];


  const totalMinutes = activityData.reduce(
    (total, activity) => total + activity.duration,
    0
  );


  return (
    <section className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8">


      {/* Bar Chart */}

      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">

        <div className="mb-6">

          <h2 className="text-xl font-semibold text-slate-900">
            Time per Activity
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            Time tracked for each activity
          </p>

        </div>


        <div className="h-[320px]">

          <ResponsiveContainer
            width="100%"
            height="100%"
          >

            <BarChart
              data={activityData}
            >

              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
              />


              <YAxis
                axisLine={false}
                tickLine={false}
              />


              <Tooltip
                formatter={(value) =>
                  `${value} minutes`
                }
              />


              <Bar
                dataKey="duration"
                radius={[8, 8, 0, 0]}
              >

                {activityData.map(
                  (activity, index) => (

                    <Cell
                      key={activity.name}
                      fill={
                        colors[
                          index % colors.length
                        ]
                      }
                    />

                  )
                )}

              </Bar>

            </BarChart>

          </ResponsiveContainer>

        </div>

      </div>



      {/* Pie / Donut Chart */}

      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">

        <div className="mb-6">

          <h2 className="text-xl font-semibold text-slate-900">
            Activity Distribution
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            How your time was distributed today
          </p>

        </div>


        <div className="flex flex-col md:flex-row items-center">


          {/* Donut Chart */}

          <div className="h-[300px] w-full">

            <ResponsiveContainer
              width="100%"
              height="100%"
            >

              <PieChart>

                <Pie
                  data={activityData}
                  dataKey="duration"
                  nameKey="name"
                  innerRadius={65}
                  outerRadius={105}
                  paddingAngle={3}
                >

                  {activityData.map(
                    (activity, index) => (

                      <Cell
                        key={activity.name}
                        fill={
                          colors[
                            index % colors.length
                          ]
                        }
                      />

                    )
                  )}

                </Pie>


                <Tooltip
                  formatter={(value) =>
                    `${value} minutes`
                  }
                />

              </PieChart>

            </ResponsiveContainer>

          </div>



          {/* Chart Legend */}

          <div className="w-full space-y-4">

            {activityData.map(
              (activity, index) => {

                const percentage = Math.round(
                  (activity.duration / totalMinutes) * 100
                );


                return (
                  <div
                    key={activity.name}
                    className="flex items-center justify-between"
                  >

                    <div className="flex items-center gap-3">

                      <span
                        className="w-3 h-3 rounded-full"
                        style={{
                          backgroundColor:
                            colors[
                              index % colors.length
                            ],
                        }}
                      />

                      <span className="text-sm text-slate-600">

                        {activity.name}

                      </span>

                    </div>


                    <span className="text-sm font-semibold text-slate-800">

                      {percentage}%

                    </span>

                  </div>
                );

              }
            )}

          </div>

        </div>

      </div>


    </section>
  );
};


export default DashboardCharts;