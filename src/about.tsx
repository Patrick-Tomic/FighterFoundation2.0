import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react'
import ryan from './assets/ryan.jpg'
export default function About(){
    const quotes = ['Fighter Foundation is a non-profit commited to improving the quality of life for All and especially those whose lives have been impacted by a brain tumor.', 'A fighter approaches life with unwavering positivity, relentless hope and an insatiable appetite to make an impact. They fight not just for a cure for their cancer, but also for love, laughter and life!', `Define what you love, and fight for it every single day. -Michelle B. de Jong`]
    const quoteList = quotes.map((quote) =>{
        return (
            <div>
                <p>{quote}</p>
            </div>
        )
    })
    const board = [
        {
            person: 'Ryan de Jong',
            title: 'Chairman',
            pic: ryan
        },
        {
            person: 'Patrick Moraites',
            title: 'Exec VP',
            pic: null
        },
        {
            person: 'Erin Gallagher',
            title: 'Secretary',
            pic: null
        },
        {
            person: 'Chris Boyd',
            title: 'Treasurer',
            pic:null
        },
        {
            person:'Maria Williams',
            title: 'Race Committee Chair',
            pic:null
        },
        {
            person: 'Trish Meade',
            title: 'Community Events Chair',
            pic:null
        },
        {
            person: 'Christopher Gurrie',
            title: 'Scholarship Committee Chair',
            pic: null
        }
    ]
    const boardList = board.map((object) => createPerson(object.person,object.title,object.pic))
    return (
        <div>
        {quoteList}
        {boardList}
        </div>
    )
}
function createPerson(name: ReactElement<any, string | JSXElementConstructor<any>> | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined, title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined, img: string | null | undefined){
    let pic
    if(img != null){
        pic = <img className='max-w-52' src = {img}></img>
    }
    return (
        <div>
            {pic}
            <h1>{name}</h1>
            <h3>{title}</h3>
        </div>
    )
}