import { useState } from "react";
import { CalendarDays } from "lucide-react";

import CalendarGrid from "../components/calendar/CalendarGrid";
import DayActivities from "../components/calendar/DayActivities";

export default function CalendarPage() {
  const today = new Date();

  const [currentMonth, setCurrentMonth] =
    useState(
      new Date(
        today.getFullYear(),
        today.getMonth(),
        1
      )
    );

  const [selectedDate, setSelectedDate] =
    useState(today);


  // Temporary frontend data
  const activities = [
    {
      id: 1,
      name: "Study React",
      startTime: "2026-09-09T10:30:00",
      endTime: "2026-09-09T11:45:00",
      duration: 4500,
      status: "completed",
    },
    {
      id: 2,
      name: "Backend Development",
      startTime: "2026-09-09T09:00:00",
      endTime: "2026-09-09T10:10:00",
      duration: 4200,
      status: "completed",
    },
    {
      id: 3,
      name: "Research",
      startTime: "2026-09-08T18:20:00",
      endTime: "2026-09-08T19:00:00",
      duration: 2400,
      status: "completed",
    },
    {
      id: 4,
      name: "Project Planning",
      startTime: "2026-09-07T15:00:00",
      endTime: "2026-09-07T16:30:00",
      duration: 5400,
      status: "completed",
    },
    {
      id: 5,
      name: "Documentation",
      startTime: "2026-09-05T12:30:00",
      endTime: "2026-09-05T13:10:00",
      duration: 2400,
      status: "completed",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100">

      <div className="max-w-7xl mx-auto px-6 py-8 lg:px-10 lg:py-10">

        {/* Header */}

        <header className="mb-8">

          <div className="flex items-center gap-3 mb-3">

            <div className="w-11 h-11 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
              <CalendarDays size={22} />
            </div>

            <p className="text-sm font-medium text-blue-600">
              ACTIVITY HISTORY
            </p>

          </div>


          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900">
            Calendar
          </h1>


          <p className="text-slate-500 mt-3 text-lg">
            View your tracked activity history by date.
          </p>

        </header>


        {/* Calendar */}

        <section>

          <CalendarGrid
            currentMonth={currentMonth}
            setCurrentMonth={
              setCurrentMonth
            }
            selectedDate={selectedDate}
            setSelectedDate={
              setSelectedDate
            }
            activities={activities}
          />

        </section>


        {/* Selected Day Activities */}

        <section className="mt-8">

          <DayActivities
            selectedDate={selectedDate}
            activities={activities}
          />

        </section>

      </div>

    </div>
  );
}