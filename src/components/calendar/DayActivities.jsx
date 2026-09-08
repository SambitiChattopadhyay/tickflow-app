import {
  Clock3,
  PlayCircle,
  CheckCircle2,
} from "lucide-react";

export default function DayActivities({
  selectedDate,
  activities,
}) {
  const selectedActivities =
    activities.filter(
      (activity) =>
        new Date(
          activity.startTime
        ).toDateString() ===
        selectedDate.toDateString()
    );

  const formatTime = (date) =>
    new Date(date).toLocaleTimeString(
      [],
      {
        hour: "2-digit",
        minute: "2-digit",
      }
    );

  const formatDuration = (seconds) => {
    const hours = Math.floor(
      seconds / 3600
    );

    const minutes = Math.floor(
      (seconds % 3600) / 60
    );

    if (hours) {
      return `${hours}h ${minutes}m`;
    }

    return `${minutes}m`;
  };

  return (
    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">

      {/* Header */}

      <div className="mb-6">

        <p className="text-sm font-medium text-blue-600">
          SELECTED DAY
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-2">
          {selectedDate.toLocaleDateString(
            "en-US",
            {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric",
            }
          )}
        </h2>

      </div>


      {/* Activities */}

      {selectedActivities.length ? (

        <div className="space-y-4">

          {selectedActivities.map(
            (activity) => {

              const isActive =
                activity.status ===
                "active";

              return (
                <div
                  key={activity.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-slate-50 rounded-xl"
                >

                  {/* Activity Name */}

                  <div className="flex items-center gap-3">

                    <div
                      className={`
                        w-10
                        h-10
                        rounded-xl
                        flex
                        items-center
                        justify-center
                        ${
                          isActive
                            ? "bg-blue-100 text-blue-600"
                            : "bg-emerald-50 text-emerald-600"
                        }
                      `}
                    >
                      {isActive ? (
                        <PlayCircle size={20} />
                      ) : (
                        <CheckCircle2 size={20} />
                      )}
                    </div>


                    <div>

                      <h3 className="font-semibold text-slate-800">
                        {activity.name}
                      </h3>


                      <p className="text-sm text-slate-500 mt-1">

                        {formatTime(
                          activity.startTime
                        )}

                        {" – "}

                        {activity.endTime
                          ? formatTime(
                              activity.endTime
                            )
                          : "Active"}

                      </p>

                    </div>

                  </div>


                  {/* Duration */}

                  <div className="flex items-center gap-2 text-slate-600">

                    <Clock3 size={17} />

                    <span className="font-medium">

                      {isActive
                        ? "Active"
                        : formatDuration(
                            activity.duration
                          )}

                    </span>

                  </div>

                </div>
              );
            }
          )}

        </div>

      ) : (

        <div className="py-12 text-center">

          <Clock3
            size={30}
            className="mx-auto text-slate-300"
          />

          <h3 className="font-semibold text-slate-600 mt-4">
            No activity tracked
          </h3>

          <p className="text-sm text-slate-400 mt-2">
            You didn't track any time on this day.
          </p>

        </div>

      )}

    </div>
  );
}