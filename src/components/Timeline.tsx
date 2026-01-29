import type { GraceProps } from "../pages/Frise";

interface dataProps {
    data : GraceProps["timeline"][0]
}

export default function TimelineItem ({data, index} : dataProps & {index : number}) {

const isOdd = index % 2 !== 0;

    return (
    <div className={`flex relative my-2.5 w-1/2  ${isOdd ? 'self-end justify-start pl-[30px]' : 'justify-end pr-[30px]'}`}>
        <div className={`shadow-md rounded-xl bg-white/30 flex flex-col p-[15px] relative w-[400px] max-w-[70%] hover:shadow-xl transition-transform duration-500 ${isOdd ? 'text-left items-start' : 'text-right items-end'}`}>
            <span className={`absolute top-1/2 -translate-y-1/2 w-[15px] h-[15px] bg-white rotate-45 ${isOdd ? '-left-[7.5px] shadow-[-1px_1px_1px_rgba(0,0,0,0.2)]' : '-right-[7.5px] shadow-[1px_-1px_1px_rgba(0,0,0,0.2)]'}`}></span>
    
            <span 
                className={`text-white text-xs rounded-lg opacity-60 font-bold tracking-wider px-1.5 py-1 absolute top-1.5 uppercase ${isOdd ? 'right-1.5' : 'left-1.5'}`}
                style={{backgroundColor: data.type.color}}
            >
                {data.type.tag}
            </span>
    
            <span className={`absolute top-1/2 -translate-y-1/2 bg-white border-[3px] border-[#e17b77] rounded-full w-5 h-5 z-[100] ${isOdd ? '-left-10' : '-right-10'}`}></span>
            
            <time className="text-[#777] text-xs font-bold">{data.date}</time>
            <p className="leading-6 my-[15px] max-w-96 text-gray-900 text-base">{data.text}</p>
            <img src={data.img}></img>
        </div>
    </div>
)

}