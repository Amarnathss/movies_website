import { Outlet } from "react-router-dom"
import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import Navigation from "./pages/Auth/Navigation"
function App() {
  

  return (
    <>
      <ToastContainer />
      <Navigation/>
      <main className="">
        {/* <h1>app</h1> */}
        <Outlet/>
      </main>
        
    </>
  )
}

export default App
