import { useEffect, useRef } from 'react'

// Animation configuration constants
const TYPING_ANIMATIONS = [
  { text: "Who am I?", refName: 'whoAmI', duration: 1500, delay: 300 },
  { text: "Chloe!", refName: 'chloe', duration: 1200, delay: 800 },
  { text: "(Or Mikhi online)", refName: 'mikhi', duration: 2000, delay: 1000 },
  { text: "Im an upcoming freshman at University of Arkansas studying Computer Science", refName: 'bio', duration: 2000, delay: 1500 },
]

const FLOATING_ANIMATIONS = [
  { refName: 'paper', translateY: [-10, 10], rotate: [-5, 5], duration: 3000 },
  { refName: 'personalImage', translateY: [10, -10], rotate: [5, -5], duration: 3500 },
]

// Helper function to create typing animation
const createTypingAnimation = (ref, text, duration, delay) => {
  if (!ref.current || !window.anime) return null
  
  ref.current.textContent = ''
  return window.anime({
    targets: { progress: 0 },
    progress: [0, text.length],
    duration,
    delay,
    easing: 'linear',
    round: 1,
    update: (anim) => {
      if (ref.current) {
        ref.current.textContent = text.substring(0, Math.round(anim.progress))
      }
    },
  })
}

// Helper function to create floating animation
const createFloatingAnimation = (ref, { translateY, rotate, duration }) => {
  if (!ref.current || !window.anime) return null
  
  return window.anime({
    targets: ref.current,
    translateY,
    rotate,
    duration,
    easing: 'easeInOutSine',
    direction: 'alternate',
    loop: true,
  })
}

function ProjectsPage() {
  const refs = {
    whoAmI: useRef(null),
    chloe: useRef(null),
    mikhi: useRef(null),
    bio: useRef(null),
    paper: useRef(null),
    personalImage: useRef(null),
  }

  useEffect(() => {
    const animations = []

    // Initialize typing animations
    TYPING_ANIMATIONS.forEach(({ text, refName, duration, delay }) => {
      const anim = createTypingAnimation(refs[refName], text, duration, delay)
      if (anim) animations.push(anim)
    })

    // Initialize floating animations
    FLOATING_ANIMATIONS.forEach(({ refName, ...config }) => {
      const anim = createFloatingAnimation(refs[refName], config)
      if (anim) animations.push(anim)
    })

    // Cleanup animations on unmount
    return () => animations.forEach(anim => anim?.pause())
  }, [])

  return (
    <div className="h-screen overflow-y-auto">
      <div className="relative w-screen min-h-screen bg-off-white text-dark-red flex justify-between">
        {/* Top design lines */}
        <div className="w-3 h-15 left-40 bg-dark-red absolute" />
        <div className="w-3 h-35 left-140 bg-dark-red absolute" />

        {/* Left content section */}
        <div className="mt-20">
          {/* Introduction text */}
          <div className="ml-25 w-150">
            <h2 ref={refs.whoAmI} className="font-[Keania_One] text-[30px]" />
            
            <div className="flex font-[Keania_One] text-medium-dark-red">
              <h1 ref={refs.chloe} className="mr-2 text-[50px]" />
              <h3 ref={refs.mikhi} className="mt-4 text-[35px]" />
            </div>

            {/* Divider */}
            <div className="w-full h-1 bg-dark-red my-4" />

            {/* Bio text */}
            <h2 ref={refs.bio} className="font-[Kdam_Thmor_Pro] text-2xl min-h-[65px]" />
          </div>

          {/* Middle design lines */}
          <div>
            <div className="w-3 mt-10 h-40 left-40 bg-dark-red my-4 absolute" />
            <div className="w-3 mt-10 h-40 left-140 bg-dark-red absolute" />
          </div>

          {/* Hobby Files - TODO: Make this functional */}
          <img
            className="pt-3 absolute top-90 ml-20"
            src="src/assets/Hobbies File.svg"
            alt="Hobbies File"
          />
        </div>

        {/* Right content section */}
        <div className="relative mr-25 flex flex-col">
          {/* Red Block BG */}
          <div className="z-10 w-150 h-160 mt-15 bg-medium-light-red rounded-xl transform -rotate-5 flex drop-shadow-xl/25" />
          <div className="z-20 w-3 h-40 left-1/2 bg-dark-red absolute top-0" />

          {/* Floating images */}
          <div id="floatingItems" className="z-30 absolute inset-0 pointer-events-none">

            <img
              ref={refs.paper}
              className="w-134 left-10 mt-20 absolute ml-4 transform drop-shadow-xl/25"
              src="src/assets/CrumpledPaper.svg"
              alt="Crumpled Paper"
            />
            <img
              ref={refs.personalImage}
              className="z-40 absolute transform left-10 drop-shadow-xl/25"
              src="src/assets/image 2.svg"
              alt="Personal Image"
            />
          </div>

          {/* Contact me memo */}
          <div className="z-20 absolute bottom-10 right-10 transform -rotate-5 text-2xl text-dark-red font-[Jua]">
            <h1>Wanna yap?</h1>
            <h1 className="ml-2">Contact me here!</h1>
          </div>
        </div>
      </div>

      {/* Bottom design line - Scrolling marquee */}
        <div className="w-screen h-20 bg-medium-dark-red overflow-hidden">
          <div 
            className="flex gap-[35px] items-center h-full pl-[35px]"
            style={{
              animation: 'marquee 50s linear infinite',
              width: 'max-content',
            }}
          >
            {/* Repeat icons 4 times to ensure full coverage */}
            {[...Array(4)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-[35px] items-center">
                <img src="src/assets/AppIcons/React.svg" alt="React" className="w-12 h-12 flex-shrink-0" />
                <img src="src/assets/AppIcons/Swift.svg" alt="Swift" className="w-12 h-12 flex-shrink-0" />
                <img src="src/assets/AppIcons/Tailwind.svg" alt="Tailwind" className="w-12 h-12 flex-shrink-0" />
                <img src="src/assets/AppIcons/VSCode.svg" alt="VS Code" className="w-12 h-12 flex-shrink-0" />
                <img src="src/assets/AppIcons/Next.svg" alt="Next.js" className="w-12 h-12 flex-shrink-0" />
                <img src="src/assets/AppIcons/Python.svg" alt="Python" className="w-12 h-12 flex-shrink-0" />
                <img src="src/assets/AppIcons/Blender.svg" alt="Blender" className="w-12 h-12 flex-shrink-0" />
                <img src="src/assets/AppIcons/AdobeIll.svg" alt="Adobe Illustrator" className="w-12 h-12 flex-shrink-0" />
                <img src="src/assets/AppIcons/Github.svg" alt="Github" className="w-12 h-12 flex-shrink-0" />
                <img src="src/assets/AppIcons/Figma.svg" alt="Figma" className="w-12 h-12 flex-shrink-0" />
              </div>
            ))}
          </div>
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}</style>
        </div>

      <div className="relative w-screen min-h-screen bg-medium-light-red"> 
        <div>
          <h1 
            className="pt-40 text-8xl font-[Keania_One] text-off-white"
            style={{ textShadow: '-8px 8px 0px rgba(0, 0, 0, 0.5)' }}
          >
            Projects?
          </h1>
          <h1 className="pt-40 text-2xl font-[Keania_One] text-off-white">I got a few</h1>
        </div>
      </div>
      <div className='w-screen min-h-screen bg-medium-dark-red flex justify-center items-center'>

      </div>
      
    </div>


  )
}

export default ProjectsPage
