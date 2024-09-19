import Image from "next/image"

function Home() {
  return (
    <div className="container mx-auto min-w-full">
      <section className="p-5 rounded mt-10 text-center">
        <div className="text-slate-50">
          <h1 className="text-5xl mb-10">Hola, soy Daniel Antonio Eugenio</h1>
          <h2 className="text-3xl mb-2">Científico de Datos y Desarrollador Web</h2>
          <p className="text-base">Ayudo a empresas a tomar decisiones basadas en datos y a crear soluciones web eficientes.</p>
          <a href="#contact" className="btn">Contáctame</a>
        </div>
      </section>
      <div className="flex flex-wrap justify-center gap-2 mt-5 mb-10">
        <Image className="rounded border-2 border-indigo-500"  quality={100} src='/code.png' width={500} height={300} alt="code"/>
        <Image className="rounded border-2 border-indigo-500" quality={100} src='/graphics.png' width={500} height={300} alt="graphics"/>
      </div>
      <figure className="flex justify-center bg-gradient-to-r from-indigo-950 to-fuchsia-950 rounded">
        <div className="pt-8 md:p-8 text-center space-y-4">
          <blockquote>
            <p className="text-slate-50 text-lg font-medium">
              "La mayoría de las personas sobrestiman lo que pueden hacer en un año y subestiman lo que puedes hacer en diez años"
            </p>
          </blockquote>

          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-200">
              John C. Maxwell
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  )
}

export default Home
