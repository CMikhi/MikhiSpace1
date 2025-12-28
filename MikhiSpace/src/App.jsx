import { useEffect, useRef } from 'react'

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
        <h1 ref={titleRef} className='text-off-white text-5xl font-bold'>hello, Im Chloe</h1>
      </div>
    </>
  )
}

export default App
