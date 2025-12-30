
function ProjectsPage() {
  return (
    <div className="w-screen h-screen bg-off-white flex justify-between">
      <div>
        <h2>Who am I?</h2>
        <div className="flex">
          <h1 className="mr-2 text-3xl">Chloe!</h1>
          <h3 className="mt-2">(Or Mikhi online)</h3>
        </div>
        <div className='w-full h-1 bg-dark-red my-4'></div>
        
      </div>
      <div className="relative ml-auto">
        <div className='w-150 h-165 bg-medium-light-red ml-4 my-4 rounded-xl transform -rotate-5 flex items-center justify-center'>
          <img className='w-9/10 absolute ml-4 transform rotate-5' src='src/assets/CrumpledPaper.svg' alt='Crumpled Paper'/>
        </div>
        <div className="absolute right-30 transform -rotate-5 ">
          <h1>Wanna yap?</h1>
          <h1 className="ml-2">Contact me here!</h1>
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage
