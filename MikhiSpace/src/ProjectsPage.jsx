
import { useEffect, useRef } from 'react'

function ProjectsPage() {
  const whoAmIRef = useRef(null)
  const chloeRef = useRef(null)
  const mikhiRef = useRef(null)
  const bioRef = useRef(null)
  const paperRef = useRef(null)
  const personalImageRef = useRef(null)

  useEffect(() => {
    const animations = []

    // "Who am I?" typing animation
    const whoAmIText = "Who am I?"
    if (whoAmIRef.current && window.anime) {
      whoAmIRef.current.textContent = ''
      animations.push(window.anime({
        targets: { progress: 0 },
        progress: [0, whoAmIText.length],
        duration: 1500,
        easing: 'linear',
        round: 1,
        update: function(anim) {
          const charCount = Math.round(anim.progress)
          if (whoAmIRef.current) {
            whoAmIRef.current.textContent = whoAmIText.substring(0, charCount)
          }
        },
        delay: 300
      }))
    }

    // "Chloe!" typing animation
    const chloeText = "Chloe!"
    if (chloeRef.current && window.anime) {
      chloeRef.current.textContent = ''
      animations.push(window.anime({
        targets: { progress: 0 },
        progress: [0, chloeText.length],
        duration: 1200,
        easing: 'linear',
        round: 1,
        update: function(anim) {
          const charCount = Math.round(anim.progress)
          if (chloeRef.current) {
            chloeRef.current.textContent = chloeText.substring(0, charCount)
          }
        },
        delay: 800
      }))
    }

    // "(Or Mikhi online)" typing animation
    const mikhiText = "(Or Mikhi online)"
    if (mikhiRef.current && window.anime) {
      mikhiRef.current.textContent = ''
      animations.push(window.anime({
        targets: { progress: 0 },
        progress: [0, mikhiText.length],
        duration: 2000,
        easing: 'linear',
        round: 1,
        update: function(anim) {
          const charCount = Math.round(anim.progress)
          if (mikhiRef.current) {
            mikhiRef.current.textContent = mikhiText.substring(0, charCount)
          }
        },
        delay: 1000
      }))
    }

    // Bio typing animation
    const bioText = "Im an upcoming freshman at University of Arkansas studying Computer Science"
    if (bioRef.current && window.anime) {
      bioRef.current.textContent = ''
      animations.push(window.anime({
        targets: { progress: 0 },
        progress: [0, bioText.length],
        duration: 2000,
        easing: 'linear',
        round: 1,
        update: function(anim) {
          const charCount = Math.round(anim.progress)
          if (bioRef.current) {
            bioRef.current.textContent = bioText.substring(0, charCount)
          }
        },
        delay: 1500
      }))
    }

    // Floating animation for paper
    if (paperRef.current && window.anime) {
      animations.push(window.anime({
        targets: paperRef.current,
        translateY: [-10, 10],
        rotate: [-5, 5],
        duration: 3000,
        easing: 'easeInOutSine',
        direction: 'alternate',
        loop: true
      }))
    }

    // Floating animation for personal image (slightly offset timing)
    if (personalImageRef.current && window.anime) {
      animations.push(window.anime({
        targets: personalImageRef.current,
        translateY: [10, -10],
        rotate: [5, -5],
        duration: 3500,
        easing: 'easeInOutSine',
        direction: 'alternate',
        loop: true
      }))
    }

    // Cleanup animations on unmount
    return () => {
      animations.forEach(anim => anim && anim.pause())
    }
  }, [])

  return (
    <div className="min-h-screen overflow-y-auto">
      <div className="relative w-screen min-h-screen bg-off-white text-dark-red flex justify-between">
        {/* Design Elements (lines) */}
      <div className='w-3 h-15 left-40 bg-dark-red absolute'></div>
      <div className='w-3 h-35 left-140 bg-dark-red absolute'></div>


      <div className="mt-20 ">

        
        {/* Who am I text */}
        <div className='ml-25 w-150'>
          
        <h2 ref={whoAmIRef} className="font-[Keania_One] text-[30px]"></h2>
        <div className="flex font-[Keania_One] text-medium-dark-red">

        
        <h1 ref={chloeRef} className="mr-2 text-[50px]"></h1>
        <h3 ref={mikhiRef} className="mt-4 text-[35px]"></h3>
        </div>



        {/* Divider */}
        <div className='w-full h-1 bg-dark-red my-4'></div>

        {/* Bio text */}
        <h2 ref={bioRef} className="font-[Kdam_Thmor_Pro] text-2xl min-h-[65px]"></h2>
        </div>


        {/* Design Elements (lines) */}
        <div className=''>
          <div className='w-3 mt-10 h-40 left-40 bg-dark-red my-4 absolute'></div>
          <div className='w-3 mt-10 h-40 left-140 bg-dark-red absolute'></div>
        </div>
        


        {/* Hobby Files*/}
        {/* Figure out how to make this functional */}
        <img className="pt-3 absolute top-3/7 ml-20" src="src/assets/Hobbies File.svg" alt="Hobbies File"/>
      
      </div>
      

      

      <div className="relative mr-25 flex flex-col ">
        {/* Red Block BG */}
        <div className='z-10 w-150 h-160 mt-15 bg-medium-light-red rounded-xl transform -rotate-5 flex drop-shadow-xl/25'></div>
        <div className='z-20 w-3 h-40 left-1/2 bg-dark-red absolute top-0 '></div>

        {/* Floating image */}
        <div id="floatingItems" className='z-30 absolute left-0 w-full h-full'>
          {/* Paper photo */}
          <img ref={paperRef} className='w-134 left-10 mt-20 absolute ml-4 transform  drop-shadow-xl/25' src='src/assets/CrumpledPaper.svg' alt='Crumpled Paper'/>

          {/* Personal Image */}
          <img ref={personalImageRef} className="z-40 absolute transform left-10 drop-shadow-xl/25" src="src/assets/image 2.svg" alt="personalImage2" />
        </div>
        
        {/* Contact me memo */}
        <div className="z-20 absolute bottom-10 right-10 transform -rotate-5 text-2xl text-dark-red font-[Jua] ">
        <h1>Wanna yap?</h1>
        <h1 className="ml-2 ">Contact me here!</h1>
        </div>

      </div>
      
      </div>

      
    </div>
    
    )
}

export default ProjectsPage
