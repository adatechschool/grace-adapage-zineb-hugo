import graceLogo from "../assets/grace.svg";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        {/* Logo seul */}
        <div className="flex items-center">
          <img
            src={graceLogo}
            alt="Grace Hopper"
            className="h-25 w-28 object-contain transition hover:scale-120"
          />
        </div>

        {/* Menu */}
        <ul className="flex gap-10 text-lg text-gray-700 font-semibold">
          <li>
            <a href="#intro" className="hover:text-red-600 transition">
              Introduction
            </a>
          </li>
          <li>
            <a href="#specificites" className="hover:text-red-600 transition">
              Spécificités
            </a>
          </li>
          <li>
            <a href="#timeline" className="hover:text-red-600 transition">
              Frise
            </a>
          </li>
        </ul>

      </div>
    </nav>
  );
}
