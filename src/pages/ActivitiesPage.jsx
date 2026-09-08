import { useState } from "react";
import {
  Search,
  Activity,
  SlidersHorizontal,
} from "lucide-react";

import ActivityStats from "../components/activities/ActivityStats";
import ActivityCard from "../components/activities/ActivityCard";

export default function ActivitiesPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

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
      startTime: "2026-09-08T15:00:00",
      endTime: "2026-09-08T16:30:00",
      duration: 5400,
      status: "completed",
    },
    {
      id: 5,
      name: "Documentation",
      startTime: "2026-09-09T12:30:00",
      endTime: null,
      duration: 1800,
      status: "active",
    },
  ];

  const filteredActivities = activities
    .filter((activity) => {
      const activityDate = new Date(activity.startTime);
      const today = new Date();

      if (filter === "today") {
        return (
          activityDate.toDateString() ===
          today.toDateString()
        );
      }

      if (filter === "week") {
        const weekAgo = new Date();
        weekAgo.setDate(today.getDate() - 7);

        return activityDate >= weekAgo;
      }

      return true;
    })
    .filter((activity) =>
      activity.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  const filters = [
    { label: "All", value: "all" },
    { label: "Today", value: "today" },
    { label: "This Week", value: "week" },
  ];

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-8 lg:px-10 lg:py-10">

        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-11 h-11 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
              <Activity size={22} />
            </div>

            <p className="text-sm font-medium text-blue-600">
              TRACK YOUR PROGRESS
            </p>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900">
            Activities
          </h1>

          <p className="text-slate-500 mt-3 text-lg">
            Review your work sessions and tracked activity history.
          </p>
        </header>

        {/* Stats */}
        <ActivityStats activities={activities} />

        <section className="mt-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 mb-6">

            <div>
              <h2 className="text-xl font-semibold text-slate-900">
                Activity History
              </h2>

              <p className="text-sm text-slate-500 mt-1">
                Browse and review your tracked sessions.
              </p>
            </div>

            {/* Filters and Search */}
            <div className="flex flex-col sm:flex-row gap-3">

              <div className="flex items-center gap-1 bg-white border border-slate-200 rounded-xl p-1">
                {filters.map(({ label, value }) => (
                  <button
                    key={value}
                    onClick={() => setFilter(value)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                      filter === value
                        ? "bg-slate-900 text-white"
                        : "text-slate-500 hover:bg-slate-100"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-3 bg-white border border-slate-200 rounded-xl px-4 py-2">
                <Search size={18} className="text-slate-400" />

                <input
                  type="text"
                  placeholder="Search activities..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="outline-none text-sm text-slate-700 w-full sm:w-48"
                />
              </div>
            </div>
          </div>

          {/* Activity List */}
          {filteredActivities.length ? (
            <div className="space-y-4">
              {filteredActivities.map((activity) => (
                <ActivityCard
                  key={activity.id}
                  activity={activity}
                />
              ))}
            </div>
          ) : (
            <div className="bg-white border-2 border-dashed border-slate-200 rounded-2xl py-16 text-center">
              <SlidersHorizontal
                size={32}
                className="mx-auto text-slate-300"
              />

              <h3 className="font-semibold text-slate-700 mt-4">
                No activities found
              </h3>

              <p className="text-sm text-slate-500 mt-2">
                Try changing your filters or search.
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}