import {
  Clock3,CalendarDays,PlayCircle,CheckCircle2,
} from "lucide-react";

export default function ActivityCard({ activity }) {
  const isActive = activity.status === "active";

  const formatTime = (date) =>
    new Date(date).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

  const formatDate = (date) => {
    const activityDate = new Date(date);

    if (activityDate.toDateString() === new Date().toDateString()) {
      return "Today";
    }

    return activityDate.toLocaleDateString([], {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const formatDuration = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (hours) return `${hours}h ${minutes}m`;
    if (minutes) return `${minutes}m ${secs}s`;

    return `${secs}s`;
  };

  return (
    <div
      className={`bg-white border rounded-2xl p-5 transition hover:shadow-md ${
        isActive ? "border-blue-300" : "border-slate-100"
      }`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">

        {/* Activity Info */}
        <div className="flex items-start gap-4">
          <div
            className={`w-11 h-11 shrink-0 rounded-xl flex items-center justify-center ${
              isActive
                ? "bg-blue-100 text-blue-600"
                : "bg-emerald-50 text-emerald-600"
            }`}
          >
            {isActive ? (
              <PlayCircle size={22} />
            ) : (
              <CheckCircle2 size={22} />
            )}
          </div>

          <div>
            <div className="flex items-center gap-3 flex-wrap">
              <h3 className="font-semibold text-slate-900 text-lg">
                {activity.name}
              </h3>

              <span
                className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                  isActive
                    ? "bg-blue-100 text-blue-700"
                    : "bg-emerald-100 text-emerald-700"
                }`}
              >
                {isActive ? "ACTIVE" : "COMPLETED"}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-3 text-sm text-slate-500">

              <span className="flex items-center gap-2">
                <CalendarDays size={16} />
                {formatDate(activity.startTime)}
              </span>

              <span className="flex items-center gap-2">
                <Clock3 size={16} />
                {formatTime(activity.startTime)}

                {activity.endTime && (
                  <>
                    <span>→</span>
                    {formatTime(activity.endTime)}
                  </>
                )}
              </span>

            </div>
          </div>
        </div>

        {/* Duration */}
        <div className="sm:text-right">
          <p className="text-xs uppercase tracking-wide text-slate-400 font-medium">
            Duration
          </p>

          <p className="text-2xl font-bold text-slate-900 mt-1">
            {formatDuration(activity.duration)}
          </p>
        </div>

      </div>
    </div>
  );
}