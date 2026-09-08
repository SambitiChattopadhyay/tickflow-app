import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CalendarGrid({
  currentMonth,
  setCurrentMonth,
  selectedDate,
  setSelectedDate,
  activities,
}) {
  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();
  const today = new Date();

  const firstDay = new Date(year, month, 1);
  const startDay = (firstDay.getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const currentDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );

  const sameDay = (date1, date2) =>
    date1.toDateString() === date2.toDateString();

  const hasActivity = (date) =>
    activities.some((activity) =>
      sameDay(new Date(activity.startTime), date)
    );

  const changeMonth = (direction) =>
    setCurrentMonth(new Date(year, month + direction, 1));

  const days = Array.from(
    { length: startDay + daysInMonth },
    (_, index) =>
      index < startDay
        ? null
        : new Date(year, month, index - startDay + 1)
  );

  const getDayColor = (date) => {
    if (hasActivity(date)) return "text-emerald-600";
    if (date > currentDate) return "text-slate-300";
    return "text-red-500";
  };

  return (
    <div className="bg-white border border-slate-100 rounded-2xl p-5 sm:p-6 shadow-sm">

      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={() => changeMonth(-1)}
          className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center hover:bg-slate-100"
        >
          <ChevronLeft size={20} className="text-black" />
        </button>

        <h2 className="text-xl font-semibold text-slate-900">
          {currentMonth.toLocaleDateString("en-US", {
            month: "long",
            year: "numeric",
          })}
        </h2>

        <button
          onClick={() => changeMonth(1)}
          className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center hover:bg-slate-100"
        >
          <ChevronRight size={20} className="text-black" />
        </button>
      </div>

      {/* Weekdays */}
      <div className="grid grid-cols-7 mb-3">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
          (day) => (
            <div
              key={day}
              className="text-center text-xs sm:text-sm font-medium text-slate-400"
            >
              {day}
            </div>
          )
        )}
      </div>

      {/* Dates */}
      <div className="grid grid-cols-7 gap-y-3">
        {days.map((date, index) => {
          if (!date) return <div key={index} />;

          const isToday = sameDay(date, today);
          const isSelected = sameDay(date, selectedDate);

          return (
            <button
              key={date.toISOString()}
              onClick={() => setSelectedDate(date)}
              className="flex justify-center py-1"
            >
              <span
                className={`
                  w-9 h-9 sm:w-10 sm:h-10 rounded-full
                  flex items-center justify-center
                  text-sm sm:text-base font-medium transition
                  ${getDayColor(date)}
                  ${isToday ? "border-2 border-blue-500" : ""}
                  ${isSelected && !isToday ? "bg-slate-100" : ""}
                  hover:bg-slate-100
                `}
              >
                {date.getDate()}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}