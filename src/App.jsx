import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/NavBar/NavBar'
import DashBoard from './components/DashBoard/DashBoard'
import PieGraphComponent from './components/DashBoard/PieGraphComponent'
import BlacklistComponent from './components/BlackList/BlackList'
import Notification from './components/Notification/Notification'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Login /> */}
      {/* <Signup /> */}
      <Navbar />
      {/* <DashBoard /> */}
      {/* <BlacklistComponent /> */}
      {/* <Notification /> */}

    </>
  )
}

export default App
