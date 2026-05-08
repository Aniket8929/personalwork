import { Ellipsis, X } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/image2.jpeg";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [conact, setContact] = useState(false);

  return (
    <>
      <nav
        className="fixed
  top-4
  left-1/2
  -translate-x-1/2
  mx-auto
  w-full
  max-w-[480px]
  z-20
  flex
  items-center
  justify-between
  p-2 px-2.5
  bg-white/50
  backdrop-blur-xl
  border border-gray-200
  shadow-lg
  rounded-full
        "
      >
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img
            src={logo}
            alt="profile"
            className="
              w-8 h-8
              rounded-full
              object-cover
              ring-2 ring-white/50
            "
          />
        </Link>

        <div
          className="
            hidden md:flex
            items-center gap-5
            text-sm text-black/70
          "
        >
          <Link
            to="/mywork"
            className="hover:text-black transition"
          >
            Work
          </Link>
          <Link
            to="/about"
            className="hover:text-black transition"
          >
            About
          </Link>
          <Link
            to="https://dinosaur.game/?utm_source=chatgpt.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition"
          >
            Play
          </Link>

          <a
            href="https://drive.google.com/file/d/1jdf8xUHKJ6IdJBONI8RjS9uG4solMA-w/view"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition"
          >
            Resume
          </a>
        </div>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=aniketkumarrai271@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="
            hidden md:inline-flex
            items-center justify-center
            px-4 py-1.5
            text-sm
            rounded-full
            bg-white/70
            hover:bg-white
            border border-gray-200
            shadow-sm
            transition
          "
        >
          Contact
        </a>
        <button
          onClick={() => setOpen(!open)}
          className="
            md:hidden
            flex items-center justify-center
            w-10 h-10
            bg-white/20
            backdrop-blur-xl
            border border-white/30
            rounded-full
            text-black
          "
        >
          {open ? <X size={18} /> : <Ellipsis size={18} />}
        </button>

        {open && (
          <div
            className="
              absolute top-[115%] left-0 z-50
              w-full
              rounded-3xl
              bg-white/80
              backdrop-blur-md
              border border-white/30
              shadow-lg
              overflow-hidden
              z-50
              block
              md:hidden
            "
          >
            <Link
              href="/mywork"
              className="
                block px-5 py-4
                text-sm text-black/70
                hover:bg-white/50
                hover:text-black
                transition
              "
            >
              Work
            </Link>

            <Link
              href="/about"
              className="
                block px-5 py-4
                text-sm text-black/70
                hover:bg-white/50
                hover:text-black
                transition
              "
            >
              About
            </Link>

            <a
              href="./playground"
              className="
                block px-5 py-4
                text-sm text-black/70
                hover:bg-white/50
                hover:text-black
                transition
              "
            >
              Play
            </a>

            <a
              href="#"
              className="
                block px-5 py-4

                text-sm text-black/70

                hover:bg-white/50
                hover:text-black

                transition
              "
            >
              Resume
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=aniketkumarrai271@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="
                block px-5 py-4
                text-sm text-black/70
                hover:bg-white/50
                hover:text-black
                transition
              "
            >
              Contact
            </a>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;