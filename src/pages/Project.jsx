import React from 'react'
import { useParams } from 'react-router-dom'
import { Projectdata } from '../lib/Constant'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

function Project() {

    const { id } = useParams()

    const project = Projectdata[id]

    return (
        <section className='min-h-screen max-w-6xl mx-auto pt-44 px-4 pb-20'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                <div>
                    <span className='text-sm uppercase tracking-[3px] text-black/50'>
                        Featured Project
                    </span>
                    <h1 className='text-5xl md:text-7xl font-semibold mt-3 tracking-tight'>
                        {project.name}
                    </h1>
                    <p className='text-[18px] leading-relaxed text-[#6E6E73] mt-6 w-full md:w-[90%]'>
                        “{project.description}”
                    </p>
                    <div className='flex items-center gap-4 mt-8'>
                        <a
                            href={project.github}
                            target='_blank'
                            className='flex items-center gap-2 px-5 py-3 rounded-full bg-black text-white hover:scale-105 duration-300'
                        >
                            <FaGithub size={18} />
                            Github
                        </a>
                        <a
                            href={project.live}
                            target='_blank'
                            className='flex items-center gap-2 px-5 py-3 rounded-full border border-black/20 hover:bg-black hover:text-white duration-300'
                        >
                            <FaExternalLinkAlt size={18} />
                            Live Demo
                        </a>

                    </div>

                </div>

                <div className='grid grid-cols-2 gap-6 items-end'>
                    <div className='border border-black/10 rounded-3xl p-6 bg-[#FAFAFA]'>
                        <h5 className='font-semibold uppercase text-sm text-black/50'>
                            Date
                        </h5>
                        <p className='text-2xl mt-3 font-medium'>
                            {project.date}
                        </p>
                    </div>
                    <div className='border border-black/10 rounded-3xl p-6 bg-[#FAFAFA]'>
                        <h5 className='font-semibold uppercase text-sm text-black/50 mb-4'>
                            Scope
                        </h5>
                        <span className='px-4 py-2 text-sm bg-black text-white rounded-full'>
                            {project.scopeOfWork}
                        </span>
                    </div>
                </div>
            </div>

            <div
                className="h-[300px] md:h-[550px] w-full mx-auto mt-16 rounded-[30px] overflow-hidden border border-black/10 shadow-xl"
                style={{
                    backgroundImage: `url('${project.image}')`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                }}
            />

            {/* TECH STACK */}
            <div className='mt-20'>

                <h3 className='text-3xl font-semibold'>
                    Tech Stack
                </h3>

                <div className='flex flex-wrap gap-4 mt-8'>

                    {project.tech.map((item, index) => (
                        <span
                            key={index}
                            className='px-5 py-3 rounded-full border border-black/10 bg-[#F5F5F7] hover:bg-black hover:text-white duration-300'
                        >
                            {item}
                        </span>
                    ))}

                </div>

            </div>

            <div className='mt-20'>
                <h3 className='text-3xl font-semibold'>
                    Key Features
                </h3>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-8'>
                    {project.features.map((feature, index) => (
                        <div
                            key={index}
                            className='p-6 rounded-3xl border border-black/10 bg-[#FAFAFA]'
                        >
                            <p className='text-lg font-medium'>
                                {feature}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default  Project