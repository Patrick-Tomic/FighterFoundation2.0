import Home from './Home'
import About from './about'
import {Route, Routes} from 'react-router-dom'
 
export default function Main(){
    return (
     
        <Routes>
        <Route path = '/' element= {<Home />}> </Route>
        <Route path = '/about' element = {<About />}></Route>
        </Routes>
      
    ) 
   
}