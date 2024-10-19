import { useState } from 'react'
import Navbar from './components/Navbar'
import Introduction from './components/Introduction'
import About from './components/About'
//import Project from './components/Project'
import Portfolio from './components/Portfolio'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Footer from './components/Footer';
import Skills from './components/Skills'
import './App.css';


function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    <div className="bg-gradient-to-br from-[#1e3a8a] via-[#3b82f6] to-[#60a5fa] min-h-screen"> 
    <Navbar/>
    <Introduction />
    {/* <About/> */}
    <Portfolio/>
    <Skills/>
    <Footer/>
    </div>
    </>
  )
}

export default App
