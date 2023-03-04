import {  useState } from "react"
import CheckIn from "./components/CheckIn"
import CheckOut from "./components/CheckOut"
import Layout from "./components/layout/Layout"
import StudentsDetail from "./components/students/StudentsDetail"
import "./index.css"

function App() {

 const [students, setStudents] = useState([])
 const [isCheckingIn, setIsCheckingIn] = useState(false)
 const [isCheckingOut, setIsCheckingOut] = useState(false)
 const [totalStudents, setTotalStudents] = useState(0)


if (isCheckingIn) {
  return (
    <CheckIn
      setIsCheckingIn={setIsCheckingIn}
      students={students}
      setStudents={setStudents}
      totalStudents={totalStudents}
      setTotalStudents={setTotalStudents}
    />
  )
} else if (isCheckingOut) {
  return (
    <CheckOut
      setIsCheckingOut={setIsCheckingOut}
      students={students}
      setStudents={setStudents}
      totalStudents={totalStudents}
      setTotalStudents={setTotalStudents}
    />
  )
}

  return (
      <Layout setIsCheckingIn={setIsCheckingIn} setIsCheckingOut={setIsCheckingOut}>
        <StudentsDetail students={students} totalStudents={totalStudents}/>
      </Layout>
  )
}

export default App
