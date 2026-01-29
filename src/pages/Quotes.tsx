import type { GraceProps } from "../App";

type DataProps = Pick<GraceProps, "quotes">;

export default function Quote({ quotes }: DataProps) {
  return (
    <main className=" min-h-screen pt-32
                 bg-gradient-to-br from-indigo-100 via-pink-100 to-yellow-100
                 dark:bg-gradient-to-br dark:from-slate-900 dark:via-indigo-950 dark:to-slate-900
                 relative overflow-hidden ">

      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob top-10 left-20"></div>
        <div className="absolute w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000 top-64 left-72"></div>
        <div className="absolute w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000 top-32 left-1/2"></div>
      </div>

      <section className="max-w-6xl mx-auto px-6 relative z-10">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-12 dark:text-white text-center tracking-wide">
          Citations
        </h1>

        <div className="flex flex-wrap justify-center gap-8">
          {quotes.map((q, i) => (
            <div
              key={i}
              className="relative w-80 p-6 rounded-3xl bg-white/30 backdrop-blur-md border border-white/20 shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-500"
            >
              <p className="text-gray-900 text-lg italic mb-4">{q.quote}</p>
              <p className="text-gray-500 font-medium text-sm text-right">— {q.date}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
