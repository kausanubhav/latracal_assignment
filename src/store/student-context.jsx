import { createContext } from "react"

const StudentContext = createContext({
  students: [],
  totalStudents: 0,
  error: false,
  isCheckingin: false,
  isCheckingout: false,
  addStudent: () => {},
  removeStudent: () => {},
})
export default StudentContext
