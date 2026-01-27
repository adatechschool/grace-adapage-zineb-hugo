import Navbar from "../components/Navbar";
import type { GraceProps } from "../App";

type DataProps = Pick<GraceProps, "quotes" | "logo">

export default function Quote({quotes, logo}: DataProps) {
  return (
    <>
      <Navbar logo = {logo}/>
      <main className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 p-8">
        <h1 className="text-3xl text-center m-6 text-black">Citations</h1>
        <div className = "flex flex-row flex-wrap gap-6 mx-auto space-y-6 items-center justify-center">
        {quotes.map((e, index) => {
            return (
                <div key={index} className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-slate-300 overflow-hidden w-xl">

                <div className="absolute top-0 left-0 w-1 h-full bg-linear-to-b from-blue-500 to-purple-500 transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300" />

                <div className="absolute top-6 left-6 text-6xl text-slate-200 font-serif leading-none select-none">❝</div>
                    <p className="relative text-lg text-slate-700 leading-relaxed pl-8 mb-4 italic">"{e.quote}"</p>
                    <p className="text-sm text-slate-400 font-medium tracking-wide">{e.date}</p>

                <div className="absolute bottom-6 right-6 text-6xl text-slate-200 font-serif leading-none select-none">❞</div>

                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 transform -skew-x-12 group-hover:translate-x-full transition-all duration-1000" />
            </div>
            )
        }) 
        }
        </div>
    </main>
    </>
  );
}