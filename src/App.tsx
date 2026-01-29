import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Quote from "./pages/Quotes";
import grace from "./assets/grace.svg";
import Specificites from "./pages/Specificites";
import Frise from "./pages/Frise";

export interface GraceProps {
  name: string;
  description: string;
  country: string;
  img: string;
  logo: string;
  quotes: {
    quote: string;
    date: string;
  }[];
  astro: string;
  job: string;
  qualities: string[];
  dob: string;
  dod: string;
}

export default function App() {
  const graceData: GraceProps = {
    name: "Grace Murray Hopper",
    description: `Grace Murray Hopper est une informaticienne, mathématicienne et Rear admiral (lower half) de la marine américaine, née le 9 décembre 1906 à New York et morte le 1er janvier 1992 dans le comté d'Arlington.

Elle est la conceptrice du premier compilateur en 1951 (A-0 System) et du langage Cobol en 1959.

En 1943, Grace Hopper s'engage dans la marine américaine. Promue au grade de lieutenante, elle est affectée l'année suivante au Bureau of Ordnance Computation Project de l'université Harvard. Elle travaille dans l'équipe de Howard Aiken sur l'ordinateur Harvard Mark I. Elle fait partie du premier groupe apprenant à le programmer.

À la fin de la Seconde Guerre mondiale, elle quitte le service actif mais continue à travailler au développement des ordinateurs Harvard Mark II et Mark III.

En 1951, elle conçoit le premier compilateur pour UNIVAC I (A-0 System). En 1955, elle invente le langage FLOW-MATIC, qui mènera au COBOL en 1959.`,
    country: "États-Unis",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/37/Grace_Hopper_and_UNIVAC.jpg",
    logo: grace,
    quotes: [
      {
        quote:
          " A partir de maintenant, quand quelque chose ne fonctionne pas dans un ordinateur, on parlera de bug.",
        date: "1984 ",
      },
      {
        quote:
          " J'ai toujours été plus intéressée par le futur que par le passé. ",
        date: "1994",
      },
    ],
    astro: "Sagittaire",
    job: "Mathématicienne, programmeuse",
    qualities: ["Intelligence", "Courage", "Ambition"],
    dob: "9 décembre 1906",
    dod: "1er janvier 1992",
  };

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home data={graceData} />} />

        <Route path="/Specificites" element={<Specificites data={graceData} />} />

        <Route path="/citations" element={<Quote quotes={graceData.quotes} />} />

        <Route path="/frise" element={<Frise/>} />
      </Routes>
    </>
  );
}
