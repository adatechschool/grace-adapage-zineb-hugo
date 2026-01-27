import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar"; 
import Quote from "./pages/Quotes";

  export interface GraceProps {
    name : string
    description : string
    country : string
    img : string
    logo : string
    quotes : {
      quote : string
      date : string
    }[]
    astro : string
    job : string
    qualities : string[]
    dob : string 
    dod : string
  }


function App() {

  let graceData = {
name : "Grace Murray Hopper",
description : "Grace Murray Hopper est une informaticienne, mathématicienne et Rear admiral (lower half) de la marine américaine, née le 9 décembre 1906 à New York et morte le 1er janvier 1992 dans le comté d'Arlington. Elle est la conceptrice du premier compilateur en 1951 (A-0 System) et du langage Cobol en 1959. En 1943, Grace Hopper s'engage dans la marine américaine. Promue au grade de lieutenante, elle est affectée l'année suivante au Bureau of Ordnance Computation Project de l'université Harvard. Elle travaille dans l'équipe de Howard Aiken sur l'ordinateur Harvard Mark I. Elle fait partie du premier groupe, comptant trois personnes, apprenant à le programmer. À la fin de la Seconde Guerre mondiale, elle quitte le service actif de la marine, mais continue à travailler au développement des ordinateurs Harvard Mark II puis Harvard Mark III pour le compte du Computation Laboratory d'Harvard. Hopper conçoit en 1951 le premier compilateur pour UNIVAC I, nommé A-0 System. En 1955, elle invente le langage FLOW-MATIC aussi appelé B-0. À partir de 1957, elle travaille pour IBM, où elle défend l'idée qu'un programme devrait pouvoir être écrit dans un langage proche de l'anglais plutôt que d'être calqué sur le langage machine, comme l'assembleur. De cette idée naît le langage Cobol en 1959.",
country : "Etats-Unis" ,
img : "https://upload.wikimedia.org/wikipedia/commons/3/37/Grace_Hopper_and_UNIVAC.jpg",
logo :"./assets/grace.svg", 
quotes : [
{quote : "A partir de maintenant, quand quelque chose ne fonctionne pas dans un ordinateur, on parlera de bug (insecte).", date: "16 avril 1984"},
{quote : "J'ai toujours été plus intéressée par le futur que par le passé.", date : "Octobre 1994"}, 
{quote :"L'ordinateur est la première machine construite par l'homme qui soutient la puissance de son cerveau plutôt que la force de son bras.", date:"1987"}, 
{quote:"Les êtres humains sont allergiques au changement. Ils adorent dire, 'Nous avons toujours fait comme ça'. J'essaye de lutter contre ça. C'est pour cela que j'ai une horloge qui tourne à l'envers sur mon mur.", date:"Date inconnue"}],
astro : "Sagittaire",
job : "Mathématicienne, programmeuse, officier de marine",
qualities :["Intelligence", "Courage", "Ambition", "Universalisme", "Loyauté"],
dob : "9 décembre 1906",
dod : "1er janvier 1992"
}

  return (

    <>
    <Navbar />
    <Routes>
   <Route path="/" element={<Home data={graceData} />} />
   <Route path="/citations" element= {<Quote quotes = {graceData.quotes}/>} />     
    </Routes>

    </>
  );
}
