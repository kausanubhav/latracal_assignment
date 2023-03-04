import { useState, useRef, useEffect } from "react"

export default function CheckOut({
  students,
  setStudents,
  setIsCheckingOut,
  totalStudents,
  setTotalStudents,
}) {
  const [formData, setFormData] = useState({
    name: "",
    roll: "",
  })
  const [error, setError] = useState(null)

  const { name, roll } = formData
  const textInput = useRef(null)
  // useEffect(() => {
  //   if (error) {
  //     setFormData({ name: "", roll: "" })
  //     setError(null)
  //   }
  //   textInput.current.focus()
  // }, [error])
  //onChange fn
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
    setError(null)

  }

  //onSubmit fn
  const onSubmit = (e) => {
    e.preventDefault()
    if (!name || !roll) {
      setError("Please fill in all fields")
    } else {
      //check if the student is logged in already
      const [student] = students.filter((student) => student.roll === roll)
      if (!student) {
        setError("You were not logged in")
      } else {
        if (student.name === name) {
          const { checkoutTime } = student
          if (checkoutTime) {
            setError("You are already logged out")
            setIsCheckingOut(false)
          } else {
            students = students.filter((student) => student.roll !== roll)
            student.checkoutTime = new Date().toLocaleTimeString()
            students.push(student)
            setStudents(students)
            setTotalStudents(totalStudents - 1)
          }
        } else {
          setError("Invalid details. Please try again")
        }
        setIsCheckingOut(false)
      }
    }
  }
  return (
    <>
      <div className="h-screen flex items-center justify-center bg-purple-900">
        <div className="flex flex-col items-center py-6 px-7 bg-white rounded-lg">
          <span className="text-purple-900 text-3xl font-bold mb-2">Check Out</span>
          <form className=" flex flex-col gap-4 " onSubmit={onSubmit}>
            <div className="mb-2">
              <input
                type="text"
                className="p-4 text-purple-600 w-full border-b-2 border-b-purple-900 placeholder:text-purple-400 focus:outline-none focus:shadow-outline"
                id="name"
                placeholder="enter your name"
                value={name}
                ref={textInput}
                onChange={onChange}
                name="name"
              />
            </div>
            <div className="mb-3">
              <input
                type="number"
                className="p-4 text-purple-600 w-full border-b-2 border-b-purple-900 placeholder:text-purple-400 focus:outline-none focus:shadow-outline"
                id="roll"
                placeholder="enter your roll no."
                value={roll}
                onChange={onChange}
                name="roll"
              />
            </div>

            <button
              type="submit"
              className="bg-purple-900 rounded-md p-2 font-bold border-none text-white"
            >
              Submit
            </button>
          </form>
          {error && <p className="text-red-400 mt-2 text-bold text-base">{error}</p>}
          <p
            className="text-blue-800 mt-2 text-bold text-base"
            style={{ cursor: "pointer" }}
            onClick={() => setIsCheckingOut(false)}
          >
            Back to home
          </p>
        </div>
      </div>
    </>
  )
}
