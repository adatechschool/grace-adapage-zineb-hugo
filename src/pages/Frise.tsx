import TimelineItem from "../components/Timeline";
import type { GraceProps } from "../App";

interface friseProps {
    graceData : GraceProps
}

export default function Frise({graceData} : friseProps) {
    return (
        <main className="min-h-screen pt-32
                 bg-gradient-to-br from-indigo-100 via-pink-100 to-yellow-100
                 dark:bg-gradient-to-br dark:from-slate-900 dark:via-indigo-950 dark:to-slate-900
                 relative overflow-hidden ">

        
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob top-10 left-20"></div>
                <div className="absolute w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000 top-64 left-72"></div>
                <div className="absolute w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000 top-32 left-1/2">
            </div>
    
      </div>
        <h1 className="text-4xl font-extrabold text-gray-900 leading-tight  dark:text-white tracking-wide text-center">Grace Hopper, une vie dédiée au progrès informatique</h1>
        <div className="flex flex-col relative my-5 after:content-[''] after:bg-[#e17b77] after:absolute after:left-[calc(50%-2px)] after:w-1 after:h-full ">
                
        {graceData.timeline.map((data, index) => {
            return <TimelineItem data={data} index={index} key={index}/>
        })
      
    }
    </div>
        </main>
    )
}