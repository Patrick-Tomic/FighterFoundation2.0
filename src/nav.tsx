import {Link, Outlet} from 'react-router-dom'

export default function lgBar(){
    return(
        <>
            <nav key='lg' className='flex ml-44 lg:ml-16'>
                <li key = 'home' className='border-solid border-2 border-black list-none w-24 h-10 text-center p-1 bg-white  lg:text-base lg:w-16'> <Link to= '/'>Home</Link></li>
                     
                    <li className=' border-solid border-2 border-black list-none w-24 lg:w-16 h-10 text-center bg-white p-1 text-lg lg:text-base' key = 'about'> <Link to='/about'>About</Link></li>
                    
                    
                    <div id='programs'>
                    <li className='hover:min-h-12 border-solid border-2 border-black list-none w-24 h-10 text-center p-1 text-lg bg-white' key ='programs'><Link to='/programs'>Programs</Link> </li>
                     <li id ='hidden' className='border-solid border-2 text-center border-black  list-none w-24 l h-10 te4 lt-center p-1 bg-white  text-xs
                    min-h-12 lg:w-16 lg:text-base
                     ' key = 'patientResources'><Link to='/'>Patient Resources</Link></li>
                     <li id ='hidden' className='border-solid border-2 border-black  list-none w-24 l  te4 lt-center p-1 text-center bg-white text-xs 
                     min-h-12 lg:w-16 lg:text-base
                     ' key = 'caregiverResources'> <Link to='/'>CareGiver Resources</Link></li>
                     <li id ='hidden' className='border-solid border-2 border-black text-center list-none w-24 l h-10 te4 lt-center p-1  bg-white text-xs
                    min-h-12 lg:w-16 lg:text-base
                     ' key = 'FCT'> <Link to='/'>Funding Clinical Trials</Link></li>
                    </div>
                    <li key = 'events' className='border-solid border-2 border-black list-none w-24 h-10 text-center p-1 bg-white text-lg lg:w-16 lg:text-base'> <Link to= '/'>Events</Link></li>
                    <li key = 'blog' className='border-solid border-2 border-black list-none w-24 h-10 text-center p-1 bg-white text-lg lg:w-16 lg:text-base'> <Link to= '/'>Blog</Link></li>
                    <li key = 'contact' className='border-solid border-2 border-black list-none w-24 h-10 text-center p-1 bg-white text-lg lg:w-20 lg:text-base'> <Link to= '/'>Contact</Link></li>
                    <li key = 'store' className='border-solid border-2 border-black list-none w-24 h-10 text-center p-1 bg-white text-lg lg:text-base lg:w-16'> <Link to= '/'>Store</Link></li>
            </nav>
            <Outlet />
        </>
    )
}