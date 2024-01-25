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
            <li className='border-b-2 border-black font-cabin text-2xl p-4  bg-white' key={key}>
                <Link onClick={() =>{
                    document.getElementById('active')?.setAttribute('id','sidebar')
                }} to={link}>{item}</Link>
            </li>
            </>
        )
    })
    const sideButton =  <button className='absolute left-[88%] top-[30%] sm:mt-6' onClick={() => {
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
        <div id='sidebar' className='hidden m-0 min-h-[100%] absolute bg-gray-400'>
            <button onClick={() =>{
                 const sideBar = document.getElementById('active')
                 sideBar?.setAttribute('id','deActive')
                 setTimeout( () =>{
                    document.getElementById('deActive')?.setAttribute('id','sidebar')
                 },1000)
            }}><svg width="75" height="64" viewBox="0 0 75 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="75.345" height="19.2231" rx="9.61154" transform="matrix(0.762888 0.64653 -0.767627 0.640897 15.7975 2.09912)" fill="#717A7E"/>
            <rect width="75.5733" height="19.1657" rx="9.58283" transform="matrix(-0.756437 0.654066 -0.774012 -0.63317 73.5733 13.0078)" fill="#717A7E"/>
            </svg>

            </button>
            <ul className="list-none">
                {barList}
            </ul>
        </div>
        
        </>
    )
}