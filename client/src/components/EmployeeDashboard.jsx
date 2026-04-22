// import { ArrowRightIcon, CalendarIcon, DollarSignIcon, FileTextIcon } from 'lucide-react'
// import { Link } from 'react-router-dom'


// const EmployeeDashboard = ({ data }) => {
//   const emp = data?.employee

//   const cards = [
//     {
//       icon: CalendarIcon,
//       value: data?.currentMonthAttendance ?? 0,
//       title: "Days Present",
//       subtitle: "This month"
//     },
//     {
//       icon: FileTextIcon,
//       value: data?.pendingLeaves ?? 0,
//       title: "Pending Leaves",
//       subtitle: "Awaiting approval"
//     },
//     {
//       icon: DollarSignIcon,
//       value: data?.latestPayslip
//         ? `$${data.latestPayslip.netSalary?.toLocaleString()}`
//         : "N/A",
//       title: "Latest Payslip",
//       subtitle: "Most recent payout"
//     }
//   ]

//   return (
//     <div className='animate-fade-in'>
//        <div className='page-header'>
//             <h1 className='page-title'>Welcome, {emp?.firstName}!</h1>
//             <p className='page-subtitle'>
//              {emp?.position} - {emp?.department || "No department "}
//             </p>     </div>
//         <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 mb-8'>
//    {cards.map((card, index) => (
//     <div
//       key={index}
//       className='card card-hover p-5 sm:p-6 relative overflow-hidden group flex items-center justify-between'
//     >
//       {/* Left border ONLY */}
//       <div className='absolute left-0 top-0 bottom-0 w-1 rounded-r-full bg-slate-500/70 group-hover:bg-indigo-500/70'></div>

//       {/* Text */}
//       <div className='ml-3'>
//         <p className='text-sm font-medium text-slate-700'>
//           {card.title}
//         </p>
//         <p className='text-2xl font-bold text-slate-900 mt-1'>
//           {card.value}
//         </p>
//       </div>

//       {/* Icon */}
//       <card.icon className='size-10 p-2.5 rounded-lg bg-indigo-50 text-slate-500 group-hover:text-indigo-600 transition-colors' />
//     </div>
//   ))}
// </div>
// <div className='flex flex-col sm:flex-row gap-3'>
//     <Link to="/attendance" className='btn-primary text-center inline-flex items-center justify-center gap-2'>
//           Mark Attendance <ArrowRightIcon className='w-4 h-4'/>
//     </Link>

//     <Link to="/leaves" className='btn-primary text-center '>
//           Apply for Leave 
//     </Link>
// </div>
// </div>
//  ) }

// export default EmployeeDashboard


import {
  ArrowRightIcon,
  CalendarIcon,
  DollarSignIcon,
  FileTextIcon
} from "lucide-react"
import { Link } from "react-router-dom"

const EmployeeDashboard = ({ data }) => {
  const emp = data?.employee

  const cards = [
    {
      icon: CalendarIcon,
      value: data.currentMonthAttendance,
      title: "Days Present",
      subtitle: "This month"
    },
    {
      icon: FileTextIcon,
      value: data.pendingLeaves,
      title: "Pending Leaves",
      subtitle: "Awaiting approval"
    },
    {
      icon: DollarSignIcon,
      value: data.latestPayslip
        ? `$${data.latestPayslip.netSalary?.toLocaleString()}`
        : "N/A",
      title: "Latest Payslip",
      subtitle: "Most recent payout"
    }
  ]

  return (
    <div className="animate-fade-in">
      
      {/* Header */}
      <div className="page-header ">
        <h1 className="page-title">
          Welcome, {emp?.firstName}!
        </h1>
        <p className="page-subtitle">
          {emp?.position} - {emp?.department || "No department"}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative bg-white border border-gray-200 rounded-lg px-4 py-5 flex items-center justify-between"
          >
            {/* Left border */}
            <div className="absolute left-0 top-0 bottom-0 w-0.75 bg-gray-300 rounded-l-lg" />

            {/* Text */}
            <div className="ml-3">
              <p className="text-sm text-slate-700 font-medium">
                {card.title}
              </p>
              <p className="text-2xl font-bold text-slate-900 mt-1">
                {card.value}
              </p>
            </div>

            {/* Icon */}
            <card.icon className="w-6 h-6 text-gray-400" />
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        
        {/* Primary */}
        <Link
          to="/attendance"
          className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm px-4 py-2.5 rounded-md transition">
          Mark Attendance
          <ArrowRightIcon className="w-4 h-4" />
        </Link>

        {/* Secondary (outlined like screenshot) */}
        <Link
          to="/leave"
          className="inline-flex items-center justify-center border border-gray-300 text-gray-700 text-sm px-4 py-2.5 rounded-md hover:bg-gray-50 transition"
        >
          Apply for Leave
        </Link>
      </div>
    </div>
   
  )
}

export default EmployeeDashboard