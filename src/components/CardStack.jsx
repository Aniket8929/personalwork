import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import image1 from "../assets/image2.jpeg";
import image2 from "../assets/image1.jpeg";
import image3 from "../assets/image3.jpeg";
import image4 from "../assets/image4.avif";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";
import image7 from "../assets/image7.avif";

export default function CardStack() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const cards = [
        image5,
        image2,
        image4,
        image3,
        image7,
        image1,
        image6,
    ];

    const tags = [
        "@frontend",
        "@backend",
        "@ui/ux",
        "@traveller",
    ];

    const positions = [
        "top-2 left-2 sm:left-[4%] md:left-[12%]",
        "top-10 right-2 sm:right-[4%] md:right-[12%]",
        "bottom-10 left-2 sm:left-[15%]",
        "bottom-2 right-2 sm:right-[15%]",
    ];

    return (
        <div className="relative w-full overflow-hidden">

            {/* Floating Tags */}
            {tags.map((tag, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        delay: 0.8 + i * 0.1,
                        duration: 0.4,
                        ease: "easeOut",
                    }}
                    className={`
            absolute
            ${positions[i]}
            hidden sm:flex
            items-center justify-center
            px-4 py-2
            rounded-full
            bg-white/80
            border border-white/30
            shadow-md
            text-xs sm:text-sm
            font-medium
            text-black/70
            z-50
          `}
                >
                    {tag}
                </motion.div>
            ))}

            {/* Cards */}
            <div
                className="
          relative
          h-[220px]
          sm:h-[320px]
          flex items-center justify-center
        "
            >
                {cards.map((imgUrl, index) => {
                    const total = cards.length;

                    const spacing =
                        screenWidth < 640
                            ? 38
                            : screenWidth < 1024
                                ? 85
                                : 110;

                    const rotate =
                        (index - (total - 1) / 2) * 6;

                    const offset =
                        (index - (total - 1) / 2) * spacing;

                    return (
                        <motion.div
                            key={index}
                            initial={{
                                opacity: 0,
                                scale: 0.8,
                                x: 0,
                                rotate: 0,
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                x: offset,
                                rotate,
                            }}
                            transition={{
                                delay: index * 0.08,
                                duration: 0.5,
                                ease: "easeOut",
                            }}
                            whileHover={{
                                y: -10,
                                scale: 1.03,
                                transition: {
                                    duration: 0.2,
                                },
                            }}
                            className="
                absolute
                w-[80px]
                h-[120px]
                sm:w-[130px]
                sm:h-[190px]
                md:w-[160px]
                md:h-[220px]
                lg:w-[190px]
                lg:h-[260px]
                rounded-2xl
                sm:rounded-3xl
                border border-white/20
                bg-cover
                bg-center
                cursor-pointer
                shadow-md
                will-change-transform
              "
                            style={{
                                backgroundImage: `url(${imgUrl})`,
                                zIndex: index,
                            }}
                        />
                    );
                })}
            </div>
        </div>
    );
}