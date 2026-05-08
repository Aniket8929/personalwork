import React from 'react'
import { FaGithub, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Footer() {
    const [open, setOpen] = React.useState(false);
    return (
        <footer className='max-w-6xl mx-auto bg-secondary 
        pt-16 md:pt-25 pb-16 md:pb-20 
        px-5 md:px-10 mt-16 md:mt-20 
        rounded-tl-3xl md:rounded-tl-4xl rounded-tr-3xl md:rounded-tr-4xl'>

            <section className='flex flex-col md:flex-row 
            justify-between items-start  
            gap-8 md:gap-0'>

                <div className='flex flex-col gap-4 items-start'>
                    <h4 className='text-white 
                    text-2xl sm:text-4xl md:text-4xl font-bold '>
                        Ready To work with a <br />
                        <span className='text-secondary'>creative partner</span>
                    </h4>

                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=aniketkumarrai271@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer" 
                        className='btn-glass text-base md:text-xl mt-6 md:mt-8' onClick={() => setOpen(true)}>
                        contact now
                    </a>
                </div>

                {/* Icons */}
                <div className="flex gap-3 text-white 
                text-xl md:text-2xl">

                    {[{
                        href: "https://github.com/Aniket8929",
                        Icon: FaGithub
                    }, {
                        href: "https://www.instagram.com/jerryaniket_01",
                        Icon: FaInstagram
                    }, {
                        href: "https://www.linkedin.com/in/aniket-kumar-rai-b8523535b/",
                        Icon: FaLinkedin
                    }].map(({ href, Icon }, i) => (
                        <Link key={i} to={href}>
                            <div className="h-[45px] w-[45px] md:h-[50px] md:w-[50px]
                            flex items-center justify-center rounded-full
                            bg-white/15 backdrop-blur-md border border-white/20
                            shadow-md transition-all duration-300
                            hover:scale-110 hover:shadow-xl">
                                <Icon />
                            </div>
                        </Link>
                    ))}

                </div>
            </section>

            <div className='text-secondary text-sm md:text-[17px] font-medium mt-10 md:mt-13'>
                © {new Date().getFullYear()} Aniket Kumar.
            </div>
        </footer>
    )
}

export default Footer