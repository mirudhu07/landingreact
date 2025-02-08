import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"

import { Route, Routes} from "react-router-dom"
import Navlinks from "./components/Navlinks/Navlinks"
function App() {
  return (

    <div className="App" style={{height:"100vh",width:"100vw"}}>
     <Navlinks/>
    
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About page" element={<About page/>}/>
      <Route path="/Contact page" element={<Contact page/>}/>
     </Routes>
    
    </div>

  )
}

export default App
