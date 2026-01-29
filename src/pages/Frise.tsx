import TimelineItem from "../components/Timeline";

export interface GraceProps {
  name: string;
  description: string;
  country: string;
  img: string;
  quotes: {
    quote: string;
    date: string;
  }[];
  astro: string;
  job: string;
  qualities: string[];
  dob: string;
  dod: string;
  timeline : {
    text : string
    date : string
    type : {
        tag : string
        color : string
    }
    img : string
  }[]
}

export default function Frise() {
    const graceData: GraceProps = {
    name: "Grace Murray Hopper",
    description: `Grace Murray Hopper est une informaticienne, mathématicienne et Rear admiral (lower half) de la marine américaine, née le 9 décembre 1906 à New York et morte le 1er janvier 1992 dans le comté d'Arlington.

Elle est la conceptrice du premier compilateur en 1951 (A-0 System) et du langage Cobol en 1959.

En 1943, Grace Hopper s'engage dans la marine américaine. Promue au grade de lieutenante, elle est affectée l'année suivante au Bureau of Ordnance Computation Project de l'université Harvard. Elle travaille dans l'équipe de Howard Aiken sur l'ordinateur Harvard Mark I. Elle fait partie du premier groupe apprenant à le programmer.

À la fin de la Seconde Guerre mondiale, elle quitte le service actif mais continue à travailler au développement des ordinateurs Harvard Mark II et Mark III.

En 1951, elle conçoit le premier compilateur pour UNIVAC I (A-0 System). En 1955, elle invente le langage FLOW-MATIC, qui mènera au COBOL en 1959.`,
    country: "États-Unis",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/37/Grace_Hopper_and_UNIVAC.jpg",
    quotes: [
      {
        quote:
          "A partir de maintenant, quand quelque chose ne fonctionne pas dans un ordinateur, on parlera de bug.",
        date: "1984",
      },
      {
        quote:
          "J'ai toujours été plus intéressée par le futur que par le passé.",
        date: "1994",
      },
    ],
    astro: "Sagittaire",
    job: "Mathématicienne, programmeuse",
    qualities: ["Intelligence", "Courage", "Ambition"],
    dob: "9 décembre 1906",
    dod: "1er janvier 1992",
    timeline : [{
        text : "Grace Murray naît à New York. Elle est l'aînée des trois enfants de Walter Fletcher Murray et Mary Campbell Van Horne.",
        date : "9 décembre 1906",
        type : {tag : "Vie personnelle", color : "blue"},
        img : ""
    },{
        text : "Grace Murray est une enfant curieuse. A l'âge de sept ans, elle démonte les sept horloges du domicile familial pour essayer de comprendre leur fonctionnement.",
        date : "1913",
        type : {tag : "Science", color : "green"},
        img : ""
    },
    {
        text : "Grace Murray épouse Vincent Foster Hopper, professeur à l'université de New York. Ils divorceront en 1945 mais elle gardera son nom.",
        date : "1930",
        type : {tag : "Vie personnelle", color : "blue"},
        img : ""
    },
    {
        text : "Après des études au Vassar College de New York, Grace Hopper rejoint l'université de Yale, où elle obtient son doctorat de mathématiques en 1934. En parallèle, elle enseigne les mathématiques.",
        date : "1934",
        type : {tag : "Etudes", color : "green"},
        img : ""
    },
    {
        text : "Pendant la Seconde Guerre Mondiale, Grace Hopper rejoint le programme Waves (Women Accepted for Volunteer Emergency Service) qui permet à des femmes de rejoindre la Navy, la marine américaine. Elle est affectée au Bureau Naval de Programmation, qui développe des outils informatiques pour la Navy. ",
        date : "1943",
        type : {tag : "Etudes", color : "green"},
        img : ""
    },
    {
        text : "Elle participe au développement du Harvard Mark I, le premier grand calculateur numérique américain, ancêtre des ordinateurs.",
        date : "1944",
        type : {tag : "Carrière", color : "black"},
        img : "https://www.thoughtco.com/thmb/b6GQkWD-BBjPRJ1wlEY2mCQtpDY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-107636032-293dc66802a54c4685892d2bb7831ef5.jpg"
    },
    {
        text : "En travaillant sur le Mark II, son équipe découvre un insecte dans un des composants de la machine, à l'origine d'un dysfonctionnement. Désormais, le terme bug (insecte) désignera un problème informatique.",
        date : "1947",
        type : {tag : "Carrière", color : "black"},
        img : "https://vcencyclopedia.vassar.edu/wp-content/uploads/2022/03/First_Computer_Bug_1945.jpg"
    },{
        text : "Grace Hopper en train de programmer dans les années 40",
        date : "",
        type : {tag : "Photo", color : "yellow"},
        img : "https://www.silkhom.com/wp-content/uploads/2024/10/Grace-Hopper.jpg"
    },
    {
        text : "Grace Hopper rejoint la Eckert-Mauchly Computer Corporation, où elle intègre l'équipe de développement de l'UNIVAC, le premier ordinateur commercial des Etats-Unis.",
        date : "1951",
        type : {tag : "Carrière", color : "black"},
        img : ""
    },
    {
        text : "Grace Hopper veut que le code informatique soit semblable au langage humain, plutôt qu'une suite de symboles abstraits. Dans ce but, elle met au point le langage COBOL (COmmon Business-Oriented Language).",
        date : "1960",
        type : {tag : "Carrière", color : "black"},
        img : "https://upload.wikimedia.org/wikipedia/commons/3/37/Grace_Hopper_and_UNIVAC.jpg"
    },{
        text : "Grace Hopper en uniforme de la Navy, en 1984.",
        date : "1984",
        type : {tag : "Photo", color : "yellow"},
        img : "https://upload.wikimedia.org/wikipedia/commons/a/ad/Commodore_Grace_M._Hopper%2C_USN_%28covered%29.jpg"
    },
    {
        text : "Elle poursuit sa carrière dans la Navy, où elle participe aux développement des systèmes et des langages informatiques. Grace Hopper prend sa retraite avec le grade de 'rear admiral (lower half)', devenant une des rares femmes à atteindre ce rang. ",
        date : "14 août 1986",
        type : {tag : "Carrière", color : "black"},
        img : ""
    },
    {
        text : "Grace Hopper décède dans son sommeil à 85 ans. Elle est enterrée avec les honneurs militaires au cimetière national d'Arlington, en Virginie.",
        date : "1er janvier 1992",
        type : {tag : "Vie personnelle", color : "blue"},
        img : "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/ANCExplorer_Grace_Hopper_grave.jpg/250px-ANCExplorer_Grace_Hopper_grave.jpg"
    }
]
  };
    return (
        <main className="min-h-screen relative overflow-hidden pt-28 bg-gradient-to-br from-indigo-100 via-pink-100 to-yellow-100">

        {/* Animation du fond*/}
            <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob top-10 left-20"></div>
            <div className="absolute w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000 top-64 left-72"></div>
            <div className="absolute w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000 top-32 left-1/2"></div>
        {/* Fin de l'animation du fond*/}
    
      </div>
            <h1 className="text-4xl font-extrabold text-gray-900 leading-tight tracking-wide text-center">Grace Hopper, une vie dédiée au progrès informatique</h1>
            <div className="flex flex-col relative my-5 after:content-[''] after:bg-[#e17b77] after:absolute after:left-[calc(50%-2px)] after:w-1 after:h-full ">
                
        {graceData.timeline.map((data, index) => {
            return <TimelineItem data={data} index={index} key={index}/>
        })
      
    }
    </div>
        </main>
    )
}