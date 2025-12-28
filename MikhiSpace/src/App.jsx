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
      <div className="w-screen h-screen bg-medium-light-red flex justify-center items-center">
        <div ref={titleRef}>
          <h1 className='text-off-white text-5xl font-bold'>hello, Im Chloe</h1>
          <img className="w-7/8" src="src/assets/image 1.svg" alt="personalImage1"/>

          <CircularText 
              text="Student • Developer • Designer • Creator • " 
              radius={240}
              fontSize="4xl"
              textColor="text-white"
              animationDuration={40000}/>

        </div>
      </div>
      
    </>
  )
}

export default App
