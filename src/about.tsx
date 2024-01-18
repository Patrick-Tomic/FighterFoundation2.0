import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react'
import ryan from './assets/ryan.jpg'
import bike from './assets/bike.jpeg'
import GBM from './assets/GBMAwareness.png'
export default function About(){
     let count = 0
    const quotes = ['Fighter Foundation is a non-profit commited to improving the quality of life for All and especially those whose lives have been impacted by a brain tumor.', 'A fighter approaches life with unwavering positivity, relentless hope and an insatiable appetite to make an impact. They fight not just for a cure for their cancer, but also for love, laughter and life!',GBM, `Define what you love, and fight for it every single day. -Michelle B. de Jong`, bike]
    const quoteList = quotes.map((quote) =>{
        count++
        let content 
        if(quote === GBM || quote === bike){
            content = <img src ={quote}></img>
        } else{
            content = <p className='text-center text-xl' >{quote}</p>
        }
        return  ( 
            
            <div  id={`quote-${count}`} className='quotes border-solid flex items-center justify-center border-black border-2 max-w-96 h-72 mt-4'> {content} </div>
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
             <div className='grid grid-cols-5 p-20 gap-10'>
            
                {quoteList}
                
             </div>
            <div className='grid grid-cols-3 gap-20'>
                 {boardList}
             </div>
        </main>
    )
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function createPerson(name: ReactElement<any, string | JSXElementConstructor<any>> | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined, title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined, img: string | null | undefined, key: string){
    let pic
    if(img != null){
        pic = <img className='max-w-52 rounded-sm mb-10 shadow-lg shadow-black' src = {img}></img>
    }
    return (
        <div key = {key} className='p-20'>   
            {pic}
            <h1 className='text-2xl font-bold border-b-8 text-center border-double border-black '>{name}</h1>
            <h3 className='text-center text-2xl max-w-52 Playfair'>{title}</h3>
        </div>
    )
}