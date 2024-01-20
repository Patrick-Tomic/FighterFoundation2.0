import NIH from './assets/NIH.png'
import sword from './assets/sword-of-hope.png'
import GBMFoundation from './assets/GBMFoundation.png'
import oligo from './assets/oligo.png'
import JHM from './assets/JHM.png'
export default function Programs(){
const caregiver = [{
    link:'https://www.cancer.org/cancer/caregivers/caregiver-resource-guide.html',
    website: 'American Cancer Society',
    img:sword
},
{
    link:'https://www.cancer.gov/resources-for/caregivers',
    website:'National Cancer Institute',
    img:NIH
}]
const caregiverLinks = caregiver.map((object) => {
    return (
        <div className='border-solid border-black border-2 bg-white gap-0 p-5 grid grid-col-2'>
            <h1 className='text-5xl col-span-3'>{object.website}</h1>
            <img className='w-96 bg-gray-200' src={object.img} alt={object.website} />
            <div className='mt-16 '>
            <a className="underline text-blue-500 text-3xl " href= {object.link}> Caregiver Assistance!</a>
        </div>
        </div>
    )
})
const patient = [
    {
        link:'https://glioblastomafoundation.org/patients/glioblastoma-patient-and-caregiver-support-groups#:~:text=The%20Glioblastoma%20Support%20Circle%20is,empathetic%20understanding%2C%20and%20social%20connection',
        website:'Glioblastoma Foundation',
        img:GBMFoundation
    },
    {
        link:'https://www.hopkinsmedicine.org/brain-tumor/patient-resources',
        website:'John Hopkins Medicine',
        img:JHM
    },
    {
        link:'https://www.oligonation.org/living-with-oligo/oligodendroglioma-emotional-journey/?gclid=CjwKCAiApuCrBhAuEiwA8VJ6JrWfWS4dSmim6ZOxm--',
        website:'Oligo Nation',
        img:oligo
    },
]
const patientLinks = patient.map((object) => {
    return (
        <div className='border-solid border-black border-2 bg-white gap-0 p-5 grid grid-col-2'>
            <h1 className='text-5xl col-span-3'>{object.website}</h1>
            <img className='w-96 bg-gray-200' src={object.img} alt={object.website} />
            <div className='mt-16 '>
            <a className="underline text-blue-500 text-3xl " href= {object.link}> Patient Assistance!</a>
        </div>
        </div>
    )
})
return (
    <>
    <h1 className='bg-white text-center text-4xl'>Caregiver Resources</h1>
    {caregiverLinks}
    <h1 className='bg-white text-center text-4xl'>Patient Resources</h1>
    {patientLinks}
    </>
)
}