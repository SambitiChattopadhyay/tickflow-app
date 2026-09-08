// import DashboardSidebar from "../components/dashboard/DashboardSidebar";
// import DashboardHeader from "../components/dashboard/DashboardHeader";
// import DashboardStats from "../components/dashboard/DashboardStats";
// import DashboardCharts from "../components/dashboard/DashboardCharts";
// import ActivityTable from "../components/dashboard/ActivityTable";

// import { dashboardData } from "../data/dashboardData";


// const DashboardPage = () => {
//   return (
//     <div className="min-h-screen bg-slate-100 flex">

//       <DashboardSidebar />

//       <main className="flex-1 p-6 lg:p-10">

//         <DashboardHeader
//           username={dashboardData.username}
//         />

//         <DashboardStats
//           dashboardData={dashboardData}
//         />

//         <DashboardCharts
//           activities={dashboardData.activities}
//         />

//         <ActivityTable
//           activities={dashboardData.activities}
//         />

//       </main>

//     </div>
//   );
// };


// export default DashboardPage;
import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import DashboardStats from "../components/dashboard/DashboardStats";

const DashboardPage = () => {
  const username = "Samwati";


  return (
    <div className="min-h-screen bg-slate-100 flex">

      <DashboardSidebar />


      <main className="flex-1 p-6 lg:p-10">

       <DashboardHeader
             username={username}
            />

    <DashboardStats />

      </main>

    </div>
  );
};


export default DashboardPage;