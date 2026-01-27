import Navbar from "../components/Navbar";
import type { GraceProps } from "../App";

type DataProps = Pick<GraceProps, "quotes">

export default function Quote({quotes}: DataProps) {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <h1 className="text-3xl text-center">Citations</h1>
        {quotes.map((e) => {
            return (
                <div>
                    <p>{e.quote}</p>
                    <p>{e.date}</p>
                </div>
            )
        })
            
        }
    </main>
    </>
  );
}