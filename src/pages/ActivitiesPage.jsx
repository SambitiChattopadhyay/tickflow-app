import {
  useEffect,
  useState,
} from "react";

import {
  Search,
  Activity,
  SlidersHorizontal,
} from "lucide-react";


import ActivityStats from "../components/activities/ActivityStats";
import ActivityCard from "../components/activities/ActivityCard";


export default function ActivitiesPage() {


  /*
    Search state
  */

  const [search, setSearch] =
    useState("");


  /*
    Only Today and This Week
  */

  const [filter, setFilter] =
    useState("today");


  /*
    Activities from backend
  */

  const [activities, setActivities] =
    useState([]);


  const [loading, setLoading] =
    useState(true);



  /*
    Fetch activities
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
                method: "GET",
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
            "Activities:",
            data.activities
          );


          setActivities(
            data.activities || []
          );


        } catch (error) {

          console.error(
            "Failed to fetch activities:",
            error
          );

        } finally {

          setLoading(false);

        }

      };


    fetchActivities();

  }, []);



  /*
    Today's date range
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
    This week's range

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
    based on Today / This Week
  */

  const filteredActivities =
    activities

      .filter(
        (activity) => {

          const activityDate =
            new Date(
              activity.startTime
            );


          /*
            TODAY
          */

          if (
            filter === "today"
          ) {

            return (
              activityDate >=
                startOfToday &&

              activityDate <
                startOfTomorrow
            );

          }


          /*
            THIS WEEK
          */

          return (

            activityDate >=
              startOfWeek &&

            activityDate <
              startOfNextWeek

          );

        }
      )


      /*
        Search filter
      */

      .filter(
        (activity) =>

          (activity.name || "")
            .toLowerCase()
            .includes(
              search.toLowerCase()
            )

      );



  /*
    Only two filters
  */

  const filters = [

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



        {/* Stats

            Pass currently selected
            activities to stats
        */}

        <ActivityStats
          activities={
            filteredActivities
          }
        />



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


              {/* Today / Week */}

              <div className="flex items-center gap-1 bg-white border border-slate-200 rounded-xl p-1">

                {filters.map(
                  ({
                    label,
                    value,
                  }) => (

                    <button

                      key={value}

                      onClick={() =>
                        setFilter(value)
                      }

                      className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                        filter === value
                          ? "bg-slate-900 text-white"
                          : "text-slate-500 hover:bg-slate-100"
                      }`}

                    >

                      {label}

                    </button>

                  )
                )}

              </div>



              {/* Search */}

              <div className="flex items-center gap-3 bg-white border border-slate-200 rounded-xl px-4 py-2">

                <Search
                  size={18}
                  className="text-slate-400"
                />


                <input

                  type="text"

                  placeholder="Search activities..."

                  value={search}

                  onChange={
                    (e) =>
                      setSearch(
                        e.target.value
                      )
                  }

                  className="outline-none text-sm text-slate-700 w-full sm:w-48"

                />

              </div>


            </div>


          </div>



          {/* Loading */}

          {loading ? (

            <p className="text-sm text-slate-500">

              Loading activities...

            </p>

          ) : (


            /* Activity List */

            filteredActivities.length ? (

              <div className="space-y-4">

                {filteredActivities.map(
                  (activity) => (

                    <ActivityCard

                      key={
                        activity._id
                      }

                      activity={
                        activity
                      }

                    />

                  )
                )}

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

            )

          )}


        </section>


      </div>

    </div>

  );

}