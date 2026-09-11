import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import DashboardStats from "../components/dashboard/DashboardStats";
import DashboardCharts from "../components/dashboard/DashboardCharts";
import ActivityTable from "../components/dashboard/ActivityTable";

import {
  useState,
  useEffect,
} from "react";


const DashboardPage = () => {

  const [username, setUsername] = useState("");


  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );



  useEffect(() => {

    const getUser = async () => {

      try {

        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/users/profile`,
          {
            credentials: "include",
          }
        );


        const data = await response.json();
        console.log("Profile data:", data);

        if (response.ok) {

          setUsername(
            data.user.username
          );

        }

      }

      catch (error) {

        console.error(
          "Failed to fetch user:",
          error
        );

      }

    };


    getUser();

  }, []);




  return (

    <div className="min-h-screen bg-slate-100 flex">


      <DashboardSidebar />



      <main className="flex-1 p-6 lg:p-10">


        <DashboardHeader
          username={username}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />


        <DashboardStats
          selectedDate={selectedDate}
        />


        <DashboardCharts
          selectedDate={selectedDate}
        />


        <ActivityTable
          selectedDate={selectedDate}
        />


      </main>


    </div>

  );

};
export default DashboardPage;