import {Link} from 'react-router-dom'
export default function Sidebar(){
    const bar = ['Home', 'About','Programs', 'Events', 'Blog','Contact','Store']
    const barList = bar.map((item) =>{
        const key = `${item}B`
        let link = `/${item}`
        if(item === 'Home'){
            link = '/'
        }
        return (
            <>
            <li className='border-b-2 border-black font-' key={key}>
                <Link to={link}>{item}</Link>
            </li>
            </>
        )
    })
    const sideButton =  <button className='absolute left-[88%] top-[30%]' onClick={() => {
        const sideBar = document.getElementById('sidebar')
        sideBar?.setAttribute('id','active')
    }} id='sideBarBtn'><svg width="90" height="68" viewBox="0 0 90 68" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect y="24.1963" width="90" height="19.6074" rx="9.80368" fill="white"/>
    <rect y="24.1963" width="90" height="19.6074" rx="9.80368" fill="white"/>
    <rect y="24.1963" width="90" height="19.6074" rx="9.80368" fill="white"/>
    <rect y="48.3926" width="90" height="19.6074" rx="9.80368" fill="white"/>
    <rect y="48.3926" width="90" height="19.6074" rx="9.80368" fill="white"/>
    <rect y="48.3926" width="90" height="19.6074" rx="9.80368" fill="white"/>
    <rect width="90" height="19.6074" rx="9.80368" fill="white"/>
    <rect width="90" height="19.6074" rx="9.80368" fill="white"/>
    <rect width="90" height="19.6074" rx="9.80368" fill="white"/>
    </svg>
    
    </button>
    
    
    return(
        <>
        
        {sideButton}
        <div id='sidebar' className='hidden min-h-[100%] absolute bg-white'>
            <ul className="list-none">
                {barList}
            </ul>
        </div>
        
        </>
    )
}