import NIH from './assets/NIH.png'
import sword from './assets/sword-of-hope.png'
import GBMFoundation from './assets/GBMFoundation.png'
import oligo from './assets/oligo.png'
import JHM from './assets/JHM.png'
export default function Programs(){
const caregiver = [{
    link:'https://www.cancer.org/cancer/caregivers/caregiver-resource-guide.html',
    description: 'The American Cancer Society is the leading cancer-fighting organization with a vision of ending cancer as we know it. Their mission is to improve the lives of people with cancer and their families through advocacy, research, and patient support, to ensure everyone has an opportunity to prevent, detect, treat and survive cancer.',
    img:sword,
    linkText:"Caregiver Resource Guide"
},
{
    link:'https://www.cancer.gov/resources-for/caregivers',
    description:"The National Cancer Institute is the federal government's principal agency for cancer research and training. NCI leads, conducts and supports cancer research across the nation to advance scientific knowledge and help all people live longer, healthier lives.",
    img:NIH,
    linkText:'Resources for Caregivers'
}]
const caregiverLinks = caregiver.map((object) => {
    return (
        <div className=' border-solid border-black border-2 bg-white gap-0  grid grid-cols-2 grid-rows-2'>
            <img className='w-96 mt-16 bg-white' src={object.img} />
            <a className="underline hover:text-[#FFBF00]  ml-[5vw] text-blue-500 text-4xl mt-32 " href= {object.link}>{object.linkText}</a>
            <p className='w-[100%] p-10 col-span-2 text-xl ml-[-10px]'>{object.description}</p>
        </div>
    )
})
const patient = [
    {
        link:'https://glioblastomafoundation.org/patients/glioblastoma-patient-and-caregiver-support-groups#:~:text=The%20Glioblastoma%20Support%20Circle%20is,empathetic%20understanding%2C%20and%20social%20connection',
        description:'The mission of the Glioblastoma Foundation is to transform the standard of care for glioblastoma. They support the development of new drugs and other effective therapies for glioblastoma.',
        img:GBMFoundation,
        linkText:'Glioblastoma Patient and Caregiver Support Groups'
    },
    {
        link:'https://www.hopkinsmedicine.org/brain-tumor/patient-resources',
        description:'John Hopkins Medicine',
        img:JHM
    },
    {
        link:'https://www.oligonation.org/living-with-oligo/oligodendroglioma-emotional-journey/?gclid=CjwKCAiApuCrBhAuEiwA8VJ6JrWfWS4dSmim6ZOxm--',
        description:'Oligo Nation',
        img:oligo
    },
]
const patientLinks = patient.map((object) => {
    return (
        <div className='border-solid border-black border-2 bg-white gap-0 p-5 grid grid-cols-2'>
            
            <img className='w-96 bg-white' src={object.img} alt={object.description} />
            <a className="underline text-blue-500 text-3xl mt-32" href= {object.link}> {object.linkText}</a>
            <p className='text-3xl col-span-2'>{object.description}</p>
        </div>
    )
})
return (
    <>
    <h1 className=" bg-gray-500 text-white p-10 text-center text-5xl font-cabin">Caregiver Resources</h1>
    {caregiverLinks}
    <h1 className='bg-gray-500 text-white p-10 text-center text-5xl font-cabin'>Patient Resources</h1>
    {patientLinks}
    </>
)
}