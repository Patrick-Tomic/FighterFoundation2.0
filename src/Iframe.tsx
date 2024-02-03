// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Iframe(props:{name:string; src:any, width, height}){
    return (
     <div  className="overflow-auto w-fit h-[300px]">
        <iframe height={props.height} width={props.width}   name={props.name} src = {props.src}> </iframe>
        </div>
    )
}