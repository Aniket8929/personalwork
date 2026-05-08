import React from 'react'
import ProjectGrid from '../components/ProjectGrid'

function WorkPages() {
    return (
        <div className='min-h-screen'>

            <div className='my-20 md:my-20 px-2 md:px-5 max-w-6xl mx-auto'>
                <h2
                    style={{ fontFamily: "Instrument Serif" }}

                    className='text-5xl sm:text-6xl md:text-7xl text-primary font-[600] [word-spacing:-0.1em] text-center md:text-left'
                >
                    My Work 🔥
                </h2>

                <ProjectGrid />

            </div>

        </div>
    )
}

export default WorkPages