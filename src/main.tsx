import Home from './Home'
import {Route, Routes} from 'react-router-dom'
 
export default function Main(){
    return (
      <main className='flex flex-col'>
        <Routes>
        <Route path = '/' element= {<Home />}> </Route>
        </Routes>
      </main>
    ) 
   
}