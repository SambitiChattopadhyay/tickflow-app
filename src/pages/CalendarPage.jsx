import { useState, useEffect } from "react";
import { CalendarDays } from "lucide-react";

import CalendarGrid from "../components/calendar/CalendarGrid";
import DayActivities from "../components/calendar/DayActivities";
const API = import.meta.env.VITE_API_URL;
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
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  //fetch user activities
 
useEffect(() => {
  const fetchActivities = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        `${API}/api/activities`,
        {
          method: "GET",
          credentials: "include",
        }
      );

      const data = await response.json();

      console.log(
        "Activities from backend:",
        data
      );

      if (!response.ok) {
        throw new Error(
          data.message ||
          "Failed to fetch activities"
        );
      }

      setActivities(data.activities);

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