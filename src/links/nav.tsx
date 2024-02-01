import {Link, Outlet} from 'react-router-dom'

export default function NavBar(){
    return(
        <>
            <nav key='lg' className='flex ml-44 lg:ml-16 2xl:ml-48 md:ml-10'>
                <li key = 'home' className='border-solid border-2 border-black list-none 2xl:w-24 h-10 text-center p-1 bg-white  lg:text-base lg:w-16'> <Link to= '/'>Home</Link></li>
                     
                    <li className=' border-solid border-2 border-black list-none 2xl:w-24 lg:w-16 h-10 text-center bg-white p-1 2xl:text-lg lg:text-base' key = 'about'> <Link to='/about'>About</Link></li>
                    
                    
                    <div id='programs'>
                    <li className=' border-solid border-2 border-black list-none 2xl:w-24 h-10 text-center p-1 2xl:text-lg bg-white' key ='programs'><Link to='/programs'>Programs</Link> </li>
                      
                    </div>
                    <li key = 'events' className='border-solid border-2 border-black list-none 2xl:w-24 h-10 text-center p-1 2xl:text-lg bg-white'> <Link to= '/'>Events</Link></li>
                    <li key = 'blog' className='border-solid border-2 border-black list-none 2xl:w-24 h-10 text-center p-1 2xl:text-lg bg-white'> <Link to= '/'>Blog</Link></li>
                    <li key = 'contact' className='border-solid border-2 border-black list-none 2xl:w-24 h-10 text-center p-1 2xl:text-lg bg-white'> <Link to= '/'>Contact</Link></li>
                    <li key = 'store' className='border-solid border-2 border-black list-none 2xl:w-24 h-10 text-center p-1 2xl:text-lg bg-white'> <Link to= '/'>Store</Link></li>
            </nav>
            <Outlet />
        </>
    )
}