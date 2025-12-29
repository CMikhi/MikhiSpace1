import { useEffect, useRef } from 'react'
import CircularText from './components/CircularText';
import './App.css'

function App() {
  const titleRef = useRef(null)

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
  }, [])

  return (
    <>
      <div className="w-screen h-screen overflow-hidden bg-medium-light-red flex justify-center items-center bottom-0">

        <div ref={titleRef} className="text-center">
          <h1 className='text-off-white text-3xl'>hello, Im Chloe</h1>
          <div className='w-48 h-1 bg-off-white mx-auto my-4'></div>
          <img className="w-9/10 transform translate-y-2/8" src="src/assets/image 1.svg" alt="personalImage1"/>

          

        </div>
        <div className='absolute transform translate-y-2/8 text-off-white'>
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

export default App
