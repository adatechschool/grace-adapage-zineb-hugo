import type { GraceProps } from "../App";

type SpecificitesProps = { data: GraceProps };

export default function Specificites({ data }: SpecificitesProps) {
  return (
    <main className="min-h-screen pt-32
                 bg-gradient-to-br from-indigo-100 via-pink-100 to-yellow-100
                 dark:bg-gradient-to-br dark:from-slate-900 dark:via-indigo-950 dark:to-slate-900
                 relative overflow-hidden">

      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob top-10 left-20"></div>
        <div className="absolute w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000 top-64 left-72"></div>
        <div className="absolute w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000 top-32 left-1/2"></div>
      </div>

      <section className="max-w-6xl mx-auto px-6 relative z-10">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-16  dark:text-white text-center tracking-wide">
          Spécificités
        </h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {[
            { title: "Nom complet", value: data.name },
            { title: "Nationalité", value: data.country },
            { title: "Métier", value: data.job },
            { title: "Signe astrologique", value: data.astro },
            { title: "Date de naissance", value: data.dob },
            { title: "Date de décès", value: data.dod },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 bg-white/30 backdrop-blur-md rounded-3xl shadow-lg border border-white/20 hover:scale-105 transform transition-all duration-500"
            >
              <h3 className="text-sm uppercase text-gray-400 mb-2">{item.title}</h3>
              <p className="text-xl font-semibold text-gray-900">{item.value}</p>
            </div>
          ))}

          <div className="p-6 bg-white/30 backdrop-blur-md rounded-3xl shadow-lg border border-white/20 lg:col-span-3 hover:scale-105 transform transition-all duration-500">
            <h3 className="text-sm uppercase text-gray-400 mb-4">Qualités</h3>
            <div className="flex flex-wrap gap-3">
              {data.qualities.map((q, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full bg-purple-100 text-purple-800 font-medium shadow-md"
                >
                  {q}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
