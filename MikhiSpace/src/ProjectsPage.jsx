
import { useEffect, useRef } from 'react'

function ProjectsPage() {
  const whoAmIRef = useRef(null)
  const chloeRef = useRef(null)
  const mikhiRef = useRef(null)
  const bioRef = useRef(null)

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
        delay: 1500
      }))
    }

    // Bio typing animation
    const bioText = "Im an upcoming freshman at University of Arkansas studying Computer Science"
    if (bioRef.current && window.anime) {
      bioRef.current.textContent = ''
      animations.push(window.anime({
        targets: { progress: 0 },
        progress: [0, bioText.length],
        duration: 4000,
        easing: 'linear',
        round: 1,
        update: function(anim) {
          const charCount = Math.round(anim.progress)
          if (bioRef.current) {
            bioRef.current.textContent = bioText.substring(0, charCount)
          }
        },
        delay: 2500
      }))
    }

    // Cleanup animations on unmount
    return () => {
      animations.forEach(anim => anim && anim.pause())
    }
  }, [])

  return (
    <div>
        <div className="w-screen h-screen bg-off-white text-dark-red flex justify-between">
        <div className='w-3 h-15 left-40 bg-dark-red absolute'></div>
        <div className='w-3 h-35 left-140 bg-dark-red absolute'></div>
        <div className="ml-25 mt-20 w-150">
          
          <h2 ref={whoAmIRef} className="font-[Keania_One] text-[30px]"></h2>
          <div className="flex font-[Keania_One] text-medium-dark-red">
            <h1 ref={chloeRef} className="mr-2 text-[50px]"></h1>
            <h3 ref={mikhiRef} className="mt-4 text-[35px]"></h3>
          </div>
          <div className='w-full h-1 bg-dark-red my-4'></div>
          <h2 ref={bioRef} className="font-[Kdam_Thmor_Pro] text-2xl min-h-[65px]"></h2>
          <div className='w-3 mt-10 h-40 left-40 bg-dark-red my-4 absolute'></div>
          <div className='w-3 mt-10 h-40 left-140 bg-dark-red absolute'></div>
          
          <img className="pt-3 absolute top-3/7 left-20" src="src/assets/Hobbies File.svg" alt="Hobbies File"/>

        
        </div>
        

        

        <div className="relative mr-25 flex flex-col ">
          {/* <div>

            <div className='z-20 w-2 h-40  bg-dark-red absolute top-0 rotate-5'></div>
            
            <
          </div> */}
          <div className='w-150 h-160 mt-15 bg-medium-light-red rounded-xl transform -rotate-5 flex drop-shadow-xl/25'></div>
          <div className='w-3 h-40 left-1/2 bg-dark-red absolute top-0 '></div>
          <img className='w-134 left-10 mt-20 absolute ml-4 transform  drop-shadow-xl/25' src='src/assets/CrumpledPaper.svg' alt='Crumpled Paper'/>
          <img className="z-40 absolute transform left-10 drop-shadow-xl/25" src="src/assets/image 2.svg" alt="personalImage2" />
            
          
          <div className="absolute bottom-10 right-10 transform -rotate-5 text-2xl text-dark-red font-[Jua] ">
            <h1>Wanna yap?</h1>
            <h1 className="ml-2 ">Contact me here!</h1>
          </div>

        </div>
        
      </div>

      
    </div>
    
  )
}

export default ProjectsPage
