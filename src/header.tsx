import logo from './assets/logo.jpg'
export default function Header(){
    const tabs:string[] = ["Home","Programs", "About", 'Events', "Blog","Contact", "Store"]
    const tabList = tabs.map((tab) => <li key = {tab}> {tab}</li>)
    return (
        <header className='flex'>
            <img src = {logo} alt = 'FighterFoundation'></img>
            <h1>"I Think there is Always Hope"<br></br>-Michelle B. Dejong</h1>
            <h3>Fight to cure Glioblastoma!</h3>
            <nav>{tabList}</nav>
        </header>
    )
}