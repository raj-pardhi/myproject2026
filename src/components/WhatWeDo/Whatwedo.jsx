"use client"

import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import React, { useEffect } from 'react'

gsap.registerPlugin(ScrollTrigger);


const Whatwedo = () => {

  useEffect(() => {


    const isDesktop = window.innerWidth >= 768;

    let tl = gsap.timeline()


    tl.fromTo(".containerReveal img", {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
      duration: 7
    },

      {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        duration: 7,

        scrollTrigger: {
          trigger: ".containerReveal",
          start: "top 50%",
          end: "top 30%",
          scrub: 2
        }
      }


    )


    if (isDesktop) {
      gsap.from(".weBring", {
        duration: 1,
        scrollTrigger: {
          trigger: ".weBring",
          start: "top top",
          end: "+=2050",
          scrub: 2,
          pin: true,
        }
      })


      gsap.set(".strategy", { y: "100%" })
      gsap.set(".Collatoral", { y: "100%" })
      gsap.set(".Packaging", { y: "100%" })
      gsap.set(".Website", { y: "100%" })


      // Identity से Strategy में transition (forner-Img2 trigger)
      let tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: ".forner-Img2",
          start: "top top",
          end: "top 30%",
          scrub: 2,
        }
      })

      tl1.to(".Identity", { y: "-100%", duration: 1 }, 0)
      tl1.to(".strategy", { y: "0%", duration: 1 }, 0)

      // Strategy से Collateral में transition (forner-Img4 trigger)
      let tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".forner-Img4",
          start: "top top",
          end: "top 30%",
          scrub: 2,
        }
      })

      tl2.to(".strategy", { y: "-100%", duration: 1 }, 0)
      tl2.to(".Collatoral", { y: "0%", duration: 1 }, 0)

      // Collateral से Packaging में transition (forner-Img6 trigger)
      let tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: ".forner-Img6",
          start: "top top",
          end: "top 30%",
          scrub: 2,
        }
      })

      tl3.to(".Collatoral", { y: "-100%", duration: 1 }, 0)
      tl3.to(".Packaging", { y: "0%", duration: 1 }, 0)

      // Packaging से Website में transition (forner-Img8 trigger)
      let tl4 = gsap.timeline({
        scrollTrigger: {
          trigger: ".forner-Img8",
          start: "top top",
          end: "top 30%",
          scrub: 2,
        }
      })

      tl4.to(".Packaging", { y: "-100%", duration: 1 }, 0)
      tl4.to(".Website", { y: "0%", duration: 1 }, 0)
    } else {
      gsap.set(".strategy", { y: "100%" })
      gsap.set(".Collatoral", { y: "100%" })
      gsap.set(".Packaging", { y: "100%" })
      gsap.set(".Website", { y: "100%" })

      let mobileTl = gsap.timeline({ repeat: -1 })

      // Identity to Strategy
      mobileTl.to(".Identity", { y: "-100%", duration: 1.5, ease: "power2.inOut" }, 0)
      mobileTl.to(".strategy", { y: "0%", duration: 1.5, ease: "power2.inOut" }, 0)
      mobileTl.to({}, { duration: 1 }) // pause

      // Strategy to Collateral
      mobileTl.to(".strategy", { y: "-100%", duration: 1.5, ease: "power2.inOut" })
      mobileTl.to(".Collatoral", { y: "0%", duration: 1.5, ease: "power2.inOut" }, "<")
      mobileTl.to({}, { duration: 1 }) // pause

      // Collateral to Packaging
      mobileTl.to(".Collatoral", { y: "-100%", duration: 1.5, ease: "power2.inOut" })
      mobileTl.to(".Packaging", { y: "0%", duration: 1.5, ease: "power2.inOut" }, "<")
      mobileTl.to({}, { duration: 1 }) // pause

      // Packaging to Website
      mobileTl.to(".Packaging", { y: "-100%", duration: 1.5, ease: "power2.inOut" })
      mobileTl.to(".Website", { y: "0%", duration: 1.5, ease: "power2.inOut" }, "<")
      mobileTl.to({}, { duration: 1 }) // pause

      // Website back to Identity (loop completion)
      mobileTl.to(".Website", { y: "-100%", duration: 1.5, ease: "power2.inOut" })
      mobileTl.to(".Identity", { y: "0%", duration: 1.5, ease: "power2.inOut" }, "<")
      mobileTl.to({}, { duration: 1 })
    }

    if (isDesktop) {
      gsap.from(".forner-Img1 img", {
        scale: 1.2,
        duration: 4,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".forner-Img1",
          start: "top 80%",
          end: "top 30%",
          scrub: 2,
        }
      })

      gsap.from(".forner-Img2 img", {
        y: "50%",
        opacity: 0,
        duration: 6,
        scrollTrigger: {
          trigger: ".forner-Img2",
          start: "top 70%",
          end: "top 50%",
          scrub: 2,
        }
      })


      gsap.from(".forner-Img3 img", {
        y: "50%",
        opacity: 0,
        duration: 6,
        scrollTrigger: {
          trigger: ".forner-Img3",
          start: "top 70%",
          end: "top 50%",
          scrub: 2,
        }
      })


      gsap.from(".forner-Img4 img", {
        y: "50%",
        opacity: 0,
        duration: 6,
        scrollTrigger: {
          trigger: ".forner-Img4",
          start: "top 70%",
          end: "top 50%",
          scrub: 2,
        }
      })

      gsap.from(".forner-Img5 img", {
        y: "50%",
        opacity: 0,
        duration: 6,
        scrollTrigger: {
          trigger: ".forner-Img5",
          start: "top 70%",
          end: "top 50%",
          scrub: 2,
        }
      })

      gsap.from(".forner-Img6 img", {
        y: "50%",
        opacity: 0,
        duration: 6,
        scrollTrigger: {
          trigger: ".forner-Img6",
          start: "top 70%",
          end: "top 50%",
          scrub: 2,
        }
      })


      gsap.from(".forner-Img7 img", {
        y: "50%",
        opacity: 0,
        duration: 6,
        scrollTrigger: {
          trigger: ".forner-Img7",
          start: "top 70%",
          end: "top 50%",
          scrub: 2,
        }
      })


      gsap.from(".forner-Img8 img", {
        y: "50%",
        opacity: 0,
        duration: 6,
        scrollTrigger: {
          trigger: ".forner-Img8",
          start: "top 70%",
          end: "top 50%",
          scrub: 2,
        }
      })
    }
    else {
      gsap.from(".forner-Img1 img", {
        scale: 1.2,
        duration: 4,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".forner-Img1",
          start: "top 80%",
          end: "top 30%",
          scrub: 2,
        }
      })

      gsap.from(".forner-Img2 img", {
        y: "50%",
        opacity: 0,
        duration: 6,
        scrollTrigger: {
          trigger: ".forner-Img1",
          start: "top 70%",
          end: "top 50%",
          scrub: 2,
        }
      })


      gsap.from(".forner-Img3 img", {
        y: "50%",
        opacity: 0,
        duration: 6,
        scrollTrigger: {
          trigger: ".forner-Img2",
          start: "top 70%",
          end: "top 50%",
          scrub: 2,
        }
      })


      gsap.from(".forner-Img4 img", {
        y: "50%",
        opacity: 0,
        duration: 6,
        scrollTrigger: {
          trigger: ".forner-Img2",
          start: "top 70%",
          end: "top 50%",
          scrub: 2,
        }
      })

      gsap.from(".forner-Img5 img", {
        y: "50%",
        opacity: 0,
        duration: 6,
        scrollTrigger: {
          trigger: ".forner-Img3",
          start: "top 70%",
          end: "top 50%",
          scrub: 2,
        }
      })

      gsap.from(".forner-Img6 img", {
        y: "50%",
        opacity: 0,
        duration: 6,
        scrollTrigger: {
          trigger: ".forner-Img3",
          start: "top 70%",
          end: "top 50%",
          scrub: 2,
        }
      })


      gsap.from(".forner-Img7 img", {
        y: "50%",
        opacity: 0,
        duration: 6,
        scrollTrigger: {
          trigger: ".forner-Img4",
          start: "top 70%",
          end: "top 50%",
          scrub: 2,
        }
      })


      gsap.from(".forner-Img8 img", {
        y: "50%",
        opacity: 0,
        duration: 6,
        scrollTrigger: {
          trigger: ".forner-Img4",
          start: "top 70%",
          end: "top 50%",
          scrub: 2,
        }
      })
    }


  }, [])



  return (
    <div className='w-full text-black   bg-[#ecece4]'>

      <div className='containerReveal w-full  flex xl:pt-[8rem] xl:pb-[5rem] pt-[10rem] pb-[5rem]   justify-center '>
        <div className=' w-full flex items-center flex-col justify-center  '>

          <h1 className='xl:text-[3.5vmax] text-[2.3vmax] uppercase font-[clash] leading-9'>Forner is a full-service studio</h1>
          <h3 className='xl:text-[2.5vmax] text-[2.1vmax] font-[bigdaily]'>creating brands people love to look at,</h3>
          <div className='flex mb-[1vw] items-center xl:gap-[0.6vw] gap-[2vw] mt-[1vw]'>
            <img className='w-[14vmax] h-[17vmax] xl:w-[19vmax] xl:h-[22vmax] object-cover' src="/assets/images/38.jpg" alt="" />

            <img className='w-[14vmax] h-[17vmax] xl:w-[19vmax] xl:h-[22vmax] object-cover' src="/assets/images/36.jpg" alt="" />

          </div>

          <h3 className='xl:text-[2.5vmax] text-[2.1vmax] font-[bigdaily] '>listen to and live with.</h3>

        </div>
      </div>



      <div className='block'>
        <div className='pt-[5rem] pb-[12rem]'>
          <div className='xl:flex xl:flex-row xl:flex-wrap flex flex-col'>
            <div className='xl:w-[50%] w-full relative '>
              <div className='forner-Img1 overflow-hidden relative'>
                <img src="/assets/images/1.webp" alt="" />
              </div>
            </div>

            <div className='xl:w-[50%] w-full xl:pr-[5rem] xl:pl-[1rem] pt-[10rem] pl-[2rem] mb-[2rem] flex  xl:flex xl:items-end items-start justify-start xl:justify-end'>

              <div className='weBring relative '>
                <div className='pt-[2rem]'>
                  <h2 className='text-[#CACAB0] flex flex-col text-[3.3vmax] leading-[1]'>

                    <span>We bring</span>

                    <span>brands to life</span>

                  </h2>
                  <div className='flex relative text-[3.3vmax] w-[30vw] gap-3'>
                    <h2 className='text-[#CACAB0]'>through </h2>

                    <div className='relative  w-[20vw]'>
                      <div className='overflow-hidden'>
                        <h3 className='Identity'>Identity</h3>

                      </div>

                      <div className='absolute left-0 top-0 overflow-hidden '>
                        <h3 className='strategy'>Strategy</h3>

                      </div>

                      <div className='absolute left-0 top-0 overflow-hidden '>
                        <h3 className='Collatoral'>Collatoral</h3>

                      </div>


                      <div className='absolute left-0 top-0 overflow-hidden '>
                        <h3 className='Packaging'>Packaging</h3>

                      </div>

                      <div className='absolute left-0 top-0 overflow-hidden '>
                        <h3 className='Website'>Website</h3>

                      </div>
                    </div>


                  </div>
                </div>
              </div>

            </div>

          </div>


          <div className='w-full '>
            <div className='w-full flex  '>
              <div className='w-[5%] xl:w-[50%] h-full'></div>

              <div className='forner-Img2 xl:w-[50%] w-[95%]'>
                <img className='object-cover w-[35vw] xl:w-[15vw]' src="/assets/images/2-22-23_Dr_Rogers_M6890_copy_2sm.webp" alt="" />
              </div>
            </div>


            <div className='w-full flex xl:mb-0 mb-14'>
              <div className='forner-Img3 xl:w-[50%] w-[100%] flex  justify-end  '>
                <img className='object-cover xl:w-[30vw] w-[260px]' src="/assets/images/Newspaper_1.gif" alt="" />
              </div>


              <div className='xl:w-[50%]  w-[0%]'></div>

            </div>

            <div className='w-full flex xl:mb-0 mb-14'>
              <div className='forner-Img4 xl:w-[50%] w-[95%] flex  justify-start '>
                <img className='object-cover xl:w-[10vw] w-[50vw]' src="/assets/images/home3.webp" alt="" />
              </div>


              <div className='xl:w-[50%] w-[5%]'></div>

            </div>

            <div className='w-full flex'>
              <div className='forner-Img5 xl:w-[50%] w-[100%] flex  justify-end '>
                <img className='object-cover xl:w-[10vw] w-[50vw]' src="/assets/images/ps.KEE.001_ALL_1027_sm.webp" alt="" />
              </div>


              <div className='xl:w-[50%] w-[0%]'></div>

            </div>

            <div className='w-full flex '>
              <div className='forner-Img6 w-[50%] flex pr-[10svw]  justify-end '>
                <img className='object-cover w-[13w]' src="/assets/images/oomabox_copy_22.webp" alt="" />
              </div>


              <div className='w-[50%] '></div>

            </div>


            <div className='w-full xl:flex hidden'>
              <div className='forner-Img7 w-[50%] flex justify-start'>
                <img className='object-cover w-[18.1vw]' src="/assets/images/home4.webp" alt="" />
              </div>


              <div className='w-[50%] '></div>

            </div>


            <div className='w-full flex '>
              <div className='forner-Img8 xl:w-[50%] w-[97%] flex justify-end '>
                <img className='object-cover w-[56vw] xl:w-[32vw]' src="/assets/images/12345.webp" alt="" />
              </div>


              <div className='xl:w-[50%] w-[3%]'></div>

            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Whatwedo
