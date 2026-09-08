// import {
//   LayoutDashboard,
//   Timer,
//   List,
//   BarChart3,
//   CalendarDays,
//   Target,
//   Settings,
//   LogOut,
// } from "lucide-react";


// const DashboardSidebar = () => {
//   const menuItems = [
//     {
//       name: "Dashboard",
//       icon: <LayoutDashboard size={20} />,
//       active: true,
//     },
//     {
//       name: "Start Tracking",
//       icon: <Timer size={20} />,
//     },
//     {
//       name: "Activities",
//       icon: <List size={20} />,
//     },
//     {
//       name: "Reports",
//       icon: <BarChart3 size={20} />,
//     },
//     {
//       name: "Calendar",
//       icon: <CalendarDays size={20} />,
//     },
//     {
//       name: "Goals",
//       icon: <Target size={20} />,
//     },
//     {
//       name: "Settings",
//       icon: <Settings size={20} />,
//     },
//   ];


//   return (
//     <aside className="w-64 min-h-screen bg-slate-950 text-white p-6 hidden lg:flex flex-col">

//       <div className="mb-12">

//         <h1 className="text-3xl font-bold">
//           Tick<span className="text-blue-400">Flow</span>
//         </h1>

//         <p className="text-slate-400 text-sm mt-1">
//           Track. Focus. Improve.
//         </p>

//       </div>


//       <nav className="space-y-2">

//         {menuItems.map((item) => (

//           <button
//             key={item.name}
//             className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition ${
//               item.active
//                 ? "bg-blue-600 text-white"
//                 : "text-slate-400 hover:bg-slate-800 hover:text-white"
//             }`}
//           >

//             {item.icon}

//             {item.name}

//           </button>

//         ))}

//       </nav>


//       <button className="mt-auto flex items-center gap-3 text-slate-400 hover:text-white">

//         <LogOut size={20} />

//         Logout

//       </button>

//     </aside>
//   );
// };


// export default DashboardSidebar;
import {
  LayoutDashboard,
  Timer,
  List,
  BarChart3,
  CalendarDays,
  Target,
  Settings,
  LogOut,
} from "lucide-react";

const DashboardSidebar = () => {
  const menuItems = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      active: true,
    },
    {
      name: "Start Tracking",
      icon: <Timer size={20} />,
    },
    {
      name: "Activities",
      icon: <List size={20} />,
    },
    {
      name: "Reports",
      icon: <BarChart3 size={20} />,
    },
    {
      name: "Calendar",
      icon: <CalendarDays size={20} />,
    },
    {
      name: "Goals",
      icon: <Target size={20} />,
    },
    {
      name: "Settings",
      icon: <Settings size={20} />,
    },
  ];

  return (
    <aside className="w-64 min-h-screen bg-slate-950 text-white p-6 flex flex-col">
      
      <div>
        <h1 className="text-3xl font-bold">
          Tick<span className="text-blue-400">Flow</span>
        </h1>

        <p className="text-slate-400 text-sm mt-1">
          Track. Focus. Improve.
        </p>
      </div>

      <nav className="space-y-2 mt-12">
        {menuItems.map((item) => (
          <button
            key={item.name}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition ${
              item.active
                ? "bg-blue-600 text-white"
                : "text-slate-400 hover:bg-slate-800 hover:text-white"
            }`}
          >
            {item.icon}
            <span>{item.name}</span>
          </button>
        ))}
      </nav>

      <button className="mt-auto flex items-center gap-3 px-4 py-3 text-slate-400 hover:bg-slate-800 hover:text-white rounded-xl transition">
        <LogOut size={20} />
        <span>Logout</span>
      </button>

    </aside>
  );
};

export default DashboardSidebar;