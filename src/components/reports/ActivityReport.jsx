import {
  Clock3,
  ListChecks,
} from "lucide-react";


export default function ActivityReport({
  activities = [],
}) {


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
        Math.floor(
          seconds % 60
        );


      let formattedTime = "";


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


      {/* Header */}

      <div className="mb-6">

        <h2 className="text-lg font-semibold text-slate-900">

          Activity Performance

        </h2>


        <p className="text-sm text-slate-500 mt-1">

          A breakdown of your tracked activities.

        </p>

      </div>



      {/* Activities */}

      <div className="space-y-4">


        {activities.length === 0 ? (

          <p className="text-sm text-slate-500">

            No completed activities found.

          </p>

        ) : (

          activities.map(
            (activity) => (

              <div

                key={activity.name}

                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-slate-50"

              >


                {/* Activity Details */}

                <div>

                  <h3 className="font-semibold text-slate-800">

                    {activity.name}

                  </h3>


                  <div className="flex gap-4 mt-2 text-sm text-slate-500">


                    {/* Duration */}

                    <span className="flex items-center gap-1.5">

                      <Clock3 size={15} />

                      {formatTime(
                        activity.seconds || 0
                      )}

                    </span>



                    {/* Sessions */}

                    <span className="flex items-center gap-1.5">

                      <ListChecks size={15} />

                      {activity.sessions || 0} sessions

                    </span>


                  </div>

                </div>



                {/* Percentage Bar */}

                <div className="w-full sm:w-48 h-2 bg-slate-200 rounded-full overflow-hidden">

                  <div

                    className="h-full bg-blue-600 rounded-full"

                    style={{

                      width:
                        `${activity.percentage || 0}%`,

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