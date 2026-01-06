import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import '../styles/ProjectsPage.css'

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
  const navigate = useNavigate()
  const [cardsVisible, setCardsVisible] = useState(false)
  const projectsSectionRef = useRef(null)
  const projectsHeaderRef = useRef(null)
  const airplane1Ref = useRef(null)
  const airplane2Ref = useRef(null)
  const paper2Ref = useRef(null)
  const paper3Ref = useRef(null)
  
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

  // Scroll-triggered animations for projects section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCardsVisible(true)
          }
        })
      },
      { threshold: 0.2 }
    )

    if (projectsSectionRef.current) {
      observer.observe(projectsSectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Floating animations for decorative elements
  useEffect(() => {
    if (!window.anime) return

    const floatingAnims = []

    // Airplane 1 - gentle float
    if (airplane1Ref.current) {
      floatingAnims.push(
        window.anime({
          targets: airplane1Ref.current,
          translateY: [-15, 15],
          translateX: [-5, 5],
          rotate: [-3, 3],
          duration: 4000,
          easing: 'easeInOutSine',
          direction: 'alternate',
          loop: true,
        })
      )
    }

    // Airplane 2 - different timing
    if (airplane2Ref.current) {
      floatingAnims.push(
        window.anime({
          targets: airplane2Ref.current,
          translateY: [10, -10],
          translateX: [8, -8],
          rotate: [2, -2],
          duration: 5000,
          easing: 'easeInOutSine',
          direction: 'alternate',
          loop: true,
        })
      )
    }

    // Paper 2 - subtle drift
    if (paper2Ref.current) {
      floatingAnims.push(
        window.anime({
          targets: paper2Ref.current,
          translateY: [-8, 8],
          rotate: [-2, 2],
          duration: 3500,
          easing: 'easeInOutSine',
          direction: 'alternate',
          loop: true,
        })
      )
    }

    // Paper 3 - gentle sway
    if (paper3Ref.current) {
      floatingAnims.push(
        window.anime({
          targets: paper3Ref.current,
          translateY: [5, -5],
          translateX: [-3, 3],
          rotate: [1, -1],
          duration: 4500,
          easing: 'easeInOutSine',
          direction: 'alternate',
          loop: true,
        })
      )
    }

    // Projects header entrance animation
    if (projectsHeaderRef.current) {
      window.anime({
        targets: projectsHeaderRef.current,
        translateX: [-100, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutExpo',
        delay: 200,
      })
    }

    return () => floatingAnims.forEach(anim => anim?.pause())
  }, [])

  return (
    <div className="h-screen overflow-y-auto overflow-x-hidden">
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

          {/* Hobby Files - Clickable to navigate to hobbies page */}
          <img
            className="pt-3 absolute top-90 ml-20 cursor-pointer hover:scale-105 transition-transform duration-300 hover:drop-shadow-xl"
            src="src/assets/Hobbies File.svg"
            alt="Hobbies File"
            onClick={() => navigate('/hobbies')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && navigate('/hobbies')}
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

        {/* Projects section */}

      <div className="relative h-100 w-screen bg-medium-light-red pl-10 overflow-hidden"> 
        <div ref={projectsHeaderRef} style={{ opacity: 0 }}>
          <h1 
            className="pt-25 text-8xl font-[Keania_One] text-off-white animate-pulse-subtle"
            style={{ textShadow: '-8px 8px 0px rgba(0, 0, 0, 0.5)' }}
          >
            Projects?
          </h1>
          <h1 className="pt-10 text-2xl font-[Keania_One] text-off-white">I got a few</h1>
        </div>
      </div>

      <div 
        ref={projectsSectionRef}
        className='relative w-screen min-h-screen bg-medium-dark-red py-20 overflow-hidden'
      >
            
            {/* ====== DECORATIVE LAYER (doesn't block clicks) ====== */}
            <div className="absolute inset-0 pointer-events-none z-10">
              {/* Paper airplane decorations */}
              <img 
                ref={airplane1Ref}
                className="absolute top-10 left-0 max-w-[600px]" 
                src='src/assets/ProjectsPage/Airplane 1.svg'
                alt=""
              />
              <img 
                ref={airplane2Ref}
                className="absolute bottom-20 right-0 w-[40%] max-w-[500px]" 
                src='src/assets/ProjectsPage/Airplane 2.svg'
                alt=""
              />
                      {/* Decorative paper pieces */}
                      <img 
                      ref={paper2Ref}
                      className="absolute top-0 right-0 max-w-[400px] -mr-10 -mt-10" 
                      src='src/assets/ProjectsPage/Paper 2.svg'
                      alt=""
                      />
                      <img 
                        ref={paper3Ref}
                        className="absolute bottom-150 left-0 max-w-[350px]" 
                      src='src/assets/ProjectsPage/Paper 3.svg'
                      alt=""
                      />
                    </div>

                    {/* ====== PROJECT CARDS ZIGZAG CONTAINER ====== */}


            <div className="relative z-20 flex flex-col pt-40">


              <div className='flex gap-20 mx-auto '>

                {/* ShutterBug */}
                <div 
                  className={`card-wrapper -rotate-4 transition-all duration-700 ease-out ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                  style={{ transitionDelay: '0ms' }}
                >
                  <ProjectCard
                  index={0}
                  title="ShutterBug"
                  details="[insert details here]"
                  link="/project/shutterbug"
                  techIcons={[
                    { src: 'src/assets/ComponentPhotos/PythonBlock.svg', alt: 'Python', height: 10 },
                    { src: 'src/assets/ComponentPhotos/ReactNatBlock.svg', alt: 'React Native', height: 12 },
                  ]}
                  />
                </div>
                
                {/* COB Traffic */}
                <div 
                  className={`card-wrapper mt-35 rotate-3 transition-all duration-700 ease-out ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                  style={{ transitionDelay: '150ms' }}
                >
                  <ProjectCard
                  index={1}
                  title="COB Traffic"
                  details="[insert details here]"
                  link="/project/cob-traffic"
                  techIcons={[
                    { src: 'src/assets/ComponentPhotos/PythonBlock.svg', alt: 'Python', height: 10 },
                    { src: 'src/assets/ComponentPhotos/ReactNatBlock.svg', alt: 'React Native', height: 12 },
                  ]}
                  />
                </div>
                
                {/* Desktop Widgets */}
                <div 
                  className={`card-wrapper mt-70 -rotate-2 transition-all duration-700 ease-out ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                  style={{ transitionDelay: '300ms' }}
                >
                  <ProjectCard
                  index={2}
                  title="Desktop Widgets"
                  details="[insert details here]"
                  link="/project/desktop-widgets"
                  techIcons={[
                    { src: 'src/assets/ComponentPhotos/PythonBlock.svg', alt: 'Python', height: 10 },
                    { src: 'src/assets/ComponentPhotos/ElectronBlock.svg', alt: 'Electron', height: 10 },
                  ]}
                  />
                </div>
              </div>


              <div className='flex gap-20 mb-20 mx-auto'>
                <div 
                  className={`card-wrapper mt-55 rotate-2 transition-all duration-700 ease-out ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                  style={{ transitionDelay: '450ms' }}
                >
                  <ProjectCard
                  index={0}
                  title="AeroStream"
                  details="[insert details here]"
                  link="/project/aerostream"
                  techIcons={[
                    { src: 'src/assets/ComponentPhotos/PythonBlock.svg', alt: 'Python', height: 10 },
                    { src: 'src/assets/ComponentPhotos/ReactNatBlock.svg', alt: 'React Native', height: 12 },
                  ]}
                  />
                </div>
                
                <div 
                  className={`card-wrapper mt-20 -rotate-4 transition-all duration-700 ease-out ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                  style={{ transitionDelay: '600ms' }}
                >
                  <ProjectCard
                  index={1}
                  title="Cloud Board"
                  details="[insert details here]"
                  link="/project/cloud-board"
                  techIcons={[
                    { src: 'src/assets/ComponentPhotos/PythonBlock.svg', alt: 'Python', height: 10 },
                    { src: 'src/assets/ComponentPhotos/ReactNatBlock.svg', alt: 'React Native', height: 12 },
                  ]}
                  />
                </div>
                
                <div className='w-[400px] h-[480px]'>
                  
                </div>
              </div>
              
              
            </div>
            
      </div>
      
    </div>


  )
}

export default ProjectsPage
