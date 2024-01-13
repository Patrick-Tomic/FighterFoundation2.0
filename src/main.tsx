import mural from './assets/mural.jpg'
import race from './assets/race.jpg'
import hope from './assets/hope.jpeg'
import quote from './assets/quote.jpeg'
import {useEffect, useState} from 'react'
 
 
export default function Main(){
     
    const imgs = [mural, race, hope, quote]
    const imgElements = imgs.map((img) => {
    return  <img   key = {img} src = {img}></img> 
})
  const firstClone = imgElements.filter((img) => img.key === mural)
   const initial = 0
    const [width, setWidth] = useState(initial)
    const [count, setCount] = useState(initial)
        console.log(count)
        console.log(width)
          
        
      let style = {
            transform: `translateX(-${width}px)`,
            transition: 'transform 1s ease-in-out'
        }
       
      if(count === 5){
        
            style = {
                transform: `translateX(0px)`,
                transition: 'none',
                
            }       
        }
        
    useEffect(() => {
        
        setTimeout(() =>{   
              if(count <= 4){
                const ans = width+780
              setWidth(ans)
              const num = count+1
              setCount(num)
          
            }
            else if(count === 5){
                const zero =0
                setWidth(zero)
                setCount(zero)
           
            }
        }, 4000)
       
    }) 
     
  
    
    return (
       <main className='border-solid border-red-500 border-2 flex flex-col'>
        <a href="https://www.paypal.com/us/fundraiser/charity/2413284"><h1>Donate and Support</h1></a>
        

      <div id='wrap'>
        <div style = {style} id='slider'>
        {imgElements}
        {firstClone}
        </div>
        </div>
            
             
        
       </main>
    );
}