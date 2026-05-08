import React from 'react'

function Slides() {

    const tools = [
        {
            name: "React",
            icon: "https://www.svgrepo.com/show/452092/react.svg"
        },
        {
            name: "Node.js",
            icon: "https://www.svgrepo.com/show/452075/node-js.svg"
        },
        {
            name: "MongoDB",
            icon: "https://www.svgrepo.com/show/331488/mongodb.svg"
        },
        {
            name: "Express.js",
            icon: "https://www.svgrepo.com/show/330398/express.svg"
        },
        {
            name: "JavaScript",
            icon: "https://www.svgrepo.com/show/353925/javascript.svg"
        },
        {
            name: "GitHub",
            icon: "https://www.svgrepo.com/show/475654/github-color.svg"
        },
        {
            name: "Git",
            icon: "https://www.svgrepo.com/show/452210/git.svg"
        },
        {
            name: "VS Code",
            icon: "https://www.svgrepo.com/show/452129/vs-code.svg"
        },
        {
            name: "Tailwind CSS",
            icon: "https://www.svgrepo.com/show/374118/tailwind.svg"
        },
        {
            name: "Postman",
            icon: "https://www.svgrepo.com/show/354202/postman-icon.svg"
        },
        {
            name: "Figma",
            icon: "https://www.svgrepo.com/show/448222/figma.svg"
        },
        {
            name: "ChatGPT",
            icon: "https://www.svgrepo.com/show/306500/openai.svg"
        },
        {
            name: "MS Excel",
            icon: "https://www.svgrepo.com/show/373589/excel.svg"
        },
    ]

    return (
        <div className='relative w-full overflow-hidden py-8 px-6'>
            <div className='absolute top-0 right-0 z-10 h-full w-30 bg-gradient-to-l from-[#FFF9E3] to-transparent'></div>

            <div className='absolute top-0 left-0 z-10 h-full w-30 bg-gradient-to-r from-[#FFF9E3] to-transparent'></div>

            <div className='flex items-center gap-10 animate-scroll whitespace-nowrap'>

                {[...tools, ...tools].map((tool, index) => (
                    <div
                        key={index}
                        className='flex items-center justify-center min-w-[90px]'
                    >
                        <img
                            src={tool.icon}
                            alt={tool.name}
                            className='w-14 h-14 object-contain hover:scale-110 transition duration-300'
                        />
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Slides