import './App.css'
import NavBar from './Navbar'
import About from './pages/about'
import Home from './pages/home'
import Projects from './pages/projects'
import { Route, Routes } from 'react-router-dom'

function App() {
  


  return (
   <>
   <NavBar></NavBar>
   <div className='container'>
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/projects' element={<Projects />} />
   </Routes>
   </div>
   </>
   
  )
}

export default App
