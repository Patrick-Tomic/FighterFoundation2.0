import Home from './Home'
import About from './about'
import Programs from './programs'
import {Route, Routes} from 'react-router-dom'
export default function Main(){
    return (
      
        
        <Routes>
        <Route path = '/' element= {<Home />}> </Route>
        <Route   path='/about' element =  { <About />} ></Route>
        <Route path='/programs' element = { <Programs />}></Route>
        </Routes>
         
    ) 
   
}