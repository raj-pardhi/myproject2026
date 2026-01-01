"use client"
import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

  gsap.registerPlugin(ScrollTrigger);


const Whoweare = () => {
  const youTextRef = useRef(null)
  const canTextRef = useRef(null)
  const movingFirstRef = useRef(null)
  const movingSecondRef = useRef(null)
  const movingThirdRef = useRef(null)
  const movingForthRef = useRef(null)
  const movingFiveRef = useRef(null)
  const movingSixRef = useRef(null)
  const movingSevenRef = useRef(null)


  // Single timeline for all animations
  const tlRef = useRef(null)
  const currentAnimation = useRef(null)

  useEffect(() => {

    const movingFirst = movingFirstRef.current
    const movingSecond = movingSecondRef.current
    const movingThird = movingThirdRef.current
    const movingForth = movingForthRef.current
    const movingFive = movingFiveRef.current
    const youText = youTextRef.current
    const canText = canTextRef.current
    const movingSix = movingSixRef.current
    const movingSeven = movingSevenRef.current

    // Create a single timeline instance
    tlRef.current = gsap.timeline({ paused: true })

    // Animation configurations
    const animations = {
      first: () => {
        tlRef.current.clear()
        tlRef.current
          .to(youText, {
            x: -200,
            duration: 1,
            ease: "power2.out",
          }, "X")
          .to(canText, {
            x: -500,
            duration: 1,
            ease: "power2.out",
          }, "X")
          .to(".HELP", {
            x: 260,
            duration: 1,
            ease: "power2.out",
          }, "X")
          .to(".THE", {
            x: 520,
            duration: 1,
            ease: "power2.out",
          }, "X")
          .to(".WITH", {
            x: 770,
            duration: 1,
            ease: "power2.out",
          }, "X")
          .to(".NOW", {
            x: 100,
            duration: 1,
            ease: "power2.out",
          }, "X")
          .to(".STEP", {
            x: 100,
            duration: 1,
            ease: "power2.out",
          }, "X")
          .to(".RIGHT", {
            x: 100,
            duration: 1,
            ease: "power2.out",
          }, "X")
      },
      second: () => {
        tlRef.current.clear()
        tlRef.current
          .to(".HELP", {
            x: 260,
            duration: 1,
            ease: "power2.out",
          }, "Y")
          .to(".THE", {
            x: 520,
            duration: 1,
            ease: "power2.out",
          }, "Y")
          .to(".WITH", {
            x: 770,
            duration: 1,
            ease: "power2.out",
          }, "Y")
          .to(".NOW", {
            x: 600,
            duration: 1,
            ease: "power2.out",
          }, "Y")
          .to(".STEP", {
            x: 420,
            duration: 1,
            ease: "power2.out",
          }, "Y")
          .to(".RIGHT", {
            x: 220,
            duration: 1,
            ease: "power2.out",
          }, "Y")
          .to(youText, {
            x: -200,
            duration: 1,
            ease: "power2.out",
          }, "Y")
          .to(canText, {
            x: -500,
            duration: 1,
            ease: "power2.out",
          }, "Y")
      },
      third: () => {
        tlRef.current.clear()
        tlRef.current
          .to(".HELP", {
            x: 260,
            duration: 1,
            ease: "power2.out",
          }, "Z")
          .to(".THE", {
            x: 520,
            duration: 1,
            ease: "power2.out",
          }, "Z")
          .to(".WITH", {
            x: 770,
            duration: 1,
            ease: "power2.out",
          }, "Z")
          .to(".NOW", {
            x: 600,
            duration: 1,
            ease: "power2.out",
          }, "Z")
          .to(".STEP", {
            x: 420,
            duration: 1,
            ease: "power2.out",
          }, "Z")
          .to(".RIGHT", {
            x: 220,
            duration: 1,
            ease: "power2.out",
          }, "Z")
          .to(youText, {
            x: -200,
            duration: 1,
            ease: "power2.out",
          }, "Z")
          .to(canText, {
            x: -500,
            duration: 1,
            ease: "power2.out",
          }, "Z")
      },
      fourth: () => {
        tlRef.current.clear()
        tlRef.current
          .to(".NOW", {
            x: 570,
            duration: 1,
            ease: "power2.out",
          }, "F")
          .to(".STEP", {
            x: 400,
            duration: 1,
            ease: "power2.out",
          }, "F")
          .to(".RIGHT", {
            x: 200,
            duration: 1,
            ease: "power2.out",
          }, "F")
      },
      five: () => {
        tlRef.current.clear()
        tlRef.current
          .to(".THE2", {
            x: 520,
            duration: 1,
            ease: "power2.out",
          }, "R")
          .to(".EMOTIONAL", {
            x: 270,
            duration: 1,
            ease: "power2.out",
          }, "R")

      },
      six: () => {
        tlRef.current.clear()
        tlRef.current
          .to(".THE2", {
            x: 520,
            duration: 1,
            ease: "power2.out",
          }, "R1")
          .to(".EMOTIONAL", {
            x: 270,
            duration: 1,
            ease: "power2.out",
          }, "R1")
          .to(".TELL", {
            x: 100,
            duration: 1,
            ease: "power2.out",
          }, "R1")
          .to(".STORIES", {
            x: 100,
            duration: 1,
            ease: "power2.out",
          }, "R1")
      },

      seven: () => {
        tlRef.current.clear()
        tlRef.current
          .to(".TELL", {
            x: 580,
            duration: 1,
            ease: "power2.out",
          }, "RW")
          .to(".STORIES", {
            x: 300,
            duration: 1,
            ease: "power2.out",
          }, "RW")
          .to(".and", {
            x: -900,
            duration: 1,
            ease: "power2.out",
          }, "RW")

          .to(".REMEMBER", {
            x: -700,
            duration: 1,
            ease: "power2.out",
          }, "RW")
      }
    }

    // Single function to handle all mouse enters
    const handleMouseEnter = (animationType) => {
      if (currentAnimation.current === animationType) return

      // Kill any existing animations smoothly
      gsap.killTweensOf([youText, canText, ".HELP", ".THE", ".WITH", ".NOW", ".STEP", ".RIGHT", ".THE2", ".EMOTIONAL", ".IMPACT", ".TELL", ".STORIES", ".and", ".REMEMBER"])

      currentAnimation.current = animationType
      animations[animationType]()
      tlRef.current.restart()
    }

    // Single function to handle all mouse leaves
    const handleMouseLeave = () => {
      currentAnimation.current = null
      // Smoothly return all elements to original position
      gsap.to([youText, canText, ".HELP", ".THE", ".WITH", ".NOW", ".STEP", ".RIGHT", ".THE2", ".EMOTIONAL", ".IMPACT", ".TELL", ".STORIES", ".and", ".REMEMBER"], {
        x: 0,
        duration: 0.8,
        ease: "power2.out",
        overwrite: true
      })
    }

    // Add event listeners
    if (movingFirst) {
      movingFirst.addEventListener('mouseenter', () => handleMouseEnter('first'))
      movingFirst.addEventListener('mouseleave', handleMouseLeave)
    }

    if (movingSecond) {
      movingSecond.addEventListener('mouseenter', () => handleMouseEnter('second'))
      movingSecond.addEventListener('mouseleave', handleMouseLeave)
    }

    if (movingThird) {
      movingThird.addEventListener('mouseenter', () => handleMouseEnter('third'))
      movingThird.addEventListener('mouseleave', handleMouseLeave)
    }

    if (movingForth) {
      movingForth.addEventListener('mouseenter', () => handleMouseEnter('fourth'))
      movingForth.addEventListener('mouseleave', handleMouseLeave)
    }

    if (movingFive) {
      movingFive.addEventListener('mouseenter', () => handleMouseEnter('five'))
      movingFive.addEventListener('mouseleave', handleMouseLeave)
    }
    if (movingSix) {
      movingSix.addEventListener('mouseenter', () => handleMouseEnter('six'))
      movingSix.addEventListener('mouseleave', handleMouseLeave)
    }

    if (movingSeven) {
      movingSeven.addEventListener('mouseenter', () => handleMouseEnter('seven'))
      movingSeven.addEventListener('mouseleave', handleMouseLeave)
    }

    // Cleanup
    return () => {
      gsap.killTweensOf([youText, canText, ".HELP", ".THE", ".WITH", ".NOW", ".STEP", ".RIGHT", ".THE2", ".EMOTIONAL", ".IMPACT", ".TELL", ".STORIES", ".and", ".REMEMBER"])

      if (movingFirst) {
        movingFirst.removeEventListener('mouseenter', () => handleMouseEnter('first'))
        movingFirst.removeEventListener('mouseleave', handleMouseLeave)
      }

      if (movingSecond) {
        movingSecond.removeEventListener('mouseenter', () => handleMouseEnter('second'))
        movingSecond.removeEventListener('mouseleave', handleMouseLeave)
      }

      if (movingThird) {
        movingThird.removeEventListener('mouseenter', () => handleMouseEnter('third'))
        movingThird.removeEventListener('mouseleave', handleMouseLeave)
      }

      if (movingForth) {
        movingForth.removeEventListener('mouseenter', () => handleMouseEnter('fourth'))
        movingForth.removeEventListener('mouseleave', handleMouseLeave)
      }

      if (movingFive) {
        movingFive.removeEventListener('mouseenter', () => handleMouseEnter('five'))
        movingFive.removeEventListener('mouseleave', handleMouseLeave)
      }

      if (movingSix) {
        movingSix.removeEventListener('mouseenter', () => handleMouseEnter('six'))
        movingSix.removeEventListener('mouseleave', handleMouseLeave)
      }

      if (movingSeven) {
        movingSeven.removeEventListener('mouseenter', () => handleMouseEnter('seven'))
        movingSeven.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [])

  return (
    <div className='w-full text-black font-[OTBrut] pt-[1vw] pb-[1vw] bg-white'>
      <div ref={movingFirstRef} className='Moving-first w-full h-[110px] flex items-center justify-between cursor-pointer'>
        <h1 className='WITH text-[6.5vw]'>WITH</h1>
        <h1 className='THE text-[6.5vw]'>THE</h1>
        <h1 className='HELP text-[6.5vw]'>HELP</h1>
        <h1 className=' text-[6.5vw]'>OF</h1>
      </div>

      <div ref={movingSecondRef} className='Moving-second w-full h-[110px] flex items-center justify-between cursor-pointer'>
        <h1 className='text-[6.5vw]'>TECHNOLOGY,</h1>
        <h1 ref={youTextRef} className='text-[6.5vw]'>YOU</h1>
        <h1 ref={canTextRef} className='text-[6.5vw]'>CAN</h1>
      </div>

      <div ref={movingThirdRef} className='Moving-third w-full h-[110px] flex items-center justify-between cursor-pointer'>
        <h1 className='NOW text-[6.5vw]'>NOW</h1>
        <h1 className='STEP text-[6.5vw]'>STEP</h1>
        <h1 className='RIGHT text-[6.5vw]'>RIGHT</h1>
        <h1 className='INTO text-[6.5vw]'>INTO</h1>
      </div>

      <div ref={movingForthRef} className='Moving-forth w-full h-[110px] mb-[5vw] flex items-center justify-between cursor-pointer'>
        <h1 className='text-[6.5vw]'>THE STORIES.</h1>
      </div>

      <div ref={movingFiveRef} className='Moving-fifth w-full h-[110px] flex items-center justify-between'>
        <h1 className='THE2 text-[6.5vw]'>THE</h1>
        <h1 className='EMOTIONAL text-[6.5vw]'>EMOTIONAL</h1>
        <h1 className='IMPACT text-[6.5vw]'>IMPACT</h1>
      </div>

      <div ref={movingSixRef} className='Moving-six w-full h-[110px] mb-[5vw] flex items-center gap-6'>
        <h1 className='text-[6.5vw]'>IS</h1>
        <h1 className='text-[6.5vw]'>OFF</h1>
        <h1 className='text-[6.5vw]'>THE</h1>
        <h1 className='text-[6.5vw]'>SCALE.</h1>
      </div>

      <div ref={movingSevenRef} className='Moving-seven w-full h-[110px] flex items-center justify-between'>
        <h1 className='TELL text-[6.5vw]'>TELL</h1>
        <h1 className='STORIES text-[6.5vw]'>STORIES</h1>
        <h1 className='text-[6.5vw]'>PEOPLE</h1>
      </div>

      <div className='Moving-eight w-full h-[110px] flex items-center justify-between'>
        <h1 className='text-[6.5vw]'>LOVE, SHARE</h1>
        <h1 className='and text-[6.5vw]'>&</h1>
      </div>

      <div className='Moving-nine w-full h-[110px] flex items-center justify-end'>
        <h1 className='REMEMBER text-[6.5vw]'>REMEMBER.</h1>
      </div>
    </div>
  )
}

export default Whoweare