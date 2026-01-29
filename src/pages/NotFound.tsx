import { Link } from "react-router-dom"

export default function NotFound() {
    return (
<main className="min-h-screen relative overflow-hidden pt-32 bg-gradient-to-br from-indigo-100 via-pink-100 to-yellow-100">
         
    <div className="absolute inset-0 overflow-hidden">
    <div className="absolute w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob top-10 left-20"></div>
    <div className="absolute w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000 top-64 left-72"></div>
    <div className="absolute w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000 top-32 left-1/2"></div>
    </div>
    
    <div className = "flex flex-col items-center">
    <h1 className="text-6xl font-extrabold text-gray-900 mb-12 text-center tracking-wide leading-loose">
          Oops, il y a un souci ! <br></br>Cette page n'existe pas !
    </h1>
    <Link to="/"><button className="relative w-40 h-20 px-4 py-2 rounded-lg bg-gradient-to-br from-indigo-100 to-pink-100  text-gray-900 font-medium ring-1 ring-indigo-200 transition-all duration-300 ease-out  hover:ring-indigo-400 hover:scale-105 hover:shadow-[0_0_25px_rgba(99,102,241,0.35)] text-xl">
        Revenir à l'accueil
    </button></Link>
    </div>
</main>
    )
}