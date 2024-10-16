import { useState } from 'react'
import Navbar from './components/Navbar'
import Introduction from './components/Introduction'
import About from './components/About'
//import Project from './components/Project'
import Portfolio from './components/Portfolio'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Introduction />
    <About/>
    <Portfolio/>
    </>
  )
}

export default App
