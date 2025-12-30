import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import CircularText from '../components/CircularText'
import '../App.css'

function HomePage() {
  const titleRef = useRef(null)
  const h1Ref = useRef(null)

  useEffect(() => {
    if (titleRef.current && window.anime) {
      window.anime({
        targets: titleRef.current,
        opacity: [0, 1],
        translateY: [-50, 0],
        duration: 2500,
        easing: 'easeOutExpo'
      })
    }

    // Typing animation for h1
    const fullText = "Hello, I'm Chloe!"
    let typingAnimation = null
    if (h1Ref.current && window.anime) {
      h1Ref.current.textContent = ''
      
      typingAnimation = window.anime({
        targets: { progress: 0 },
        progress: [0, fullText.length],
        duration: 8000,
        easing: 'linear',
        round: 1,
        update: function(anim) {
          const charCount = Math.round(anim.progress)
          if (h1Ref.current) {
            h1Ref.current.textContent = fullText.substring(0, charCount)
          }
        },
        delay: 300
      })
    }

    // Cleanup animation on unmount
    return () => {
      if (typingAnimation) {
        typingAnimation.pause()
      }
    }
  }, [])

  const clickMeRef = useRef(null)
  const circularTextRef = useRef(null)

  useEffect(() => {
    if (titleRef.current && window.anime) {
      window.anime({
        targets: titleRef.current,
        opacity: [0, 1],
        translateY: [-50, 0],
        duration: 2500,
        easing: 'easeOutExpo'
      })
    }

    if (clickMeRef.current && window.anime) {
      window.anime({
        targets: clickMeRef.current,
        opacity: [0, 1],
        duration: 2500,
        easing: 'easeOutExpo',
        delay: 600
      })
    }

    if (circularTextRef.current && window.anime) {
      window.anime({
        targets: circularTextRef.current,
        opacity: [0, 1],
        duration: 2500,
        easing: 'easeOutExpo',
        delay: 500
      })
    }

    // Typing animation for h1
    const fullText = "Hello, I'm Chloe!"
    let typingAnimation = null
    if (h1Ref.current && window.anime) {
      h1Ref.current.textContent = ''
      
      typingAnimation = window.anime({
        targets: { progress: 0 },
        progress: [0, fullText.length],
        duration: 8000,
        easing: 'linear',
        round: 1,
        update: function(anim) {
          const charCount = Math.round(anim.progress)
          if (h1Ref.current) {
            h1Ref.current.textContent = fullText.substring(0, charCount)
          }
        },
        delay: 500
      })
    }

    // Cleanup animation on unmount
    return () => {
      if (typingAnimation) {
        typingAnimation.pause()
      }
    }
  }, [])

  return (
    <>
      <div className="w-screen h-screen overflow-hidden bg-medium-light-red flex justify-center bottom-0">
        <div ref={clickMeRef} className='absolute flex left-1/4 top-1/3 -translate-x-1/2 -translate-y-1/2 font-[Jua]'>
          <h1 className='transform -rotate-40 w-50 text-3xl text-off-white'>Click me!</h1>
          <img className="-translate-x-3/4 " src="src/assets/Arrow1.svg" alt="Click Me Arrow" />
        </div>

        <div ref={titleRef} className="text-center">
          <h1 ref={h1Ref} className='text-off-white text-4xl font-[Kiwi_Maru] mt-8'></h1>
          <div className='w-48 h-1 bg-off-white mx-auto my-4'></div>
          <Link to="/projects" className="cursor-pointer">
            <img className="w-9/10 transform translate-y-1/3 hover:opacity-80 transition-opacity" src="src/assets/image 1.svg" alt="personalImage1"/>
          </Link>
        </div>

        {/* ============================== */}
        {/* =        Circular Text       = */}
        {/* ============================== */}
        <div ref={circularTextRef} className='absolute transform translate-y-1/10 text-off-white pointer-events-none'>
          <CircularText 
            words={[
              { text: 'Student', font: 'Inter', fontSize: '3xl' },
              { text: '•', font: 'Georgia', fontSize: '3xl' },
              { text: 'Front-End Developer', font: 'Inria Serif', fontSize: '4xl'},
              { text: '•', font: 'Georgia', fontSize: '3xl'},
              { text: 'Designer', font: 'Oooh Baby', fontSize: '4xl' },
              { text: '•', font: 'Georgia', fontSize: '3xl'},
              { text: 'Debugger', font: 'Oswald', fontSize: '4xl' },
              { text: '•', font: 'Georgia', fontSize: '3xl'},
              { text: 'Bug-Creator', font: 'Oooh Baby', fontSize: '3xl' },
              { text: '•', font: 'Georgia', fontSize: '3xl'},
            ]}
            radius={460}
            fontSize="4xl"
            textColor="text-off-white"
            animationDuration={40000}
            letterSpacing={1}/>
        </div>
      </div>
    </>
  )
}

export default HomePage
