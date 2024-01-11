import logo from './assets/logo.jpg'
import './style.scss'
export default function Header(){
    const tabs:string[] = ["Home","Programs", "About", 'Events', "Blog","Contact", "Store"]
    const tabList = tabs.map((tab) => <li className='border-solid border-2 border-black list-none w-24 h-10 text-center p-1 bg-gray-500 text-lg text-white' key = {tab}> {tab}</li>)
    return (
        <header  >
            <img className='ml-8' src = {logo} alt = 'FighterFoundation'></img>
            <h1 >"I Think there is Always Hope"<br></br>-Michelle B. Dejong</h1>
            <h3 className='ml-10 border-solid border-2 border-black rounded-3xl text-xl text-center p-1 mr-5 bg-gray-500 text-white'>Fight to cure Glioblastoma!</h3>
            <nav className='flex'>{tabList}</nav>
        </header>
    )
}