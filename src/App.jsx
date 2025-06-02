import React, { useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import "remixicon/fonts/remixicon.css"

function App() {

  const [ showContent, setShowContent ] = useState(false)
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10, 
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    })

    .to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function(){
        if(this.progress() >= .9){
          document.querySelector(".svg").remove();
          setShowContent(true)
          this.kill()
        }
      }
    })

  })

    useGSAP(() => {
      
      if(!showContent) return 

      gsap.to(".main ", {
        scale: 1,
        rotate: 0,
        duration: 2,
        delay: -1,
        ease: "Expo.easeInOut",

      })

      gsap.to(".sky ", {
        scale: 1.2,
        rotate: 0,
        duration: 2,
        delay: -.8,
        ease: "Expo.easeInOut",

      })

      gsap.to(".bg ", {
        scale: 1.2,
        rotate: 0,
        duration: 2,
        delay: -.8,
        ease: "Expo.easeInOut",

      })

      gsap.to(".character ", {
        scale: 1,
        x: "-50%",
        bottom: "-30%"  ,
        rotate: 0,
        duration: 2.3,
        delay: -.9,
        ease: "Expo.easeInOut",
      })

      gsap.to(".text ", {
        scale: 1,
        rotate: 0,
        duration: 2.3,
        delay: -.9,
        ease: "Expo.easeInOut",
      })

      const main = document.querySelector(".main")

      main?.addEventListener("mousemove", (e) => {
        const xMove = (e.clientX / innerWidth - 2.2) * 40 
        gsap.to(".imagesdiv .text", {
          x: `${xMove * 0.4}%`,
        })
        gsap.to(".sky", {
          x: `${xMove } %`,
        })
        gsap.to(".bg ", {
          x: `${xMove } %`,
        })
      }) 
    }, [showContent])

  return (
    <>
      <div className='svg flex items-center justify-center fixed top-0 left-0 w-full h-screen z-[100] overflow-hidden bg-[#000]  '>
          <svg viewBox='0 0 800 600' preserveAspectRatio='xMidYMid slice'>
            <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
            <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
          </svg>
      </div>

      { showContent && (
        <div className=" main w-full rotate-[-10deg] scale-[1.2] ">
          <div className=" landing overflow-hidden relative w-full h-screen bg-black ">
            <div className=" navbar absolute top-0 left-0 z-[10] w-full py-8 px-8 ">
              <div className='logo flex gap-7'>
                <div className="lines flex flex-col gap-1 py-2">
                  <div className="line w-15 h-2 bg-white"></div>
                  <div className="line w-8 h-2 bg-white"></div>
                  <div className="line w-5 h-2 bg-white"></div>
                </div>
                <h3 className='text-3xl leading-none text-white'>Rockstar</h3>
              </div>
            </div>
            
            <div className=" imagesdiv relative w-full h-screen overflow-hidden">
                <img className=" sky scale-[1.8] rotate-[-13deg] absolute top-0 left-0 w-full h-full object-cover" src="./sky.png" alt="#" />
                <img className=" bg scale-[1.8] rotate-[-18deg] absolute top-0 left-0 w-full h-full object-cover" src="./bg.png" alt="#" />

                <div className="text absolute text-white top-1 left-1/2 -translate-x-1/2 flex flex-col gap-1 scale-[1.2] rotate-[-5deg]">
                  <h1 className="text-[8rem] leading-none -ml-20 ">grand</h1>
                  <h1 className="text-[8rem] leading-none ml-20 ">theft</h1>
                  <h1 className="text-[8rem] leading-none -ml-20 ">auto</h1>
                </div>

                <img className=" character absolute -bottom-[90%] left-1/2 -translate-x-1/2 scale-[2.2] rotate-[-25deg] " src="./diva-bg-rm.png" alt="#" />

              <div className='btmbar w-full text-white absolute bottom-0 left-0 py-12 px-10  bg-gradient-to-t from-black to-transparent '>

              <div className='flex gap-4 items-center'>
                <i className="ri-arrow-down-line"></i>
                <h3 className='scrolldown  text-xl '> Scroll Down </h3>
              </div>

              <img className='absolute h-[55px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src="./ps5.png" alt="" />


            </div>
            </div>
            
          </div>

          <div className='w-full h-screen bg-black flex  items-center justify-center px-10 bg-black'>
            <div className=' cntnr w-full h-[80%]  flex text-white'>
              <div className='l-img w-1/2 relative h-full'>
                <img className='scale-[0.7] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' src="./crouch.png" alt="" />
              </div>
              <div className='r-img w-[33%] mt-20 '>
                <h1 className="text-4xl"> Still Running </h1>
                <h1 className="text-4xl"> Not Hunting </h1>
                <p className='mt-8'> 
                   The world is designed to be Rockstar’s largest and most immersive yet,
                   with vibrant urban environments, 
                </p>

                    <p className='mt-6'>   wetlands teeming with wildlife (including alligators),
                      and a wide array of activities like mini-golf, pool, 

                      fishing, basketball, kayaking, scuba diving, and dirt bike racing
                    </p>
                    <button className="bg-yellow-500 px-4 py-4 text-2xl text-black mt-6">Download Now</button>
              </div>
            </div>
            </div>
          
        </div>
      ) }



    </>
  )
}

export default App