"use client"
import React, { useEffect, useRef, useState } from 'react';
import { Grid3x3, Plus } from 'lucide-react';

const OurMethod = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);

  const cards = [
    {
      title: "INTUITION AWARE",
      description: "Action doesn't just respond - it anticipates instincts over inputs",
      img: "https://cdn.prod.website-files.com/689d9facb368b4f85d200675/689da5f1b0af85b789b4eab4_Patterns.webp"
    },
    {
      title: "CONTEXTUAL AWARENESS",
      description: "The more you explore, the smarter it becomes, shaped by its surround",
      img: "https://cdn.prod.website-files.com/689d9facb368b4f85d200675/689da5f11841159eabb9235e_Patterns-1.webp"
    },
    {
      title: "ADAPTIVE LEARNING",
      description: "Evolving intelligence that grows with every interaction",
      img: "https://cdn.prod.website-files.com/689d9facb368b4f85d200675/689da5f1ec16c10137c5ed76_Patterns-2.jpg"
    },
    {
      title: "PREDICTIVE ANALYSIS",
      description: "Anticipating needs before they arise",
      img: "https://cdn.prod.website-files.com/689d9facb368b4f85d200675/689da5f14c7a89450c7c0159_Patterns-3.jpg"
    },
    {
      title: "INTEGRATED SYSTEMS",
      description: "Seamlessly connected for optimal performance",
      img: "https://cdn.prod.website-files.com/689d9facb368b4f85d200675/689da5f13a7628e6dc97c43b_Patterns-5.webp"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const container = containerRef.current;
        const rect = container.getBoundingClientRect();
        const containerHeight = container.offsetHeight;
        const windowHeight = window.innerHeight;

        const scrollStart = 0;
        const scrollEnd = containerHeight - windowHeight;
        const currentScroll = -rect.top;

        const progress = Math.max(0, Math.min(1, (currentScroll - scrollStart) / scrollEnd));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCardMouseEnter = (e) => {
    const plusIcons = e.currentTarget.querySelectorAll('.plusIcon');
    plusIcons.forEach(icon => {
      icon.style.transform = 'rotate(360deg)';
      icon.style.transition = 'transform 1s ease-in-out';
    });
  };

  const handleCardMouseLeave = (e) => {
    const plusIcons = e.currentTarget.querySelectorAll('.plusIcon');
    plusIcons.forEach(icon => {
      icon.style.transform = 'rotate(0deg)';
      icon.style.transition = 'transform 1s ease-in-out';
    });
  };

  const rotationAngle = scrollProgress * 360 * 1.2;

  const getCardStyle = (index) => {
    const baseAngle = (360 / cards.length) * index;
    const currentAngle = baseAngle + rotationAngle;
    const normalizedAngle = ((currentAngle % 360) + 360) % 360;

    // Show cards only from right (340°) through center (90°) to left (170°)
    const isVisible =
      (normalizedAngle >= 340) || 
      (normalizedAngle >= 0 && normalizedAngle <= 170);

    if (!isVisible) {
      return {
        display: 'none'
      };
    }

    const radiusX = 950;
    const radiusY = -80; // Moderate upward movement

    const rad = (normalizedAngle * Math.PI) / 180;
    const x = Math.cos(rad) * radiusX;
    const y = Math.sin(rad) * radiusY;
    const z = Math.sin(rad) * 300; // Add depth dimension

    const rotateY = -(normalizedAngle - 90); // Rotate cards to face center

    const centerAngle = 90;
    let distanceFromCenter = Math.abs(normalizedAngle - centerAngle);
    if (distanceFromCenter > 180) {
      distanceFromCenter = 360 - distanceFromCenter;
    }

    let scale;
    if (distanceFromCenter < 20) {
      scale = 1.4;
    } else if (distanceFromCenter < 60) {
      scale = 1.4 - ((distanceFromCenter - 20) / 40) * 0.6;
    } else {
      scale = 0.8 - ((distanceFromCenter - 60) / 120) * 0.2;
    }

    // Opacity: full at center, fade quickly on left side
    let opacity;
    if (distanceFromCenter < 30) {
      opacity = 1;
    } else if (distanceFromCenter < 50) {
      opacity = 1 - ((distanceFromCenter - 30) / 20) * 0.7;
    } else {
      opacity = 0.3 - ((distanceFromCenter - 50) / 90) * 0.3;
    }

    // Blur: sharp at center, blur immediately after leaving center on left
    let blur;
    if (distanceFromCenter < 15) {
      blur = 0;
    } else if (distanceFromCenter < 40) {
      blur = ((distanceFromCenter - 15) / 25) * 12;
    } else {
      blur = 12 + ((distanceFromCenter - 40) / 100) * 8;
    }

    const zIndex = Math.floor(100 - distanceFromCenter);

    return {
      transform: `translate3d(${x}px, ${y}px, ${z}px) rotateY(${rotateY}deg) scale(${scale})`,
      opacity: opacity,
      filter: `blur(${blur}px)`,
      zIndex: zIndex,
      transition: 'transform 0.15s ease-out, opacity 0.15s ease-out, filter 0.15s ease-out'
    };
  };

  return (
    <div ref={containerRef} className='w-full h-[550vh] block bg-zinc-900'>
      <div className='sticky top-0 w-full h-screen flex items-center justify-center overflow-hidden' style={{ perspective: '2000px' }}>
        
        <div className='absolute z-[-10] pointer-events-none'>
          <img
            className='w-[800px] h-auto object-contain drop-shadow-2xl opacity-90'
            src="https://cdn.prod.website-files.com/689d9facb368b4f85d200675/689da5f182d82fe1233bfb06_axion-3d%201.webp"
            alt="Crystal"
          />
        </div>

        <div className='relative  w-full h-full flex items-center justify-center' style={{ transformStyle: 'preserve-3d' }}>
          {cards.map((card, index) => (
            <div
              key={index}
              className='absolute z-40'
              style={getCardStyle(index)}
              onMouseEnter={handleCardMouseEnter}
              onMouseLeave={handleCardMouseLeave}
            >
              <div className='w-[19vmax] flex flex-col items-center justify-between h-[25vmax]'>
                <div className='w-full flex text-[1.1vmax] justify-between'>
                  <Plus className='plusIcon text-[#545840]' />
                  <Plus className='plusIcon text-[#545840]' />
                </div>

                <div>
                  <div className='bg-gradient-to-br from-lime-100 to-lime-200 p-4 shadow-2xl w-[18vmax] h-[25vmax] flex flex-col'>
                    <div className='flex items-center mb-1 gap-5'>
                      <div className='text-4xl text-[#545840]'>
                        <Grid3x3 />
                      </div>
                      <div className='w-full h-[1px] bg-[#545840]'></div>
                    </div>
                    <div className='flex-1'>
                      <img src={card.img} alt="" className='w-full h-auto' />
                      <h3 className='text-zinc-900 font-bold text-xl mt-3 uppercase tracking-wide'>
                        {card.title}
                      </h3>
                      <p className='text-zinc-700 text-sm leading-relaxed'>
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className='w-full text-[1.1vmax] flex justify-between'>
                  <Plus className='plusIcon text-[#545840]' />
                  <Plus className='plusIcon text-[#545840]' />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurMethod;