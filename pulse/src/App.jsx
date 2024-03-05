import './App.css'
import Navbar from './components/Navbar';
import Home from './screens/Home'
import Landing from './screens/landing';
import React from 'react'
import {BrowserRouter as Router ,Route,Routes} from "react-router-dom";
function App() {
  // const [count, setCount] = useState(0)

  return (
 <>
 <div>
  <Navbar/>
  <Router>
    <div>
      <Routes>
        <Route exact path='/' element={<Landing/>}/>

        <Route exact path='/home' element={<Home/>}/>

      </Routes>
    </div>
  </Router>
 </div>
 </>
      
   
  )
}

export default App
