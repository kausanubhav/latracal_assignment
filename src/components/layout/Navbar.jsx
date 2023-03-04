import { useContext } from "react"

export default function Navbar({setIsCheckingIn,setIsCheckingOut}) {
  
  return (
    <div className="flex justify-between items=center p-3 mb-2 bg-purple-900">
      <h1 className="font-bold text-white text-3xl">Attendance Today</h1>
      <div>
        <button
          className="bg-white hover:bg-gray-100 text-purple-900 font-semibold py-2 px-4 mx-3 border border-gray-400 rounded shadow"
          onClick={()=>setIsCheckingIn(true)}

        >
          Checkin
        </button>
        <button
          className="bg-white hover:bg-gray-100 text-purple-900 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          onClick={()=>setIsCheckingOut(true)}

        >
          Checkout
        </button>
      </div>
    </div>
  )
}
