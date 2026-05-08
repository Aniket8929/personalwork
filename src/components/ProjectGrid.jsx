import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Card from "./Card";
import { Projectdata } from "../lib/Constant";

function ProjectGrid() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
            {Projectdata.map((item, index) => (
                <motion.div
                    key={index}


                >
                    <Link to={`/projects/${index}`}>
                        <Card
                            title={item.name}
                            image={item.image}
                        />
                    </Link>
                </motion.div>
            ))}
        </div>
    );
}

export default ProjectGrid;