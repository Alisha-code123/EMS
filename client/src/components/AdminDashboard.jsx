
// import { Building2Icon, CalendarIcon, FileTextIcon, UserIcon } from 'lucide-react'


// const AdminDashboard = ({data}) => {
//   const stats = [
//     {
//       icon: UserIcon ,
//       value: data.totalEmployees,
//       label: "Total Employees",
//       description: "Active workforce"
//     },
//     {
//       icon: Building2Icon ,
//       value: data.totalDepartments,
//       label: "Departments",
//       description: "Organization units"
//     },
//     {
//     icon: CalendarIcon,
//     value: data.todayAttendance ?? 0,
//     label: "Today's Attendance",
//     description: "Checked in today"
//    },
//     {
//       icon: FileTextIcon,
//       value: data.pendingLeaves,
//       label: "Pending Leaves",
//       description: "Checked in today"
//     },
//   ]
//   return (
//     <div className="animate-fade-in">
      
//       {/* Header */}
//       <div className="page-header ">
//         <h1 className="page-title">
//           Dashboard
//         </h1>
//         <p className="page-subtitle">
//           Welcome back, Admin - here's your overview
//         </p>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 ">
//         {stats.map((s) => (
//           <div
//             key={s.label}
//             className="relative bg-white border border-gray-200 rounded-lg px-4 py-5 flex items-center justify-between"
//           >
//             {/* Left border */}
//             <div className="absolute left-0 top-0 bottom-0 w-0.75 bg-gray-300 rounded-l-lg" />

//             {/* Text */}
//             <div className="ml-3">
//               <p className="text-sm text-slate-700 font-medium">
//                 {s.label}
//               </p>
//               <p className="text-2xl font-bold text-slate-900 mt-1">
//                 {s.value}
//               </p>
//             </div>

//             {/* Icon */}
//             <s.icon className="w-6 h-6 text-gray-400" />
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default AdminDashboard


import {
  Building2Icon,
  FileTextIcon,
  UserIcon,
  CalendarIcon
} from "lucide-react"

const AdminDashboard = ({ data }) => {
  const stats = [
    {
      icon: UserIcon,
      value: data?.totalEmployees ?? 0,
      label: "Total Employees"
    },
    {
      icon: Building2Icon,
      value: data?.totalDepartments ?? 0,
      label: "Departments"
    },
    {
      icon: CalendarIcon,
      value: data?.todayAttendance ?? 0,
      label: "Today's Attendance"
    },
    {
      icon: FileTextIcon,
      value: data?.pendingLeaves ?? 0,
      label: "Pending Leaves"
    }
  ]

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6 bg-gray-100 min-h-screen">
      
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          Dashboard
        </h1>
        <p className="text-sm text-gray-500">
          Welcome back, Admin — here’s your overview
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((item, index) => (
          <div
            key={index}
            className="relative bg-white border border-gray-200 rounded-lg px-5 py-5 flex items-center justify-between"
          >
            {/* Left border */}
            <div
              className={`absolute left-0 top-0 bottom-0 w-0.75 ${
                index === 0 ? "bg-indigo-500" : "bg-gray-300"
              } rounded-l-lg`}
            />

            {/* Text */}
            <div className="ml-3">
              <p className="text-sm text-gray-500">
                {item.label}
              </p>
              <p className="text-xl font-semibold text-gray-800 mt-1">
                {item.value}
              </p>
            </div>

            {/* Icon */}
            <item.icon
              className={`w-6 h-6 ${
                index === 0 ? "text-indigo-500" : "text-gray-400"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdminDashboard