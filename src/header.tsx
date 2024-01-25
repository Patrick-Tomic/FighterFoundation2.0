import logo from './assets/logo.jpg'
import { useState } from 'react'
/* import {Link} from 'react-router-dom' */
import Links from './links/linkChoice'
import './style.scss'
export default function Header(){
    const [sidebar, setSideBar] = useState(false)
   
    if(window.innerWidth <= 900 && sidebar === false){
        const on = true
        setSideBar(on)
    }
    else if(window.innerWidth >900 && sidebar === true){
        const off = false
        setSideBar(off)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    
    }
  /*   const tabs:string[] = ["Home","Programs", "About", 'Events', "Blog","Contact", "Store"] */
   /*  const tabList = tabs.map((tab) => {
        if(tab === ('About')){
            return (
                <div id='about'>
                    <li className='border-solid border-2 border-black list-none w-24 h-10 text-center bg-white p-1 text-lg' key = {tab}> {tab}</li>
                    <li id ='hidden'className='border-solid border-2 border-black  list-none w-24 l h-24 te4 text-center lt-center p-1 bg-white text-xs 
                       min-h-12 
                    ' key = 'board'> Meeting the Board</li>
                    <li id ='hidden'className='
                   min-h-12
                    border-solid border-2 border-black  list-none w-24 l h-24 text-center te4 lt-center p-1 bg-white text-xs  ' key = 'rememberMichelle'>Remembering Michelle</li>
                </div>
            )
        } else if(tab === 'Programs'){
            return (
                <div id='programs'>
                     <li className='border-solid border-2 border-black list-none w-24 h-10 text-center p-1 text-lg bg-white' key = {tab}> {tab}</li>
                     <li id ='hidden' className='border-solid border-2 text-center border-black  list-none w-24 l h-10 te4 lt-center p-1 bg-white  text-xs
                    min-h-12
                     ' key = 'patientResources'>Patient Resources</li>
                     <li id ='hidden' className='border-solid border-2 border-black  list-none w-24 l  te4 lt-center p-1 text-center bg-white text-xs 
                     min-h-12
                     ' key = 'caregiverResources'> CareGiver Resources</li>
                     <li id ='hidden' className='border-solid border-2 border-black text-center list-none w-24 l h-10 te4 lt-center p-1  bg-white text-xs
                    min-h-12
                     ' key = 'FCT'> Funding Clinical Trials</li>
                </div>
            )
        }
       return <li className='border-solid border-2 border-black list-none w-24 h-10 text-center p-1 bg-white text-lg ' key = {tab}> <Link to='/'> {tab} </Link></li>
    }) */
    return (
        <header key='header' className="p-10 w-[100%] bg-gray-500 "   >
           <div > 
            <img id='logo' key='logo' className='
            xl:ml-20 md:ml-0 sm:ml-0 lg:ml-16 md:
            ml-24 rounded-md border-solid border-black border-2' src = {logo} alt = 'FighterFoundation'></img>
            <h3 id='imgHeader' className='
            max-h-12 ml-16 border-solid border-2 border-black rounded-3xl 
            text-2xl text-center p-1 mr-5 bg-white text-gray-500
            xl:ml-20 xl:max-h-10  xl:min-w-72  lg:min-w-72 lg:ml-14 lg:w-80 md:max-h-10 md:min-w-72 sm:min-w-72 sm:ml-2
            '>Fight to cure Glioblastoma!</h3>
            </div>
            <div>
            <h1 id='quote'  className='text-3xl xl:mt-3 xl:ml-80 lg:ml-42 lg:text-3xl md:ml-10 md:mt-10 md:text-2xl sm:ml-0 sm:text-lg sm:mt-11'  >"I Think there is Always Hope"<br></br>-Michelle B. Dejong</h1>
         <Links />
         </div>
        </header>
    )
}