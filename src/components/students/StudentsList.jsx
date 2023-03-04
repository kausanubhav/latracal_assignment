export default function StudentsList({ students }) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
      <table className="w-full text-md text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-500">
          <tr>
            <th scope="col" className="px-6 py-3">
              Roll
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Checkin Time
            </th>
            <th scope="col" className="px-6 py-3">
              Checkout Time
            </th>
          </tr>
        </thead>
        <tbody>
          {students.length > 0 &&
            students.map((student) => (
              <tr className="bg-white border-b " key={student.roll}>
                <th className="px-6 py-4" scope="row">
                  {student.roll}
                </th>
                <td className="px-6 py-4">{student.name}</td>
                <td className="px-6 py-4">
                  {student.checkinTime ? student.checkinTime : `Not logged in`}
                </td>
                <td className="px-6 py-4">{student.checkoutTime ? student.checkoutTime : `--`}</td>
              </tr>
            ))}
        </tbody>
      </table>
      {students.length === 0 && <h1 className="text-gray-600 mt-8 text-center text-2xl font-bold">No Students have logged in.</h1>}
    </div>
  )
}
