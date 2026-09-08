import { useState } from "react";
import {
  BarChart3,
} from "lucide-react";

import ReportStats from "../components/reports/ReportStats";
import ProductivityChart from "../components/reports/ProductivityChart";
import ActivityReport from "../components/reports/ActivityReport";

export default function ReportsPage() {
  const [period, setPeriod] = useState("week");

  const productivityData = [
    { day: "Mon", seconds: 7200 },
    { day: "Tue", seconds: 10800 },
    { day: "Wed", seconds: 5400 },
    { day: "Thu", seconds: 12600 },
    { day: "Fri", seconds: 9000 },
    { day: "Sat", seconds: 3600 },
    { day: "Sun", seconds: 6600 },
  ];

  const activityData = [
    {
      name: "Development",
      seconds: 14400,
      sessions: 6,
      percentage: 38,
    },
    {
      name: "Study",
      seconds: 10800,
      sessions: 5,
      percentage: 29,
    },
    {
      name: "Research",
      seconds: 7200,
      sessions: 3,
      percentage: 19,
    },
    {
      name: "Planning",
      seconds: 5400,
      sessions: 2,
      percentage: 14,
    },
  ];

  const periods = [
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
              <BarChart3 size={22} />
            </div>

            <p className="text-sm font-medium text-blue-600">
              PRODUCTIVITY INSIGHTS
            </p>

          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5">

            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900">
                Reports
              </h1>

              <p className="text-slate-500 mt-3 text-lg">
                Analyze your productivity and time patterns.
              </p>
            </div>


            {/* Period Filter */}

            <div className="flex items-center bg-white border border-slate-200 rounded-xl p-1">
              {periods.map(({ label, value }) => (
                <button
                  key={value}
                  onClick={() => setPeriod(value)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                    period === value
                      ? "bg-slate-900 text-white"
                      : "text-slate-500 hover:bg-slate-100"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

          </div>
        </header>


        {/* Stats */}

        <ReportStats data={productivityData} />


        {/* Charts */}

        <section className="mt-8">
          <ProductivityChart
            productivityData={productivityData}
            activityData={activityData}
          />
        </section>


        {/* Activity Report */}

        <section className="mt-8">
          <ActivityReport
            activities={activityData}
          />
        </section>

      </div>
    </div>
  );
}