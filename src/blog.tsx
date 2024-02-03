import Iframe from "./Iframe"
export default function Blog(){
    return (
        <main className='flex flex-col  p-10'>
     <iframe className="w-[60%] h-[65vh]" src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fmichelleboyddejong%2Fvideos%2F1705604559678878%2F&show_text=false&width=560&t=0" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
    
    
    <h1 className="text-2xl font-bold Playfair m-5">Fighter Foundation Content</h1>
     <div className="bg-[#36454F]  grid grid-cols-2 w-[90%] ">
        <Iframe width={560} height={315} src="https://www.youtube.com/embed/xe79LWPA4Iw?si=XwYpEKmIwnsv_DjB"  name='News'></Iframe>
        <Iframe width={500} height={781}  src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmichelleboyddejong%2Fphotos%2Fa.1440492852856718%2F1736761123229888%2F%3Ftype%3D3&show_text=true&width=500" name="Foundation Stand" ></Iframe>
        <Iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmichelleboyddejong%2Fposts%2Fpfbid05Nn2VKWrXr4k1QnzAZsft8MLzrveP6rDzMV1C4ZJ8grbodNvpLe7rji9CCrpTr1Fl&show_text=true&width=500" width={500} height={709} name='donations' ></Iframe>
        <Iframe width={500} height={604} name='makeTheDaysCount' src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmichelleboyddejong%2Fphotos%2Fa.1438819283024075%2F2057004844538846%2F&show_text=true&width=500"></Iframe>
        <Iframe width={500} height={693} src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmichelleboyddejong%2Fposts%2Fpfbid036hSUquuDYYa9bfMX7mqvxW8EJdQ1Cx8PD5Lb6UiPCRkrRYkfMMzveF7V2iFiFDdpl&show_text=true&width=500" name=''></Iframe>
        <Iframe width={500} height={709} src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmichelleboyddejong%2Fposts%2Fpfbid02oacPmTc5jhktKGqnYHaQax2sLQdszc1ncY7shiCyovTgWct8rGWNPKUqc9YY3uSQl&show_text=true&width=500" name=''></Iframe>
        <Iframe width={500} height={726} src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmichelleboyddejong%2Fposts%2Fpfbid02Rc27486QjewWzQjDgCqFP8xQUmZ8oZLmzsWGAwyDihJwjVcJpCKg5rrRhVt4vk5Wl&show_text=true&width=500" name=''></Iframe>
        <Iframe width={500} height={742} src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmichelleboyddejong%2Fposts%2Fpfbid02o3A9X6EzNC226M6wkRrU2s6Hv5nCasqnT3xWNMsDTAcTjBXnX8p6HiGZaym6nU5jl&show_text=true&width=500" name='' ></Iframe>
        <Iframe width={500} height={654} src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmichelleboyddejong%2Fposts%2Fpfbid02nJ8W8UWtRmtJJEDFG6djiFAkcP7ajoYiLVwPX47LmSLkkhfkfxbf6HMRZKScMZqTl&show_text=true&width=500" name=''></Iframe>
    </div>
       </main>
    )
}