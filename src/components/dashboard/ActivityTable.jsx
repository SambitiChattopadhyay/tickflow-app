import { useEffect, useState } from "react";

const ActivityTable = () => {

  const [activities, setActivities] = useState([]);

  const [loading, setLoading] = useState(true);


  useEffect(() => {

    const fetchActivities = async () => {

      try {

        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/activities/summary/today`,
          {
            method: "GET",
            credentials: "include",
          }
        );


        if (!response.ok) {

          throw new Error(
            "Failed to fetch activities"
          );

        }


        const data = await response.json();


        console.log(
          "Activities from backend:",
          data
        );


        setActivities(
          data.activities || []
        );


      } catch (error) {

        console.error(
          "Error fetching activities:",
          error
        );

      } finally {

        setLoading(false);

      }

    };


    fetchActivities();

  }, []);


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


        {loading ? (

          <p className="text-sm text-slate-500">

            Loading activities...

          </p>

        ) : (


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


              {activities.length === 0 ? (

                <tr>

                  <td
                    colSpan="5"
                    className="py-8 text-center text-sm text-slate-500"
                  >

                    No activities found

                  </td>

                </tr>

              ) : (


                activities.map((activity) => (

                  <tr
                    key={activity._id}
                    className="border-b border-slate-100 last:border-none"
                  >


                    <td className="py-4 font-medium text-slate-800">

                      {activity.name}

                    </td>



                    <td className="py-4 text-sm text-slate-600">

                      {new Date(
                        activity.startTime
                      ).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                      })}

                    </td>



                    <td className="py-4 text-sm text-slate-600">

                      {activity.endTime

                        ? new Date(
                            activity.endTime
                          ).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                            second: "2-digit",
                          })

                        : "Running"

                      }

                    </td>



                    <td className="py-4 text-sm font-medium text-slate-700">

                      {activity.duration || "0m"}

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

                ))

              )}


            </tbody>


          </table>

        )}


      </div>


    </section>

  );

};


export default ActivityTable;