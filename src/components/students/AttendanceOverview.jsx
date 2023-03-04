export default function AttendanceOverview({ totalStudents }) {
    const studentsAbsent=100-totalStudents
  return (
    <div className="flex flex-col justify-between items-center text-lg p-2 my-4 mx-0 bg-purple-200 md:flex-row md:p-0">
      <div className="flex flex-col w-1/2 h-1/4 mt-2 rounded-lg  border-gray-100 bg-gray-500 items-center justify-center text-gray-400 md:rounded-none">
        <div className="text-md font-bold">Total Students: 100</div>
      </div>
      <div className="flex flex-col w-full h-1/4 mt-2 rounded-lg border-gray-100 bg-gray-500 items-center justify-center text-gray-400 md:rounded-none">
        <div className="text-md font-bold">Students Present: {totalStudents}</div>
      </div>
      <div className="flex flex-col w-1/2 h-1/4 mt-2 rounded-lg border-gray-100 bg-gray-500 items-center justify-center text-gray-400 md:rounded-none">
        <div className="text-md font-bold">Students Absent: {studentsAbsent}</div>
      </div>
    </div>
  )
}
