

export default function Navbar({logo} : any) {
  return (
    <nav className="fixed top-0 w-full bg-white shadow flex items-center justify-between px-6 py-3">
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo du projet" className="h-8 w-8" />
        <span className="font-bold text-lg">AdaPage</span>
      </div>

      <ul className="flex gap-6">
        <li><a href="#intro">Intro</a></li>
        <li><a href="#specificites">Spécificités</a></li>
        <li><a href="#timeline">Frise</a></li>
      </ul>
    </nav>
  );
}
