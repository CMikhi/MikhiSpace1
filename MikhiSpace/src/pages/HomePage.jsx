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
    if (h1Ref.current && window.anime) {
      h1Ref.current.textContent = ''
      
      window.anime({
        targets: { progress: 0 },
        progress: [0, fullText.length],
        duration: 8000,
        easing: 'linear',
        round: 1,
        update: function(anim) {
          const charCount = Math.round(anim.progress)
          h1Ref.current.textContent = fullText.substring(0, charCount)
        },
        delay: 300
      })
    }
  }, [])

  return (
    <>
      <div className="w-screen h-screen overflow-hidden bg-medium-light-red flex justify-center bottom-0">

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
        <div className='absolute transform translate-y-1/10 text-off-white'>
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
