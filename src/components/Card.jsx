import React from 'react'

function Card({ image, title }) {
  return (
    <div style={{ width: "100%", height: "400px", backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center", }} className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer ">

      <div className="absolute inset-0 w-full h-full bg-black/30 opacity-0 
      group-hover:opacity-100 transition duration-300"></div>

      <h3 className="absolute bottom-4 left-4 text-[#d1833f] text-xl font-bold  transition duration-300">
        {title}
      </h3>

    </div>
  )
}

export default Card