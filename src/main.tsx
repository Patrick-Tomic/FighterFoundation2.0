import mural from './assets/mural.jpg'
import race from './assets/race.jpg'
import hope from './assets/hope.jpeg'
import quote from './assets/quote.jpeg'
import {useState, useEffect} from 'react'
import { render } from 'react-dom'
 
export default function Main(){
     
    const imgs = [mural, race, hope, quote]
    const imgElements = imgs.map((img) => {
    return  <img   key = {img} src = {img}></img> 
})
   const [width, setWidth] = useState(0)
      
    useEffect(() =>{
        const myInterval = setInterval(() =>{
            if(width === -3120){
                setWidth(0)
            }
            else{
            setWidth(width-780)
            }
        }, 3000)
    })
   const style = {
    transform:`translateX(${width}px)`
   }
    return (
       <main className='border-solid border-red-500 border-2 flex flex-col align-middle'>
        <h1>Donate and Support</h1>
        

      <div id='wrap'>
        <div id='slider' style= {style}>
        {imgElements}
        </div>
        </div>
            
             
        
       </main>
    );
}