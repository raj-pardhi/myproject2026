"use client"
import React, { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Whoweare from '../WHOWEARE/Whoweare';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

    gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const leftTextRef = useRef(null)
  const rightTextRef = useRef(null)
  const videoContainerRef = useRef(null)
  const timelineRef = useRef(null)
  const bosmanRef1 = useRef(null);
  const bosmanRef2 = useRef(null);

  // Check if device is mobile
  useEffect(() => {


    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Auto-trigger animation after component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExpanded(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  // GSAP Animation Effect
  useEffect(() => {
    // Create timeline for smooth animations
    const tl = gsap.timeline()
    timelineRef.current = tl

    if (isExpanded) {
      if (isMobile) {
        // Mobile expand animation - text moves to sides like desktop
        tl.to(leftTextRef.current, {
          x: '-40vw',
          opacity: 0.5,
          duration: 1,
          ease: "cubic-bezier(0.55,0.085,0.68,0.53)"
        })
          .to(rightTextRef.current, {
            x: '40vw',
            opacity: 0.5,
            duration: 1,
            ease: "cubic-bezier(0.55,0.085,0.68,0.53)"
          }, 0)
          .to(videoContainerRef.current, {
            width: '95vw',
            height: '95vh',
            borderRadius: '8px',
            duration: 1,
            ease: "cubic-bezier(0.55,0.085,0.68,0.53)"
          }, 0)
          .to(bosmanRef1.current, {
            y: 0,
            opacity: 1,
            duration: 0.6,
            skewY: 0,
            ease: "cubic-bezier(0.76, 0, 0.24, 1)"
          }, "U")
          .to(bosmanRef2.current, {
            y: 0,
            opacity: 1,
            duration: 0.6,
            skewY: 0,
            ease: "cubic-bezier(0.76, 0, 0.24, 1)"
          }, "U")
      } else {
        // Desktop expand animation
        tl.to(leftTextRef.current, {
          x: '-50vw',
          opacity: 0.5,
          duration: 1,
          ease: "cubic-bezier(0.55,0.085,0.68,0.53)"
        })
          .to(rightTextRef.current, {
            x: '50vw',
            opacity: 0.5,
            duration: 1,
            ease: "cubic-bezier(0.55,0.085,0.68,0.53)"
          }, 0)
          .to(videoContainerRef.current, {
            width: '96vmax',
            height: '48vmax',
            borderRadius: '0px',
            duration: 1,
            ease: "cubic-bezier(0.55,0.085,0.68,0.53)"
          }, 0)
          .to(bosmanRef1.current, {
            y: 0,
            opacity: 1,
            duration: 0.6,
            skewY: 0,
            ease: "cubic-bezier(0.76, 0, 0.24, 1)"
          }, "U")
          .to(bosmanRef2.current, {
            y: 0,
            opacity: 1,
            duration: 0.6,
            skewY: 0,
            ease: "cubic-bezier(0.76, 0, 0.24, 1)"
          }, "U")
      }
    } else {
      // Collapse animation
      if (isMobile) {
        tl.to(leftTextRef.current, {
          x: '0vw',
          opacity: 1,
          duration: 0.8,
          ease: "cubic-bezier(0.55,0.085,0.68,0.53)"
        })
          .to(rightTextRef.current, {
            x: '0vw',
            opacity: 1,
            duration: 0.8,
            ease: "cubic-bezier(0.55,0.085,0.68,0.53)"
          }, 0)
          .to(videoContainerRef.current, {
            width: '17vmax',
            height: '11vmax',
            borderRadius: '12px',
            duration: 0.8,
            ease: "cubic-bezier(0.55,0.085,0.68,0.53)"
          }, 0)
      } else {
        tl.to(leftTextRef.current, {
          x: '0vw',
          opacity: 1,
          duration: 0.8,
          ease: "cubic-bezier(0.55,0.085,0.68,0.53)"
        })
          .to(rightTextRef.current, {
            x: '0vw',
            opacity: 1,
            duration: 0.8,
            ease: "cubic-bezier(0.55,0.085,0.68,0.53)"
          }, 0)
          .to(videoContainerRef.current, {
            width: '17vmax',
            height: '11vmax',
            borderRadius: '12px',
            duration: 0.8,
            ease: "cubic-bezier(0.55,0.085,0.68,0.53)"
          }, 0)
      }

      tl.to(bosmanRef1.current, {
        y: "30%",
        opacity: 0,
        duration: 0.6,
        skewY: 5,
        ease: "cubic-bezier(0.76, 0, 0.24, 1)"
      }, "U")
        .to(bosmanRef2.current, {
          y: "30%",
          opacity: 0,
          duration: 0.6,
          skewY: 5,
          ease: "cubic-bezier(0.76, 0, 0.24, 1)"
        }, "U")
    }

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill()
      }
    }
  }, [isExpanded, isMobile])

  useEffect(() => {
    // Only apply scroll trigger animations on desktop
    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top top",
        end: '+=1800px',
        pin: true,
        scrub: true
      },
    })

    titleTl.fromTo(".bosamText",
      {
        y: "0%"
      },
      {
        // y: "-400%",
        y: window.innerWidth <= 768 ? "-1750%" : "-400%",
        duration: 2,
      }, "S")
      .fromTo(videoContainerRef.current, {
        scale: 1,
        rotate: 0,
        duration: 2
      },
        {
          scale: 0.4,
          rotate: "3deg",
          duration: 2
        }, "S")
      .fromTo(".whoweare", {
        opacity: 0,
        duration: 0.6,
        display: "none"
      },
        {
          opacity: 1,
          duration: 0.6,
          display: "block"
        })



  }, [])

  return (
    <div className='flavor-section flex items-center justify-center w-full min-h-screen overflow-hidden bg-black relative'>
      <div className='flex items-center gap-8 justify-center relative w-full'>
        {/* Left JENS text */}
        <h1
          ref={leftTextRef}
          className={`font-medium text-white absolute z-10 ${isMobile
              ? 'text-[20vw] md:text-[13.71vw]'
              : 'text-[13.71vw]'
            }`}
          style={isMobile ? {
            left: 'calc(50% - 65vw - 2rem - 10vw)',
            transformOrigin: 'center'
          } : {
            left: 'calc(50% - 27vmax - 4rem - 13.71vw)',
            transformOrigin: 'center'
          }}
        >
          JENS
        </h1>

        {/* Video container */}
        <div
          ref={videoContainerRef}
          className='videoDiv overflow-hidden rounded-xl relative z-20 cursor-pointer'
          style={isMobile ? {
            width: '17vmax',
            height: '11vmax'
          } : {
            width: '17vmax',
            height: '11vmax'
          }}
        >
          <video
            className="pointer-events-none rounded-xl w-full h-full object-cover"
            autoPlay
            muted
            loop
          >
            <source src="/assets/videos/hero.mp4" type="video/mp4" />
            {/* Fallback for demo purposes */}
            <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl md:text-2xl">
              Video Placeholder
            </div>
          </video>
        </div>

        {/* Right JENS text */}
        <h1
          ref={rightTextRef}
          className={`font-medium text-white absolute z-10 ${isMobile
              ? 'text-[20vw] md:text-[13.71vw]'
              : 'text-[13.71vw]'
            }`}
          style={isMobile ? {
            right: 'calc(50% - 65vw - 2rem - 10vw)',
            transformOrigin: 'center'
          } : {
            right: 'calc(50% - 27vmax - 4rem - 13.71vw)',
            transformOrigin: 'center'
          }}
        >
          JENS
        </h1>
      </div>

      {/* BOSMAN text - only animate on desktop */}
      <div className={`bosamText w-full flex items-center gap-4 md:gap-20 justify-center overflow-hidden absolute z-50 ${isMobile ? 'bottom-10 h-auto' : 'bottom-20 h-[12vw]'
        }`}>
        <h2
          ref={bosmanRef1}
          className={`opacity-0 font-medium ${isMobile
              ? 'text-[15vw] leading-[12vw]'
              : 'text-[13vw] leading-[11vw]'
            }`}
        >
          JENS
        </h2>
        <h2
          ref={bosmanRef2}
          className={`opacity-0 font-medium ${isMobile
              ? 'text-[15vw] leading-[12vw]'
              : 'text-[13vw] leading-[11vw]'
            }`}
        >
          BOSMAN
        </h2>
      </div>

      {/* Who we are section - only show on desktop after scroll */}
      <div className='whoweare absolute w-full max-h-[130vh] opacity-0 hidden'>
        <Whoweare />
      </div>

    </div>
  )
}

export default Hero