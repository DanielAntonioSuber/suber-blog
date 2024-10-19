import { ReactElement } from 'react'
import Image from 'next/image'

function Home (): ReactElement {
  return (
    <div className='container mx-auto min-w-full'>
      <section className='p-5 rounded mt-10 text-center text-slate-50'>
        <h1 className='text-5xl mb-10'>Hola, soy Daniel Antonio Eugenio</h1>
        <h2 className='text-3xl mb-2'>Científico de Datos y Desarrollador Web</h2>
        <p className='text-base'>Ayudo a empresas a tomar decisiones basadas en datos y a crear soluciones web eficientes.</p>
      <a href='#contact' className='text-blue-500'>Contáctame</a>
      </section>
      <div className='flex flex-wrap justify-center gap-2 mt-5 mb-10'>
        <Image className='rounded border-2 border-indigo-500' quality={100} src='/code.png' width={500} height={300} alt='code' />
        <Image className='rounded border-2 border-indigo-500' quality={100} src='/graphics.png' width={500} height={300} alt='graphics' />
      </div>
      <figure className='flex justify-center bg-gradient-to-r from-indigo-950 to-fuchsia-950 rounded'>
        <div className='py-8 md:p-8 text-center space-y-4'>
          <blockquote>
            <p className='text-slate-50 text-lg font-medium'>
              "La mayoría de las personas sobrestiman lo que pueden hacer en un año y subestiman lo que puedes hacer en diez años"
            </p>
          </blockquote>
          <figcaption className='font-medium'>
            <div className='text-sky-500 dark:text-sky-200'>
              John C. Maxwell
            </div>
          </figcaption>
        </div>
      </figure>
      <section className='text-slate-300 mt-5 lg:px-40 md:px-5 mb-10'>
        <h2 className='text-5xl text-center'>Proyectos</h2>
        <p className='text-xl text-justify mt-5'>Durante los últimos años, he estado dedicado a la creación y desarrollo de proyectos web, tanto para empresas como para clientes particulares. En este tiempo, he trabajado en una amplia variedad de proyectos, abarcando desde sitios web corporativos hasta aplicaciones web más complejas, adaptándome a las necesidades específicas de cada cliente y proyecto.</p>
        <p className='text-xl text-justify mt-5'>Las tecnologías que más he utilizado en el desarrollo de estos proyectos incluyen principalmente JavaScript, con un enfoque particular en el uso de React. Esta biblioteca de JavaScript me ha permitido construir interfaces de usuario interactivas y dinámicas, ofreciendo experiencias de usuario fluidas y optimizadas.</p>
      </section>
      <figure className='flex justify-center bg-gradient-to-r from-indigo-950 to-fuchsia-950 rounded'>
        <h1 className='text-slate-500'>Vista de los proyectos</h1>
      </figure>
      <section className='text-slate-300 mt-5 lg:px-40 md:px-5 mb-10'>
        <h2 className='text-5xl text-center'>Competencias</h2>
        <p className='text-xl text-justify-center mt-5'>Soy una persona resiliente, enfocada a objetivos</p>
      </section>
    </div>
  )
}

export default Home
