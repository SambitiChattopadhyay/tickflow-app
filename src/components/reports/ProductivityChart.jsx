// import {
//   BarChart,
//   Bar,
//   PieChart,
//   Pie,
//   Cell,
//   ResponsiveContainer,
//   XAxis,
//   YAxis,
//   Tooltip,
//   CartesianGrid,
// } from "recharts";

// export default function ProductivityChart({
//   productivityData,
//   activityData,
// }) {
//   const formatHours = (seconds) =>
//     (seconds / 3600).toFixed(1);

//   const colors = [
//     "#2563eb",
//     "#7c3aed",
//     "#10b981",
//     "#f59e0b",
//     "#ef4444",
//   ];

//   return (
//     <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

//       {/* Bar Chart */}

//       <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
//         <div className="mb-6">
//           <h2 className="text-lg font-semibold text-slate-900">
//             Daily Productivity
//           </h2>

//           <p className="text-sm text-slate-500 mt-1">
//             Time tracked across your selected period.
//           </p>
//         </div>

//         <div className="h-72">
//           <ResponsiveContainer width="100%" height="100%">
//             <BarChart data={productivityData}>
//               <CartesianGrid
//                 strokeDasharray="3 3"
//                 vertical={false}
//               />

//               <XAxis
//                 dataKey="day"
//                 axisLine={false}
//                 tickLine={false}
//               />

//               <YAxis
//                 axisLine={false}
//                 tickLine={false}
//                 tickFormatter={(value) =>
//                   `${value / 3600}h`
//                 }
//               />

//               <Tooltip
//                 formatter={(value) =>
//                   `${formatHours(value)} hours`
//                 }
//               />

//               <Bar
//                 dataKey="seconds"
//                 fill="#2563eb"
//                 radius={[8, 8, 0, 0]}
//               />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>
//       </div>


//       {/* Pie Chart */}

//       <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
//         <div className="mb-6">
//           <h2 className="text-lg font-semibold text-slate-900">
//             Time Distribution
//           </h2>

//           <p className="text-sm text-slate-500 mt-1">
//             How your tracked time is distributed.
//           </p>
//         </div>

//         <div className="h-72">
//           <ResponsiveContainer width="100%" height="100%">
//             <PieChart>
//               <Pie
//                 data={activityData}
//                 dataKey="seconds"
//                 nameKey="name"
//                 cx="50%"
//                 cy="50%"
//                 outerRadius={95}
//                 label={({ name, percent }) =>
//                   `${name} ${(percent * 100).toFixed(0)}%`
//                 }
//               >
//                 {activityData.map((item, index) => (
//                   <Cell
//                     key={item.name}
//                     fill={
//                       colors[index % colors.length]
//                     }
//                   />
//                 ))}
//               </Pie>

//               <Tooltip
//                 formatter={(value) =>
//                   `${formatHours(value)} hours`
//                 }
//               />
//             </PieChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//     </div>
//   );
// }