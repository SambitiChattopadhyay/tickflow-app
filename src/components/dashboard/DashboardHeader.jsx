import {
  ChevronDown,
  CalendarDays,
} from "lucide-react";

import { useState } from "react";


const DashboardHeader = ({ username }) => {
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );


  return (
    <header className="mb-8">


      {/* Top Row */}

      <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-6">


        {/* Greeting */}

        <div>

          <p className="text-slate-500 text-lg">
            Good evening,
          </p>

          <h1 className="text-4xl font-bold text-slate-900 mt-1">

            {username} 

          </h1>

          <p className="text-slate-500 mt-2">

            Here's how you spent your time today.

          </p>

        </div>



        {/* Right Side */}

        <div className="flex items-center gap-5">



          {/* Profile */}

          <button className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl shadow-sm hover:shadow-md transition">

            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">

              {username.charAt(0).toUpperCase()}

            </div>


            <div className="text-left">

              <p className="font-medium text-slate-800">

                {username}

              </p>

              <p className="text-xs text-slate-500">

                My Profile

              </p>

            </div>


            <ChevronDown
              size={16}
              className="text-slate-500"
            />

          </button>


        </div>

      </div>



      {/* Date Row */}

      <div className="flex justify-end mt-6">

        <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl shadow-sm">

          <CalendarDays
            size={20}
            className="text-slate-600"
          />

          <input
            type="date"
            value={selectedDate}
            onChange={(event) =>
              setSelectedDate(event.target.value)
            }
            className="outline-none text-slate-700"
          />

        </div>

      </div>


    </header>
  );
};


export default DashboardHeader;