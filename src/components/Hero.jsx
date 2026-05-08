import React from 'react'
import Navbar from './ui/Navbar'
import CardStack from './CardStack'
import Slides from './Slides'
import { motion } from "framer-motion";
function Hero() {
    return (
        <div className='min-h-screen bg-primary flex flex-col items-center pt-20 '>
            <div className="text-center mt-4 px-4 sm:px-6">
                <motion.h1
                    style={{ fontFamily: "Instrument Serif" }}
                    className="text-4xl sm:text-5xl text-primary "
                >
                    <motion.span
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                        className="block"
                    >
                        Namaste I'm Aniket &
                    </motion.span>
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.7,
                            duration: 0.7,
                            ease: "easeOut",
                        }}
                        className="block"
                    >
                        Full Stack Developer ✨
                    </motion.span>
                </motion.h1>
            </div>
            <CardStack />
            <motion.button
                initial={{
                    opacity: 0,
                    y: 20,
                    scale: 0.9,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                }}
                transition={{
                    delay: 1.1,
                    duration: 0.5,
                    ease: "easeOut",
                }}
                whileHover={{
                    scale: 1.05,
                }}
                whileTap={{
                    scale: 0.97,
                }}
                className="btn-glass"
            >
                Know More
            </motion.button>
            <p className='text-xl text-[#0c0a0cb3]  mt-15 mb-10 font-bold' style={{ fontFamily: "Instrument Serif" }}> Tools which I use on a daily basis.</p>
            <Slides />
        </div>
    )
}

export default Hero