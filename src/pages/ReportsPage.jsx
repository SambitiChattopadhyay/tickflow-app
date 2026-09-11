import { useEffect, useState } from "react";

import {
  BarChart3,
} from "lucide-react";

import ReportStats from "../components/reports/ReportStats";
import ProductivityChart from "../components/reports/ProductivityChart";
import ActivityReport from "../components/reports/ActivityReport";


export default function ReportsPage() {

  const [period, setPeriod] =
    useState("week");


  const [activities, setActivities] =
    useState([]);


  const [loading, setLoading] =
    useState(true);



  /*
    Fetch all activities
    from backend
  */

  useEffect(() => {

    const fetchActivities =
      async () => {

        try {

          const response =
            await fetch(
              `${import.meta.env.VITE_API_URL}/api/activities`,
              {
                credentials: "include",
              }
            );


          if (!response.ok) {

            throw new Error(
              "Failed to fetch activities"
            );

          }


          const data =
            await response.json();


          console.log(
            "Report activities:",
            data.activities
          );


          setActivities(
            data.activities || []
          );


        } catch (error) {

          console.error(
            "Failed to fetch reports:",
            error
          );

        } finally {

          setLoading(false);

        }

      };


    fetchActivities();

  }, []);



  /*
    Get today's date range
  */

  const now =
    new Date();


  const startOfToday =
    new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate()
    );


  const startOfTomorrow =
    new Date(startOfToday);

  startOfTomorrow.setDate(
    startOfTomorrow.getDate() + 1
  );



  /*
    Get current week's range

    Monday → Sunday
  */

  const startOfWeek =
    new Date(startOfToday);


  const day =
    startOfWeek.getDay();


  /*
    Sunday = 0
    Monday = 1
  */

  const daysFromMonday =
    day === 0
      ? 6
      : day - 1;


  startOfWeek.setDate(
    startOfWeek.getDate() -
    daysFromMonday
  );


  const startOfNextWeek =
    new Date(startOfWeek);


  startOfNextWeek.setDate(
    startOfNextWeek.getDate() + 7
  );



  /*
    Filter activities
    depending on selected period
  */

  const filteredActivities =
    activities.filter(
      (activity) => {

        /*
          Only completed activities
          count in reports
        */

        if (
          activity.status !== "completed"
        ) {

          return false;

        }


        const activityDate =
          new Date(
            activity.startTime
          );


        if (
          period === "today"
        ) {

          return (
            activityDate >=
              startOfToday &&
            activityDate <
              startOfTomorrow
          );

        }


        /*
          This Week
        */

        return (
          activityDate >=
            startOfWeek &&
          activityDate <
            startOfNextWeek
        );

      }
    );



  /*
    PRODUCTIVITY BAR DATA
  */

  let productivityData;



  if (period === "today") {

    /*
      One bar for today
    */

    const totalSeconds =
      filteredActivities.reduce(
        (total, activity) =>
          total +
          (
            activity.duration /
            1000
          ),
        0
      );


    productivityData = [

      {
        day: "Today",
        seconds: totalSeconds,
      },

    ];

  } else {

    /*
      Seven bars:
      Monday → Sunday
    */

    const weekDays = [

      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun",

    ];


    productivityData =
      weekDays.map(
        (dayName, index) => {

          const currentDay =
            new Date(startOfWeek);


          currentDay.setDate(
            startOfWeek.getDate() +
            index
          );


          const nextDay =
            new Date(currentDay);


          nextDay.setDate(
            currentDay.getDate() + 1
          );


          const totalSeconds =
            filteredActivities
              .filter(
                (activity) => {

                  const activityDate =
                    new Date(
                      activity.startTime
                    );


                  return (
                    activityDate >=
                      currentDay &&
                    activityDate <
                      nextDay
                  );

                }
              )
              .reduce(
                (total, activity) =>
                  total +
                  (
                    activity.duration /
                    1000
                  ),
                0
              );


          return {

            day: dayName,

            seconds:
              totalSeconds,

          };

        }
      );

  }



  /*
    ACTIVITY DISTRIBUTION DATA

    Group activities
    with the same name
  */

  const groupedActivities =
    filteredActivities.reduce(
      (acc, activity) => {

        const name =
          activity.name ||
          "Others";


        const seconds =
          activity.duration /
          1000;


        if (!acc[name]) {

          acc[name] = {

            name,

            seconds: 0,

            sessions: 0,

          };

        }


        acc[name].seconds +=
          seconds;


        acc[name].sessions +=
          1;


        return acc;

      },
      {}
    );



  const totalActivitySeconds =
    Object.values(
      groupedActivities
    ).reduce(
      (total, activity) =>
        total +
        activity.seconds,
      0
    );



  const activityData =
    Object.values(
      groupedActivities
    ).map(
      (activity) => ({

        ...activity,

        percentage:
          totalActivitySeconds > 0

            ? Math.round(
                (
                  activity.seconds /
                  totalActivitySeconds
                ) * 100
              )

            : 0,

      })
    );



  const periods = [

    {
      label: "Today",
      value: "today",
    },

    {
      label: "This Week",
      value: "week",
    },

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

              {periods.map(
                ({
                  label,
                  value,
                }) => (

                  <button

                    key={value}

                    onClick={() =>
                      setPeriod(value)
                    }

                    className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                      period === value
                        ? "bg-slate-900 text-white"
                        : "text-slate-500 hover:bg-slate-100"
                    }`}

                  >

                    {label}

                  </button>

                )
              )}

            </div>


          </div>

        </header>



        {loading ? (

          <p className="text-slate-500">

            Loading reports...

          </p>

        ) : (

          <>


            {/* Stats */}

            <ReportStats
              data={productivityData}
            />



            {/* Charts */}

            <section className="mt-8">

              <ProductivityChart

                productivityData={
                  productivityData
                }

                activityData={
                  activityData
                }

              />

            </section>



            {/* Activity Report */}

            <section className="mt-8">

              <ActivityReport

                activities={
                  activityData
                }

              />

            </section>


          </>

        )}


      </div>

    </div>

  );

}