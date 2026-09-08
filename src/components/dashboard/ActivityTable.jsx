const ActivityTable = () => {
  const activities = [
    {
      id: 1,
      name: "Study",
      startTime: "09:00 AM",
      endTime: "11:30 AM",
      duration: "2h 30m",
      status: "Completed",
    },
    {
      id: 2,
      name: "Project",
      startTime: "01:00 PM",
      endTime: "02:45 PM",
      duration: "1h 45m",
      status: "Completed",
    },
    {
      id: 3,
      name: "Reading",
      startTime: "07:00 PM",
      endTime: "Running",
      duration: "1h 15m",
      status: "Running",
    },
    {
      id: 4,
      name: "Workout",
      startTime: "05:00 PM",
      endTime: "05:45 PM",
      duration: "45m",
      status: "Completed",
    },
    {
      id: 5,
      name: "Others",
      startTime: "08:30 PM",
      endTime: "09:00 PM",
      duration: "30m",
      status: "Completed",
    },
  ];


  return (
    <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">

      {/* Table Header */}

      <div className="flex items-center justify-between mb-6">

        <div>

          <h2 className="text-xl font-semibold text-slate-900">
            Today's Activities
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            Detailed overview of your tracked activities
          </p>

        </div>


        <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
          View All
        </button>

      </div>


      {/* Table */}

      <div className="overflow-x-auto">

        <table className="w-full min-w-[650px]">

          <thead>

            <tr className="border-b border-slate-200 text-left">

              <th className="pb-4 text-sm font-medium text-slate-500">
                Activity
              </th>

              <th className="pb-4 text-sm font-medium text-slate-500">
                Start Time
              </th>

              <th className="pb-4 text-sm font-medium text-slate-500">
                End Time
              </th>

              <th className="pb-4 text-sm font-medium text-slate-500">
                Duration
              </th>

              <th className="pb-4 text-sm font-medium text-slate-500">
                Status
              </th>

            </tr>

          </thead>


          <tbody>

            {activities.map((activity) => (

              <tr
                key={activity.id}
                className="border-b border-slate-100 last:border-none"
              >

                <td className="py-4 font-medium text-slate-800">

                  {activity.name}

                </td>


                <td className="py-4 text-sm text-slate-600">

                  {activity.startTime}

                </td>


                <td className="py-4 text-sm text-slate-600">

                  {activity.endTime}

                </td>


                <td className="py-4 text-sm font-medium text-slate-700">

                  {activity.duration}

                </td>


                <td className="py-4">

                  <span
                    className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                      activity.status === "Running"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >

                    {activity.status}

                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </section>
  );
};


export default ActivityTable;