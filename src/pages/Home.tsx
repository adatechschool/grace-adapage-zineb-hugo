import type { GraceProps} from "../App";

type HomeProps = Pick<GraceProps, "name" | "description" | "img">;
;

export default function Home({ name, description, img }: HomeProps) {
  return (
    <main className="min-h-screen pt-24 px-6 bg-gray-50">
      
      // 
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        // Description 
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            {name}
          </h1>

          <p className="text-lg text-gray-700 leading-relaxed">
            {description}
          </p>
        </div>

        // Image 
        <div className="flex justify-center">
          <img
            src={img}
            alt={name}
            className="rounded-xl shadow-xl max-h-[450px] object-cover"
          />
        </div>

      </section>
    </main>
  );
}
