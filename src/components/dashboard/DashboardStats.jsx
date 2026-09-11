import {
  Clock3,
  List,
  CheckCircle2,
  Play,
} from "lucide-react";

import { useEffect, useState } from "react";


const DashboardStats = () => {

  const [statsData, setStatsData] = useState({
    totalTime: "0m",
    totalActivities: 0,
    completedActivities: 0,
    currentActivity: "None",
  });


  useEffect(() => {

    const fetchDashboardStats = async () => {

      try {

        const apiUrl =
          import.meta.env.VITE_API_URL;


        const [
          // activitiesResponse,
          dailySummaryResponse,
          activeActivityResponse,
        ] = await Promise.all([

          fetch(
            `${apiUrl}/api/activities/summary/today`,
            {
              credentials: "include",
            }
          ),

          fetch(
            `${apiUrl}/api/activities/active`,
            {
              credentials: "include",
            }
          ),

        ]);
        const dailySummaryData =
          await dailySummaryResponse.json();

        const activeActivityData =
          await activeActivityResponse.json();


        console.log(
  "Today's Activities:",
  dailySummaryData.activities
);

        console.log(
          "Daily Summary:",
          dailySummaryData
        );

        console.log(
          "Active Activity:",
          activeActivityData
        );


        /*
          Backend duration is stored
          in milliseconds
        */
const totalMilliseconds =
  dailySummaryData.totalDuration || 0;

const totalSeconds =
  Math.floor(
    totalMilliseconds / 1000
  );

const hours =
  Math.floor(
    totalSeconds / 3600
  );

const minutes =
  Math.floor(
    (totalSeconds % 3600) / 60
  );

const seconds =
  totalSeconds % 60;

let formattedTime = "";

if (hours > 0) {
  formattedTime += `${hours}h `;
}

if (minutes > 0 || hours > 0) {
  formattedTime += `${minutes}m `;
}

formattedTime += `${seconds}s`;

        const activities =
  dailySummaryData.activities || [];

const completedActivities =
  dailySummaryData.completedActivities || [];

        const currentActivity =
          activeActivityData.activity;


        setStatsData({

          totalTime:
            formattedTime,

          totalActivities:
            activities.length,

          completedActivities:
            completedActivities.length,

          currentActivity:
            currentActivity
              ? currentActivity.name
              : "None",

        });


      } catch (error) {

        console.error(
          "Failed to fetch dashboard stats:",
          error
        );

      }

    };


    fetchDashboardStats();

  }, []);


  const stats = [

    {
      title: "Total Time Tracked",
      value: statsData.totalTime,
      icon: <Clock3 size={24} />,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },


    {
      title: "Total Activities",
      value: statsData.totalActivities,
      icon: <List size={24} />,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },


    {
      title: "Completed Activities",
      value:
        statsData.completedActivities,
      icon: <CheckCircle2 size={24} />,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },


    {
      title: "Currently Running",
      value:
        statsData.currentActivity,
      icon: <Play size={24} />,
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
    },

  ];


  return (

    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">

      {stats.map((stat) => (

        <div
          key={stat.title}
          className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100"
        >

          <div className="flex items-center justify-between mb-5">

            <div
              className={`w-11 h-11 rounded-xl flex items-center justify-center ${stat.iconBg} ${stat.iconColor}`}
            >

              {stat.icon}

            </div>

          </div>


          <p className="text-sm text-slate-500">

            {stat.title}

          </p>


          <h2 className="text-2xl font-bold text-slate-900 mt-1">

            {stat.value}

          </h2>

        </div>

      ))}

    </section>

  );
};


export default DashboardStats;