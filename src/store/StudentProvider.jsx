import { useReducer } from "react"
import StudentContext from "./student-context"

const defaultStudentState = {
  students: [],
  totalStudents: 0,
  isCheckingin: false,
  isCheckingout: false,
  error: false,
}

//reducers
const studentReducer = (state, action) => {
  //ADD STUDENT
  if (action.type === "ADD_STUDENT") {
    const currentStudentIndex = state.students.findIndex(
      (student) => student.id === action.student.id
    )
    if (currentStudentIndex >= 0) {
      return {
        ...state,
        error: true,
      }
    } else {
      return {
        ...state,
        students: [...state.students, action.student],
        totalStudents: state.totalStudents + 1,
      }
    }
  }

  //REMOVE STUDENT

  if (action.type === "REMOVE_STUDENT") {
    const currentStudentIndex = state.students.findIndex(
      (student) => student.id === action.student.id
    )
    let updatedStudents

    if (currentStudentIndex < 0) {
      return {
        ...state,
        error: true,
      }
    } else {
      updatedStudents = state.items.filter((student) => student.id !== action.student.id)
      return {
        ...state,
        students: updatedStudents,
        totalStudents: state.totalStudents - 1,
      }
    }
  }
  //CHECKIN STUDENT

  if (action.type === "CHECKIN") {
    return {
      ...state,
      isCheckingin: true,
    }
  }
  //CHECKOUT STUDENT

  if (action.type === "CHECKOUT") {
    return {
      ...state,
      isCheckingout: true,

    }
  }
  return defaultStudentState
}

const StudentProvider = (props) => {
  const [studentState, dispatchStudentAction] = useReducer(studentReducer, defaultStudentState)

  const addStudentHandler = (student) => {
    dispatchStudentAction({ type: "ADD_STUDENT", student: student })
  }
  const removeStudentHandler = (id) => {
    dispatchStudentAction({ type: "REMOVE_STUDENT", id: id })
  }
  const checkinHandler = () => {
    dispatchStudentAction({ type: "CHECKIN" })
  }
  const checkoutHandler = () => {
    dispatchStudentAction({ type: "CHECKOUT" })
  }

  const studentContext = {
    students: studentState.students,
    totalStudents: studentState.totalStudents,
    error: studentState.error,
    isCheckingin: studentState.isCheckingin,
    isCheckingout: studentState.isCheckingout,
    addStudent: addStudentHandler,
    removeStudent: removeStudentHandler,
    checkinStudent: checkinHandler,
    checkoutStudent: checkoutHandler,
  }

  return <StudentContext.Provider value={studentContext}>{props.children}</StudentContext.Provider>
}

export default StudentProvider
