import logo from './assets/logo.jpg'
import './style.scss'
export default function Header(){
    const tabs:string[] = ["Home","Programs", "About", 'Events', "Blog","Contact", "Store"]
    const tabList = tabs.map((tab) => {
        if(tab === ('About')){
            return (
                <div id='about'>
                    <li className='border-solid border-2 border-black list-none w-24 h-10 text-center bg-white p-1 text-lg' key = {tab}> {tab}</li>
                    <li id ='hidden'className='border-solid border-2 border-black  list-none w-24 l h-24 te4 lt-center p-1 bg-white text-xs   ' key = 'board'> Meeting the Board</li>
                    <li id ='hidden'className='border-solid border-2 border-black  list-none w-24 l h-24 te4 lt-center p-1 bg-white text-xs  ' key = 'rememberMichelle'>Remembering Michelle</li>
                </div>
            )
        } else if(tab === 'Programs'){
            return (
                <div id='programs'>
                     <li className='border-solid border-2 border-black list-none w-24 h-10 text-center p-1 text-lg bg-white' key = {tab}> {tab}</li>
                     <li id ='hidden' className='border-solid border-2 border-black  list-none w-24 l h-10 te4 lt-center p-1 bg-white  text-lg ' key = 'patientResources'>Patient Resources</li>
                     <li id ='hidden' className='border-solid border-2 border-black  list-none w-24 l h-10 te4 lt-center p-1  bg-white text-lg ' key = 'caregiverResources'> CareGiver Resources</li>
                     <li id ='hidden' className='border-solid border-2 border-black  list-none w-24 l h-10 te4 lt-center p-1  bg-white text-lg ' key = 'FCT'> Funding Clinical Trials</li>
                </div>
            )
        }
       return <li className='border-solid border-2 border-black list-none w-24 h-10 text-center p-1 bg-white text-lg ' key = {tab}> {tab}</li>
    })
    return (
        <header key='header' className="p-10 bg-gray-500"  >
            <img key='logo' className='ml-24 rounded-md border-solid border-black border-2' src = {logo} alt = 'FighterFoundation'></img>
            <h1 className='text-3xl mt-3 ml-80' >"I Think there is Always Hope"<br></br>-Michelle B. Dejong</h1>
            <h3 className='max-h-14 ml-10 border-solid border-2 border-black rounded-3xl text-2xl text-center p-1 mr-5 bg-white text-gray-500'>Fight to cure Glioblastoma!</h3>
            <nav key='navbar' className='flex ml-44'>{tabList}</nav>
        </header>
    )
}