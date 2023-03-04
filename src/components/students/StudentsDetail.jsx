import AttendanceOverview from "./AttendanceOverview"
import StudentsList from "./StudentsList"

export default function StudentsDetail(props) {
  return (
    <div>
      {props.totalStudents > 0 && <AttendanceOverview totalStudents={props.totalStudents} />}{" "}
      <StudentsList students={props.students} />
    </div>
  )
}
