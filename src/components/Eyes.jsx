import React, { useEffect, useState } from 'react'

function Eyes() {

  const [rotate, setRotate] = useState(0)

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2
      let deltaY = mouseY - window.innerHeight / 2

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI)
      setRotate(angle - 180)
    })
  })

  return (
    <div className='eyes w-full h-screen overflow-hidden'>
      <div data-scroll data-scroll-speed="-.7" className="bg-red-200 relative w-full h-full bg-center bg-cover bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')]">
        <div className="flex  absolute gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">

          <div className='w-[25vh] h-[25vh] bg-zinc-100 rounded-full flex items-center justify-center'>
            <div className='bg-zinc-900 w-2/3 h-2/3 rounded-full relative items-center justify-center'>
              <div style={{ transform: ` rotate(${rotate}deg)` }} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-7 ">
                <div className='bg-zinc-100 rounded-full h-7 w-7'></div>
              </div>
            </div>
          </div>
          <div className='w-[25vh] h-[25vh] bg-zinc-100 rounded-full flex items-center justify-center'>
            <div className='bg-zinc-900 w-2/3 h-2/3 rounded-full relative items-center justify-center'>
              <div style={{ transform: ` rotate(${rotate}deg)` }} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-7 ">
                <div className='bg-zinc-100 rounded-full h-7 w-7'></div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Eyes