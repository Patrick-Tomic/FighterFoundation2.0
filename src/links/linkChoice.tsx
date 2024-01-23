import NavBar from "./nav";
import Sidebar from "./sidebar";
export default function Links(){
    let links = <NavBar />
    if(window.innerWidth <=900){
        console.log(true)
        links = <Sidebar />
    }
    return (
        <>
        {links}
        </>
    )
}