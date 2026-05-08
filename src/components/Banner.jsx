import React from 'react'

function Banner() {
  return (
    <div className="w-full h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      >
        <source
          src="https://framerusercontent.com/assets/Ysf7ifFAkeHmj1r0OAcI9bMyGU.mp4"
          type="video/mp4"
        />
      </video>

    </div>
  )
}

export default Banner