import { Link } from "react-router-dom";
import graceLogo from "../assets/grace.svg";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        
        <div className="flex items-center">
          <Link to="/"><img 
            src={graceLogo}
            alt="Grace Hopper"
            className="h-25 w-28 object-contain transition hover:scale-120"
          /></Link>
        </div>

        
        <ul className="flex gap-10 text-lg text-gray-700 font-semibold">

          <li>
            <Link to="/" className="relative
                                        px-4 py-2 rounded-lg
                                        bg-gradient-to-br from-indigo-100 to-pink-100
                                        text-gray-900 font-medium
                                        ring-1 ring-indigo-200
                                        transition-all duration-300 ease-out
                                        hover:ring-indigo-400
                                        hover:scale-105
                                        hover:shadow-[0_0_25px_rgba(99,102,241,0.35)] ">
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/specificites" className="relative
                                        px-4 py-2 rounded-lg
                                        bg-gradient-to-br from-indigo-100 to-pink-100
                                        text-gray-900 font-medium
                                        ring-1 ring-indigo-200
                                        transition-all duration-300 ease-out
                                        hover:ring-indigo-400
                                        hover:scale-105
                                        hover:shadow-[0_0_25px_rgba(99,102,241,0.35)] ">
              Spécificités
            </Link>
          </li>
          <li>
            <Link to="/citations" className="relative
                                        px-4 py-2 rounded-lg
                                        bg-gradient-to-br from-indigo-100 to-pink-100
                                        text-gray-900 font-medium
                                        ring-1 ring-indigo-200
                                        transition-all duration-300 ease-out
                                        hover:ring-indigo-400
                                        hover:scale-105
                                        hover:shadow-[0_0_25px_rgba(99,102,241,0.35)] ">
              Citations
            </Link>
          </li>
            <li>
          <Link to="/frise" className=" relative
                                        px-4 py-2 rounded-lg
                                        bg-gradient-to-br from-indigo-100 to-pink-100
                                        text-gray-900 font-medium
                                        ring-1 ring-indigo-200
                                        transition-all duration-300 ease-out
                                        hover:ring-indigo-400
                                        hover:scale-105
                                        hover:shadow-[0_0_25px_rgba(99,102,241,0.35)] " >

           Frise
         </Link>



          </li>
        </ul>

      </div>
    </nav>
  );
}
