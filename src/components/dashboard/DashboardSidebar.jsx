
import {
  LayoutDashboard,
  Timer,
  List,
  BarChart3,
  CalendarDays,
  Settings,
  LogOut,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

const DashboardSidebar = () => {
  const navigate = useNavigate();
  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboard size={20} />,
      //removing active:true,because NavLink automatically detects which route is active.
      
    },
    {
     name: "Workspace",
     path: "/workspace",
     icon: <Timer size={20} />,
    },
    {
      name: "Activities",
      path: "/activities",
      icon: <List size={20} />,
    },
    {
      name: "Reports",
      path: "/reports",
      icon: <BarChart3 size={20} />,
    },
    {
      name: "Calendar",
      path: "/calendar",
      icon: <CalendarDays size={20} />,
    },
   
    {
      name: "Settings",
     path: "/settings",
      icon: <Settings size={20} />,
    },
  ];
    //logout function
    const handleLogout = async () => {
    try {
      await fetch(`${import.meta.env.VITE_API_URL}/auth/logout`, {
        method: "POST",
        credentials: "include",
      });

      navigate("/");//sends user to landing page
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };//end

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
        <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
            `w-full flex items-center gap-3 px-4 py-3 rounded-xl transition ${
            isActive
            ? "bg-blue-600 text-white"
            : "text-slate-400 hover:bg-slate-800 hover:text-white"
            }`
            }
            >
            {item.icon}

            <span>{item.name}</span>
        </NavLink>
        ))}
      </nav>

      <button 
       onClick={handleLogout}//runs handlelogout func
      className="mt-auto flex items-center gap-3 px-4 py-3 text-slate-400 hover:bg-slate-800 hover:text-white rounded-xl transition"
      >
        <LogOut size={20} />
        <span>Logout</span>
      </button>

    </aside>
  );
};

export default DashboardSidebar;