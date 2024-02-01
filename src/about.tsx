import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react'
import ryan from './assets/ryan.jpg'
import bike from './assets/bike.jpeg'
import michelle from './assets/michelle.png'
import GBM from './assets/GBMAwareness.png'
 
export default function About(){
     let count = 0
    const quotes = ['Fighter Foundation is a non-profit commited to improving the quality of life for All and especially those whose lives have been impacted by a brain tumor.', 'A fighter approaches life with unwavering positivity, relentless hope and an insatiable appetite to make an impact. They fight not just for a cure for their cancer, but also for love, laughter and life!',GBM, `Define what you love, and fight for it every single day. Michelle B. de Jong`, bike]
    const quoteList = quotes.map((quote) =>{
        count++
        let content 
        if(quote === GBM || quote === bike){
            content = <img src ={quote}></img>
        } else{
            content = <p className='text-center lg:text-xl md:text-base md:p-2 sm:p-5 sm:text-xs' >{quote}</p>
        }
        return  ( 
           
            <div  id={`quote-${count}`} className='quotes border-solid flex items-center justify-center border-black border-2 lg:max-w-96 lg:h-72 mt-4 
            md:max-w-72 md:h-56 sm:h-60 sm:max-w-60'> {content} </div>
            
        )
    })
    const board = [
        { 
            key: 'TSY2yljvI',
            person: 'Ryan de Jong',
            title: 'Chairman',
            pic: ryan
        },
        {
            key:'mQa8IvN-f',
            person: 'Patrick Moraites',
            title: 'Exec VP',
            pic: null
        },
        {
            key: 'ASoOaTYiG',
            person: 'Erin Gallagher',
            title: 'Secretary',
            pic: null
        },
        {
            key: 'Z7jt52MRZ',
            person: 'Chris Boyd',
            title: 'Treasurer',
            pic:null
        },
        {
            key: 'm3rp-T1Fu',
            person:'Maria Williams',
            title: 'Race Committee Chair',
            pic:null
        },
        { 
            key: 'mi20LzZ1-',
            person: 'Trish Meade',
            title: 'Community Events Chair',
            pic:null
        },
        {
            key: 'QX-3zQkE9',
            person: 'Christopher Gurrie',
            title: 'Scholarship Committee Chair',
            pic: null
        }
    ]
    const boardList = board.map((object) => createPerson(object.person,object.title,object.pic, object.key))
    return ( 
        <main className='flex flex-col m-0'>
            <h1 className='mt-5 ml-9 text-center text-3xl font-semibold Playfair   border-b-8   border-double border-black'>About The Foundation</h1>
             <div id='quotes' className='grid grid-cols-5 p-20 gap-10 border-b-2 w-[100%] border-black'>
                
                {quoteList}
                
             </div>
             <div className='grid grid-cols-3 gap-20' id='board'>
                 {boardList}
             </div>
             <div id='michelle' className='lg:flex  border-solid border-black border-t-2 justify-around md:block'>
             <img className='xl:w-[50vh] xl:h-[100vh] 2xl:w-[50vh] 2xl:h-[100vh] lg:w-[38vw] lg:h-[77vh] lg:min-h-[50vh]
             md:w-[35vw] md:h-[70vh] md:float-right md:m-5
             sm:float-right sm:m-10
              shadow-lg mt-24 shadow-black' src={michelle}></img>
           
          
           <div className='p-10 xl:w-2/5'>
                <h1 className='text-3xl text-center font-bold '>Who is Michelle</h1>
                <p className='text-center text-md font-semibold xl:text-xl xl:p-8 2xl:xl 2xl:p-10 lg:text-lg md:text-lg md:p-2
                md:text-justify
                sm:text-justify'>"On March 14" (title of Michelle's book), Michelle Boyd DeJong was diagnosed with an inoperable brain tumor. Because the tumor is located on her brain stem, its position was blocking the normal circulation of cerebral brain fluid, which resulted in pooling an increased pressure. An endoscopic ventriculostomy and biopsy was performed on March 17th, followed by the insertion of a left ventriculopertoneal shunt on March 27th and its subsequent revision on June 23rd.<br></br> Released from Moffit Cancer Center the day after her shunt surgery, she made a quick recovery and promptly sneaked out to have her forearm tattooed with the 'fighter' logo. The prescribed 42 days of temodar and 33 radiation treatments started on April 16th.<br></br>During the week between brain surgeries, Michelle realized that there was only one way to face this challenge, and it was the same way she approached life: with a positive and selfless attitude focused on using her experiences to help others. The "fighter" mentality that she embodies is so much more than a battle against her brain tumor. It is a daily initiative to inspire others through action and attitude. This begins with a personal conscious decision and ends with changing lives.</p>
           </div>
         
           
        </div>
            </main>
              
    )
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function createPerson(name: ReactElement<any, string | JSXElementConstructor<any>> | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined, title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined, img: string | null | undefined, key: string){
    let pic
    if(img != null){
        pic = <img className='max-w-52 md:max-w-44 sm:max-w-36 rounded-sm mb-10 shadow-lg shadow-black' src = {img}></img>
    }
    return (
        <div key = {key} className='p-20 md:p-10 sm:p-5 '>   
            {pic}
            <h1 className='text-2xl font-bold border-b-8 text-center border-double border-black lg:min-w-[200px]
             md:min-w-[150px] md:ml-3 sm:min-w-[100px] sm:ml-0'>{name}</h1>
            <h3 className='text-center text-2xl max-w-52 Playfair lg:min-w-[200px] 
            md:min-w-[150px] md:ml-3 sm:min-w-[100px] sm:ml-0'>{title}</h3>
        </div>
    )
}
 
 