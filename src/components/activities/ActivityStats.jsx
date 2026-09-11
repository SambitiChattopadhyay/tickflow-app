import {
  Clock3,
  ListChecks,
  CalendarDays,
} from "lucide-react";

export default function ActivityStats({ activities }) {
  const totalSeconds = activities.reduce(
    (total, activity) => total + Math.floor(
  activity.duration / 1000
),
    0
  );

  const totalSessions = activities.length;

  const today = new Date().toDateString();

  const todaySessions = activities.filter(
    (activity) =>
      new Date(activity.startTime).toDateString() === today
  ).length;

  
  const formatDuration = (seconds) => {
  const hours = Math.floor(seconds / 3600);

  const minutes = Math.floor(
    (seconds % 3600) / 60
  );

  const remainingSeconds =
    seconds % 60;

  let formattedTime = "";

  if (hours > 0) {
    formattedTime += `${hours}h `;
  }

  if (minutes > 0 || hours > 0) {
    formattedTime += `${minutes}m `;
  }

  formattedTime += `${remainingSeconds}s`;

  return formattedTime;
};
  const stats = [
    {
      label: "Total Time",
      value: formatDuration(totalSeconds),
      icon: Clock3,
      color: "bg-blue-50 text-blue-600",
    },
    {
      label: "Total Sessions",
      value: totalSessions,
      icon: ListChecks,
      color: "bg-violet-50 text-violet-600",
    },
    {
      label: "Today's Sessions",
      value: todaySessions,
      icon: CalendarDays,
      color: "bg-emerald-50 text-emerald-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.label}
            className="
              bg-white
              border
              border-slate-100
              shadow-sm
              rounded-2xl
              p-5
            "
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">
                  {stat.label}
                </p>

                <p className="text-2xl font-bold text-slate-900 mt-2">
                  {stat.value}
                </p>
              </div>

              <div
                className={`
                  w-11
                  h-11
                  rounded-xl
                  flex
                  items-center
                  justify-center
                  ${stat.color}
                `}
              >
                <Icon size={21} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}