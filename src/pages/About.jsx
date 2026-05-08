import { Image } from 'lucide-react'
import React from 'react'
import aboutimage from '../assets/image2.jpeg'
function About() {
    return (
        <section className='bg-primary'>
            <div className='min-h-[70vh] md:min-h-screen flex items-end pb-20 justify-center text-center'>
                <h1 style={{ fontFamily: "Instrument Serif" }} className='text-5xl  md:text-8xl font-[600] uppercase text-primary'>Naam Toh <br /> suna Hoga</h1>
            </div>
            <div className="max-w-6xl mx-auto py-10">
                <div
                    className="
      grid
      grid-cols-1
      lg:grid-cols-3
      gap-5
      p-4
      sm:p-6
      bg-white/70
      backdrop-blur-xl
      border border-white/30
      rounded-3xl
      shadow-xl
    ">
                    <div className="
        col-span-1
        h-[260px]
        rounded-3xl
        overflow-hidden
        bg-cover
        bg-top
        bg-no-repeat
      "
                        style={{
                            backgroundImage: `url(${aboutimage})`,
                        }}
                    />
                    <div className="
        lg:col-span-2
        px-1
        sm:px-4
      "
                    >
                        <h3 className='text-3xl font-bold tracking-tight md:text-4xl'>
                            Hi, I'm <span className='text-primary'>Aniket</span>   A passionate Full Stack Developer building modern, responsive, and user-friendly web applications.
                        </h3>
                        <div className="flex flex-wrap gap-3 mt-6 justify-center lg:justify-start">
                            {[
                                "React.js", "Node.js", "Express.js",
                                "MongoDB", "Tailwind CSS",
                                "Redux", "REST APIs", "Git"
                            ].map((tech) => (
                                <span
                                    key={tech}
                                    className="px-4 py-2 text-sm font-medium transition-all duration-300
                 bg-white/40 backdrop-blur-md border border-white/20 
                 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5
                 text-gray-800 cursor-default"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}


export default About