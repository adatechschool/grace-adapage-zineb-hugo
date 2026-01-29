import type { GraceProps } from "../App";

type HomeProps = { data: GraceProps };

export default function Home({ data }: HomeProps) {
  return (
    <main className="min-h-screen relative overflow-hidden pt-32 bg-gradient-to-br from-indigo-100 via-pink-100 to-yellow-100">
      
     
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob top-10 left-20"></div>
        <div className="absolute w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000 top-64 left-72"></div>
        <div className="absolute w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000 top-32 left-1/2"></div>
      </div>

      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">

        <div>
          <h1 className="text-6xl font-extrabold text-gray-900 mb-8 leading-tight tracking-wide">
            {data.name}
          </h1>

          <p className="text-lg text-gray-700 leading-relaxed text-justify text-shadow-md">
            {data.description}
          </p>
        </div>

        <div className="flex justify-center relative">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink-200 rounded-full opacity-60 blur-2xl"></div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-200 rounded-full opacity-60 blur-2xl"></div>
            <img
              src={data.img}
              alt={data.name}
              className="relative rounded-3xl shadow-2xl max-h-[520px] object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

      </section>
    </main>
  );
}
