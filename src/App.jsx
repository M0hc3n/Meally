import React from 'react'
import { BrowserRouter as Router , Routes , Route} from "react-router-dom"

// importing components
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import SingleFood from "./pages/SingleFood"
import NotFound from "./pages/NotFound"


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/receipes/:id' element={<SingleFood />}/>
        <Route path='/*' element={<NotFound />}/>
      </Routes>
    </Router>
  )
}

export default App