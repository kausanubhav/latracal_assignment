import Navbar from "./Navbar"

export default function Layout({ children,setIsCheckingIn,setIsCheckingOut }) {
  return (
    <>
      <Navbar setIsCheckingIn={setIsCheckingIn} setIsCheckingOut={setIsCheckingOut} />
      <main>{children}</main>
    </>
  )
}
