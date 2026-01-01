'use client'
import React, { useRef, useEffect } from 'react'
import Script from 'next/script'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GridAnimation = () => {
    const mainRef = useRef(null)
    const scriptsLoadedCount = useRef(0)
    const totalScripts = 4

    // Utils functions
    const preloadImages = (selector = 'img') => {
        return new Promise((resolve) => {
            if (typeof window !== 'undefined' && window.imagesLoaded) {
                window.imagesLoaded(document.querySelectorAll(selector), { background: true }, resolve);
            } else {
                resolve();
            }
        });
    };

    // Initialize animations
    const initializeAnimations = () => {
        console.log('Initializing animations...');
        
        if (typeof window === 'undefined' || !window.gsap || !window.ScrollTrigger || !window.Lenis) {
            console.log('Missing libraries:', {
                gsap: !!window.gsap,
                ScrollTrigger: !!window.ScrollTrigger,
                Lenis: !!window.Lenis,
                imagesLoaded: !!window.imagesLoaded
            });
            return;
        }

        const { gsap, ScrollTrigger, Lenis } = window;
        
        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);
        console.log('ScrollTrigger registered');

        // Define a variable that will store the Lenis smooth scrolling object
        let lenis;

        // Function to initialize Lenis for smooth scrolling
        const initSmoothScrolling = () => {
            console.log('Initializing smooth scrolling...');
            // Instantiate the Lenis object with specified properties
            lenis = new Lenis({
                lerp: 0.1,
                smoothWheel: true
            });

            // Update ScrollTrigger each time the user scrolls
            lenis.on('scroll', () => ScrollTrigger.update());

            // Define a function to run at each animation frame
            const scrollFn = (time) => {
                lenis.raf(time);
                requestAnimationFrame(scrollFn);
            };
            requestAnimationFrame(scrollFn);
        };

        // All elements with class .grid
        const grids = document.querySelectorAll('.grid');
        console.log('Found grids:', grids.length);

        // Function to apply scroll-triggered animations to a given gallery
        const applyAnimation = (grid) => {
            console.log('Applying animation to grid:', grid);
            
            // Child elements of grid
            const gridWrap = grid.querySelector('.grid-wrap');
            const gridItems = grid.querySelectorAll('.grid__item');
            const gridItemsInner = [...gridItems].map(item => item.querySelector('.grid__item-inner'));
            
            console.log('Grid elements found:', {
                gridWrap: !!gridWrap,
                gridItems: gridItems.length,
                gridItemsInner: gridItemsInner.length
            });

            if (!gridWrap || gridItems.length === 0) {
                console.error('Grid elements not found');
                return;
            }

            // Set some CSS related style values
            grid.style.setProperty('--grid-width', '160%');
            grid.style.setProperty('--perspective', '2000px');
            grid.style.setProperty('--grid-inner-scale', '0.5');
            grid.style.setProperty('--grid-item-ratio', '0.8');
            grid.style.setProperty('--grid-columns', '6');
            grid.style.setProperty('--grid-gap', '14vw');

            // Define GSAP timeline with ScrollTrigger
            const timeline = gsap.timeline({
                defaults: { ease: 'none' },
                scrollTrigger: {
                    trigger: gridWrap,
                    start: 'top bottom+=5%',
                    end: 'bottom top-=5%',
                    scrub: true,
                    onUpdate: (self) => {
                        console.log('ScrollTrigger progress:', self.progress);
                    },
                    markers: false // Set to true for debugging
                }
            });

            timeline
                .set(gridWrap, {
                    rotationX: 20
                })
                .set(gridItems, {
                    z: () => gsap.utils.random(-3000, -1000)
                })
                .fromTo(gridItems, {
                    yPercent: () => gsap.utils.random(100, 1000),
                    rotationY: -45,
                    filter: 'brightness(200%)'
                }, {
                    ease: 'power2',
                    yPercent: () => gsap.utils.random(-1000, -100),
                    rotationY: 45,
                    filter: 'brightness(0%)'
                }, 0)
                .fromTo(gridWrap, {
                    rotationZ: -5,
                }, {
                    rotationX: -20,
                    rotationZ: 10,
                    scale: 1.2
                }, 0)
                .fromTo(gridItemsInner, {
                    scale: 2
                }, {
                    scale: 0.5
                }, 0);

            console.log('Timeline created');
        }

        // Apply animations to each grid
        const scroll = () => {
            grids.forEach((grid, index) => {
                console.log(`Applying animation to grid ${index}`);
                applyAnimation(grid);
            });
        }

        // Preload images, initialize smooth scrolling, apply scroll-triggered animations, and remove loading class from body
        preloadImages('.grid__item-inner').then(() => {
            console.log('Images preloaded');
            initSmoothScrolling();
            scroll();
            document.body.classList.remove('loading');
            console.log('Initialization complete');
        });
    }

    // Handle script loading
    const handleScriptLoad = () => {
        scriptsLoadedCount.current++;
        console.log(`Script loaded: ${scriptsLoadedCount.current}/${totalScripts}`);
        
        if (scriptsLoadedCount.current === totalScripts) {
            console.log('All scripts loaded, initializing...');
            setTimeout(initializeAnimations, 500);
        }
    }

    useEffect(() => {
        // Add loading class to body
        document.body.classList.add('loading');

        // Check if scripts are already loaded (in case of fast refresh)
        const checkScriptsLoaded = () => {
            if (window.gsap && window.ScrollTrigger && window.Lenis && window.imagesLoaded) {
                console.log('Scripts already loaded');
                setTimeout(initializeAnimations, 100);
            }
        };

        const timeoutId = setTimeout(checkScriptsLoaded, 1000);

        return () => {
            clearTimeout(timeoutId);
            // Cleanup on unmount
            if (typeof window !== 'undefined' && window.gsap) {
                window.gsap.killTweensOf('*');
                if (window.ScrollTrigger) {
                    window.ScrollTrigger.getAll().forEach(trigger => trigger.kill());
                }
            }
            document.body.classList.remove('loading');
        }
    }, [])

    return (
        <>
            {/* Load external scripts in proper order */}
            <Script
                src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"
                strategy="beforeInteractive"
                onLoad={handleScriptLoad}
                onError={() => console.error('Failed to load GSAP')}
            />
            <Script
                src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"
                strategy="beforeInteractive"
                onLoad={handleScriptLoad}
                onError={() => console.error('Failed to load ScrollTrigger')}
            />
            <Script
                src="https://cdn.jsdelivr.net/npm/@studio-freight/lenis@latest/dist/lenis.min.js"
                strategy="beforeInteractive"
                onLoad={handleScriptLoad}
                onError={() => console.error('Failed to load Lenis')}
            />
            <Script
                src="https://cdnjs.cloudflare.com/ajax/libs/jquery.imagesloaded/5.0.0/imagesloaded.pkgd.min.js"
                strategy="beforeInteractive"
                onLoad={handleScriptLoad}
                onError={() => console.error('Failed to load imagesLoaded')}
            />

            <main ref={mainRef}>
                <div className="intro">
                    {/* <h1 className="intro__title">
                        <span className="intro__title-pre">On-Scroll</span>
                        <span className="intro__title-sub">Perspective Grid Animations</span>
                    </h1>
                    <span className="intro__info">Scroll moderately to fully experience the animations</span> */}
                </div>

                <section className="content content--spacing">
                    <div className="grid grid--6">
                        <div className="grid-wrap">
                            <div className="grid__item">
                                <div className="grid__item-inner" style={{ backgroundImage: 'url(/assets/images/18.jpg)' }}></div>
                            </div>
                            <div className="grid__item">
                                <div className="grid__item-inner" style={{ backgroundImage: 'url(/assets/images/5.jpg)' }}></div>
                            </div>
                            <div className="grid__item">
                                <div className="grid__item-inner" style={{ backgroundImage: 'url(/assets/images/8.jpg)' }}></div>
                            </div>
                            <div className="grid__item">
                                <div className="grid__item-inner" style={{ backgroundImage: 'url(/assets/images/43.jpg)' }}></div>
                            </div>
                            <div className="grid__item">
                                <div className="grid__item-inner" style={{ backgroundImage: 'url(/assets/images/34.jpg)' }}></div>
                            </div>
                            <div className="grid__item">
                                <div className="grid__item-inner" style={{ backgroundImage: 'url(/assets/images/21.jpg)' }}></div>
                            </div>
                            <div className="grid__item">
                                <div className="grid__item-inner" style={{ backgroundImage: 'url(/assets/images/39.jpg)' }}></div>
                            </div>
                            <div className="grid__item">
                                <div className="grid__item-inner" style={{ backgroundImage: 'url(/assets/images/6.jpg)' }}></div>
                            </div>
                            <div className="grid__item">
                                <div className="grid__item-inner" style={{ backgroundImage: 'url(/assets/images/13.jpg)' }}></div>
                            </div>
                            <div className="grid__item">
                                <div className="grid__item-inner" style={{ backgroundImage: 'url(/assets/images/47.jpg)' }}></div>
                            </div>
                            <div className="grid__item">
                                <div className="grid__item-inner" style={{ backgroundImage: 'url(/assets/images/10.jpg)' }}></div>
                            </div>
                            <div className="grid__item">
                                <div className="grid__item-inner" style={{ backgroundImage: 'url(/assets/images/45.jpg)' }}></div>
                            </div>
                            <div className="grid__item">
                                <div className="grid__item-inner" style={{ backgroundImage: 'url(/assets/images/27.jpg)' }}></div>
                            </div>
                            <div className="grid__item">
                                <div className="grid__item-inner" style={{ backgroundImage: 'url(/assets/images/31.jpg)' }}></div>
                            </div>
                            <div className="grid__item">
                                <div className="grid__item-inner" style={{ backgroundImage: 'url(/assets/images/28.jpg)' }}></div>
                            </div>
                            <div className="grid__item">
                                <div className="grid__item-inner" style={{ backgroundImage: 'url(/assets/images/30.jpg)' }}></div>
                            </div>
                            <div className="grid__item">
                                <div className="grid__item-inner" style={{ backgroundImage: 'url(/assets/images/36.jpg)' }}></div>
                            </div>
                            <div className="grid__item">
                                <div className="grid__item-inner" style={{ backgroundImage: 'url(/assets/images/14.jpg)' }}></div>
                            </div>
                            <div className="grid__item">
                                <div className="grid__item-inner" style={{ backgroundImage: 'url(/assets/images/23.jpg)' }}></div>
                            </div>
                            <div className="grid__item">
                                <div className="grid__item-inner" style={{ backgroundImage: 'url(/assets/images/35.jpg)' }}></div>
                            </div>
                            <div className="grid__item">
                                <div className="grid__item-inner" style={{ backgroundImage: 'url(/assets/images/19.jpg)' }}></div>
                            </div>
                        </div>
                    </div>
                    <h3 className="content__title">Seasons shift, <br />moments flow.</h3>
                </section>
            </main>
        </>
    )
}

export default GridAnimation