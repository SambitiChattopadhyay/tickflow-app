import {
  Clock3,
  List,
  CheckCircle2,
  Play,
} from "lucide-react";


const DashboardStats = () => {
  const stats = [
    {
      title: "Total Time Tracked",
      value: "6h 45m",
      icon: <Clock3 size={24} />,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Total Activities",
      value: "5",
      icon: <List size={24} />,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      title: "Completed Activities",
      value: "4",
      icon: <CheckCircle2 size={24} />,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      title: "Currently Running",
      value: "Reading",
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