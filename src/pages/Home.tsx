import type { GraceProps } from "../App";

type HomeProps = {
  data: GraceProps;
};

export default function Home({ data }: HomeProps) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pt-48">
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* TEXTE */}
        <div>
          <h1 className="text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
            {data.name}
          </h1>

          <p className="text-lg text-gray-700 leading-relaxed text-justify">
            {data.description}
          </p>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center">
          <div className="relative">

            {/* Décor */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-red-200 rounded-full opacity-60 blur-2xl"></div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-200 rounded-full opacity-60 blur-2xl"></div>

            {/* Image */}
            <img
              src={data.img}
              alt={data.name}
              className="relative rounded-3xl shadow-2xl max-h-[520px] object-cover"
            />
          </div>
        </div>

      </section>
    </main>
  );
}
