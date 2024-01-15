import mural from './assets/mural.jpg'
import race from './assets/race.jpg'
import hope from './assets/hope.jpeg'
import quote from './assets/quote.jpeg'
import {useEffect, useState} from 'react'
export default function Home(){
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
                const ans = width+975
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
     let IDcount = 1
  const objectives = ['Funding and Advocating for Brain Tumor Research', 'Promoting Brain Tumor Awareness', 'Brain Tumor Patient and Caregiver Support', 'Community Volunteer Events']
  const objList = objectives.map((obj) =>{
    const key = `${IDcount}obj`
    IDcount++
    return <li className='p-3 text-white text-xl ' key = {key}> {obj}</li>
  })
    
    return (
      <>
        <a className="border-solid border-2 p-2  border-black" href="https://www.paypal.com/us/fundraiser/charity/2413284"><h1>Donate and Support</h1></a>
        

      <div className='border-solid border-black border-3' id='wrap'>
        <div style = {style} id='slider'>
        {imgElements}
        {firstClone}
        </div>
        </div>
        <div id='content' className="
        grid grid-cols-2
        auto-rows-auto
        gap-x-48
        gap-y-8
         mt-10
        ">
          <div className="flex flex-col w-2/5 p-10 row-span-2 text-white" id='Bio'>
             <h1>Who is Michelle?</h1>
             <p className='text-l'> On March 14th, 2014 Michelle Boyd DeJong was diagnosed with an inoperable brain tumor. The tumor was located on her brain stem and its position was blocking the normal circulation of cerebral brain fluid, which resulted in pooling and increased pressure<br></br><br></br> An endoscopic ventriculostomy and biopsy was performed on march 17th, followed by the insertion of a left ventriculoperitoneal shunt on March 27th; having a subsequent revision on June 23rd. <br></br><br></br> Released from Moffitt Cancer Center the day after her shunt surgery, she made a quick recovery and promptly sneaked out to have her forearm tattooed with our "fighter" logo. The prescribed 42 days of chemotherapy and 33 radiation treatments started on April 16th.<br></br><br></br>During the week between brain surgeries Michelle realized that there was only one way to face this challenge and it was the same way she approached life: with a positive and selfless attitude focused on using her experiences to help others. The "fighter" mentality that she embodied is so much more than a battle against her brain tumor; more importantly, it is a daily initiative to inspire others through action and attitude. This begins with a personal conscious decision and ends with changing lives.</p>
                </div>
          <div id='whoIs'className='p-10   '><h1>Who is a Fighter?</h1><p className='text-xl text-white p-2'> A fighter does not inspire because they have cancer, but a fighter inspires because of the character with which they fight it. A fighter faces challenges with unwavering positivity and relentless hope. Hope that they may take every opportunity to make a difference in the world. They fight for love, for family, for life.</p>
          <h1>Fight On!</h1>
               </div>
          <div>
            <h1 className='text-center'>Fighter Foundation Objectives</h1>
            <ul className="list-disc p-3 xl:p-10 lg:p-12">
              {objList}
            </ul>
          
                  </div>
                  <div className='grid-cols-2' id='awareness'>
              <h1>What is Glioblastoma?</h1>
              <p className='text-xl text-white'>Glioblastoma(GBM) are malignant grade 4 tumors located in the brain. GBM spreads in the brain diffusely, covering large portions. GBM is able to spread to the opposite side of the brain through the corpus callosum or the ventricular system. Glioblastoma is most commonly found within the frontal lobe, statistically over 25% of the time. <br></br><br></br> GBM arise de novo, thye begin as a grade 4 tumor, with no evidence of a lower-grade precursor. The tendency of de novo tumors can be severe, and are most common in patients 60 years of age or older, younger patients may be affected </p>
            </div>
           
          </div>   
             
        </>
    );
}