import {Link, Outlet} from 'react-router-dom'

export default function NavBar(){
    return(
        <>
            <nav key='nav' className='flex ml-44 lg:ml-24'>
                <li key = 'home' className='border-solid border-2 border-black list-none w-24 h-10 text-center p-1 bg-white text-lg '> <Link to= '/'>Home</Link></li>
                    <div id='about'>
                    <li className='border-solid border-2 border-black list-none w-24 h-10 text-center bg-white p-1 text-lg' key = 'about'> <Link to='/about'>About</Link></li>
                    <li id ='hidden'className='border-solid border-2 border-black  list-none w-24 l h-24 te4 text-center lt-center p-1 bg-white text-xs 
                       min-h-12 
                    ' key = 'board'> <Link to='/board'>Meeting the Board</Link></li>
                    <li id ='hidden'className='
                   min-h-12
                    border-solid border-2 border-black  list-none w-24 l h-24 text-center te4 lt-center p-1 bg-white text-xs  ' key = 'rememberMichelle'><Link to='/rememberMichelle'>Remembering Michelle </Link></li>
                    </div>
                    <div id='programs'>
                    <li className='border-solid border-2 border-black list-none w-24 h-10 text-center p-1 text-lg bg-white' key ='programs'><Link to='/'>Programs</Link> </li>
                     <li id ='hidden' className='border-solid border-2 text-center border-black  list-none w-24 l h-10 te4 lt-center p-1 bg-white  text-xs
                    min-h-12
                     ' key = 'patientResources'><Link to='/'>Patient Resources</Link></li>
                     <li id ='hidden' className='border-solid border-2 border-black  list-none w-24 l  te4 lt-center p-1 text-center bg-white text-xs 
                     min-h-12
                     ' key = 'caregiverResources'> <Link to='/'>CareGiver Resources</Link></li>
                     <li id ='hidden' className='border-solid border-2 border-black text-center list-none w-24 l h-10 te4 lt-center p-1  bg-white text-xs
                    min-h-12
                     ' key = 'FCT'> <Link to='/'>Funding Clinical Trials</Link></li>
                    </div>
                    <li key = 'events' className='border-solid border-2 border-black list-none w-24 h-10 text-center p-1 bg-white text-lg '> <Link to= '/'>Events</Link></li>
                    <li key = 'blog' className='border-solid border-2 border-black list-none w-24 h-10 text-center p-1 bg-white text-lg '> <Link to= '/'>Blog</Link></li>
                    <li key = 'contact' className='border-solid border-2 border-black list-none w-24 h-10 text-center p-1 bg-white text-lg '> <Link to= '/'>Contact</Link></li>
                    <li key = 'store' className='border-solid border-2 border-black list-none w-24 h-10 text-center p-1 bg-white text-lg '> <Link to= '/'>Store</Link></li>
            </nav>
            <Outlet />
        </>
    )
}