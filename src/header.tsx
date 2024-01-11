import logo from './assets/logo.jpg'
import './style.scss'
export default function Header(){
    const tabs:string[] = ["Home","Programs", "About", 'Events', "Blog","Contact", "Store"]
    const tabList = tabs.map((tab) => {
        if(tab === ('About')){
            return (
                <div id='about'>
                    <li className='border-solid border-2 border-black list-none w-24 h-10 text-center p-1 bg-gray-500 text-lg text-white' key = {tab}> {tab}</li>
                    <li id ='hidden'className='border-solid border-2 border-black  list-none w-24 l h-10 te4 lt-center p-1 bg-gray-500 text-lg text-white' key = 'board'> Meeting the Board</li>
                    <li id ='hidden'className='border-solid border-2 border-black  list-none w-24 l h-10 te4 lt-center p-1 bg-gray-500 text-lg text-white' key = 'rememberMichelle'>Remembering Michelle</li>
                </div>
            )
        } else if(tab === 'Programs'){
            return (
                <div id='programs'>
                     <li className='border-solid border-2 border-black list-none w-24 h-10 text-center p-1 bg-gray-500 text-lg text-white' key = {tab}> {tab}</li>
                     <li id ='hidden' className='border-solid border-2 border-black  list-none w-24 l h-10 te4 lt-center p-1 bg-gray-500 text-lg text-white' key = 'patientResources'>Patient Resources</li>
                     <li id ='hidden' className='border-solid border-2 border-black  list-none w-24 l h-10 te4 lt-center p-1 bg-gray-500 text-lg text-white' key = 'caregiverResources'> CareGiver Resources</li>
                     <li id ='hidden' className='border-solid border-2 border-black  list-none w-24 l h-10 te4 lt-center p-1 bg-gray-500 text-lg text-white' key = 'FCT'> Funding Clinical Trials</li>
                </div>
            )
        }
       return <li className='border-solid border-2 border-black list-none w-24 h-10 text-center p-1 bg-gray-500 text-lg text-white' key = {tab}> {tab}</li>
    })
    return (
        <header className="p-10"  >
            <img className='ml-24' src = {logo} alt = 'FighterFoundation'></img>
            <h1 className='text-3xl mt-3 ml-80' >"I Think there is Always Hope"<br></br>-Michelle B. Dejong</h1>
            <h3 className='max-h-14 ml-10 border-solid border-2 border-black rounded-3xl text-2xl text-center p-1 mr-5 bg-gray-500 text-white'>Fight to cure Glioblastoma!</h3>
            <nav className='flex ml-60'>{tabList}</nav>
        </header>
    )
}