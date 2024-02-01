import Home from './Home'
import About from './about'
import Programs from './programs'
import Events from './events'
import Blog from './blog'
import {Route, Routes} from 'react-router-dom'
export default function Main(){
    return (
      
        
        <Routes>
        <Route path = '/' element= {<Home />}> </Route>
        <Route   path='/about' element =  { <About />} ></Route>
        <Route path='/programs' element = { <Programs />}></Route>
        <Route path = '/events' element = {<Events/>}></Route>
        <Route path = '/blog' element= {<Blog/>}></Route>
        </Routes>
         
    ) 
   
}