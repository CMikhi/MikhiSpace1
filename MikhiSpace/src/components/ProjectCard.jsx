// Project Card Component
function ProjectCard({ title, details, techIcons = [] }) {
  return (
    <div className='w-90 h-120 bg-off-white rounded-md flex flex-col drop-shadow-xl/25'>
      <div className='w-85 h-40 bg-dark-red rounded-md flex mx-auto mt-2'></div>
      <h1 className='text-medium-dark-red text-3xl font-[Keania_One] ml-5 mt-2'>{title}</h1>
      <h1 className='text-medium-dark-red text-xl font-[Kdam_Thmor_Pro] ml-5 mt-2'>{details}</h1>

      <div className='mt-40 flex ml-2 gap-2'>
        {techIcons.map((icon, index) => (
          <img 
            key={index}
            className={`h-${icon.height || 10} ${index % 2 === 0 ? '-rotate-5' : 'rotate-5'}`}
            src={icon.src}
            alt={icon.alt}
          />
        ))}
      </div>
    </div>
  )
}

export default ProjectCard
