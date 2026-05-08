import React from 'react'
import ProjectGrid from './ProjectGrid'
import { motion } from "framer-motion";
function Work() {
    return (
        <div className='my-18 md:my-20 px-2 md:px-5 max-w-6xl mx-auto'>

            <motion.h2
                style={{ fontFamily: "Instrument Serif" }}
                className="text-5xl sm:text-6xl md:text-7xl mt-7 text-primary font-[600] [word-spacing:-0.1em] text-center md:text-left"

            >
                My Work 🔥
            </motion.h2>
            <ProjectGrid />

        </div>
    )
}

export default Work