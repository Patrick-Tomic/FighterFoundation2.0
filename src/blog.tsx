import Iframe from "./Iframe"
export default function Blog(){
    return (
        <main className='flex flex-col m-0 p-10'>
     <iframe className="w-[40%] h-[55vh]" src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fmichelleboyddejong%2Fvideos%2F1705604559678878%2F&show_text=false&width=560&t=0" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
     <div className="grid grid-cols-2 w-[100%]">
        <Iframe width={560} height={315} src="https://www.youtube.com/embed/xe79LWPA4Iw?si=XwYpEKmIwnsv_DjB"  name='News'></Iframe>
        <Iframe width={500} height={781}  src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmichelleboyddejong%2Fphotos%2Fa.1440492852856718%2F1736761123229888%2F%3Ftype%3D3&show_text=true&width=500" name="Foundation Stand" ></Iframe>
    </div>
       </main>
    )
}