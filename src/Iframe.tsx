// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Iframe(props:{name:string; src:any, width: string | number | undefined, height: string | number | undefined}){
    return (
     <div id='media'  className="border-double bg-white border-[#FFF5EE] border-8 overflow-auto w-fit rounded-xl h-[300px] m-10">
        <iframe height={props.height} width={props.width}   name={props.name} src = {props.src}> </iframe>
        </div>
    )
}