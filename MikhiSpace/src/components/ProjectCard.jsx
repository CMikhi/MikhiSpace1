// Project Card Component
// Uses CSS custom property (--i) for staircase positioning
function ProjectCard({ title, details, techIcons = [], index = 0 }) {
  return (
    <div 
      className="project-card"
      style={{ '--i': index }}
    >
      {/* Card inner content */}
      <div className='w-full h-full bg-off-white rounded-md flex flex-col'>
        {/* Project image/preview area */}
        <div className='w-[95%] h-40 bg-dark-red rounded-md mx-auto mt-2'></div>
        
        {/* Project title */}
        <h1 className='text-medium-dark-red text-3xl font-[Keania_One] ml-5 mt-2'>{title}</h1>
        
        {/* Project details */}
        <p className='text-medium-dark-red text-lg font-[Kdam_Thmor_Pro] ml-5 mt-2'>{details}</p>

        {/* Tech stack icons */}
        <div className='mt-auto mb-4 flex ml-4 gap-2'>
          {techIcons.map((icon, i) => (
            <img 
              key={i}
              className={`h-${icon.height || 10} ${i % 2 === 0 ? '-rotate-5' : 'rotate-5'}`}
              src={icon.src}
              alt={icon.alt}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
