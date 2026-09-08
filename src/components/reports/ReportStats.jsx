import {
  Clock3,
  CalendarDays,
  Trophy,
} from "lucide-react";

export default function ReportStats({ data }) {
  const totalSeconds = data.reduce(
    (total, item) => total + item.seconds,
    0
  );

  const totalDays = data.length;

  const averageSeconds = totalDays
    ? Math.floor(totalSeconds / totalDays)
    : 0;

  const topDay = data.reduce(
    (top, item) =>
      item.seconds > top.seconds ? item : top,
    data[0]
  );

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor(
      (seconds % 3600) / 60
    );

    return `${hours}h ${minutes}m`;
  };

  const stats = [
    {
      label: "Total Time",
      value: formatTime(totalSeconds),
      icon: Clock3,
      color: "bg-blue-50 text-blue-600",
    },
    {
      label: "Average / Day",
      value: formatTime(averageSeconds),
      icon: CalendarDays,
      color: "bg-violet-50 text-violet-600",
    },
    {
      label: "Most Productive",
      value: topDay?.day || "-",
      icon: Trophy,
      color: "bg-amber-50 text-amber-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.label}
            className="bg-white border border-slate-100 shadow-sm rounded-2xl p-5"
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
                className={`w-11 h-11 rounded-xl flex items-center justify-center ${stat.color}`}
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