import effort from './assets/effort.jpg'
export default function Events(){
    return(
        <main className='flex flex-col m-0 border-none'>
        <h1 className="text-2xl font-bold mt-5">Upcoming Events</h1>
        <div className='flex justify-around'>
            <img className='md:w-[189px] lg:w-[377px] rounded-xl' id='effort' src={effort} alt="effort" />
            <div className='self-center w-[50%] p-16' >
                <h2 className='text-2xl text-center font-bold'>Fighter 5 mile race</h2>
                <p className='text-center'>TBD ~ 2024</p>
                <p className='text-center text-2xl'>This race will further memoralize Michelle's passion for running, love of life, family and friends<br></br><br></br>
                The Fighter Foundation has ran Miles for Moffit multiple times in support of families and individuals effected by Glioblastoma. The organization is in the works 
                of creating a race dedicated to Michelle and to support the effort of helping our community!</p>
            </div>
            </div>
        </main>
        
    )
}