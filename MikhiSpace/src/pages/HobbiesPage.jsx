import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/HobbiesPage.css'

const HOBBY_TABS = [
  { 
    id: 'science-olympiad', 
    label: 'Science Olympiad',
    title: 'Science\nOlympiad',
    images: [
      { src: 'src/assets/ComponentPhotos/polaroid1.png', alt: 'Science Olympiad 1', rotation: -15, top: '15%', left: '8%' },
      { src: 'src/assets/ComponentPhotos/polaroid2.png', alt: 'Science Olympiad 2', rotation: 8, top: '8%', left: '25%' },
      { src: 'src/assets/ComponentPhotos/polaroid3.png', alt: 'Science Olympiad 3', rotation: -5, top: '45%', left: '12%' },
    ]
  },
  { 
    id: 'programming-club', 
    label: 'Programming Club',
    title: 'Programming\nClub',
    images: [
      { src: 'src/assets/ComponentPhotos/polaroid1.png', alt: 'Programming Club 1', rotation: -10, top: '15%', left: '10%' },
      { src: 'src/assets/ComponentPhotos/polaroid2.png', alt: 'Programming Club 2', rotation: 5, top: '10%', left: '28%' },
      { src: 'src/assets/ComponentPhotos/polaroid3.png', alt: 'Programming Club 3', rotation: -8, top: '48%', left: '15%' },
    ]
  },
  { 
    id: 'band', 
    label: 'Band',
    title: 'Band',
    images: [
      { src: 'src/assets/ComponentPhotos/polaroid1.png', alt: 'Band 1', rotation: -12, top: '12%', left: '5%' },
      { src: 'src/assets/ComponentPhotos/polaroid2.png', alt: 'Band 2', rotation: 10, top: '5%', left: '22%' },
      { src: 'src/assets/ComponentPhotos/polaroid3.png', alt: 'Band 3', rotation: -3, top: '42%', left: '10%' },
    ]
  },
]

function HobbiesPage() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('science-olympiad')
  
  const activeHobby = HOBBY_TABS.find(tab => tab.id === activeTab)

  const handleClose = () => {
    navigate('/projects')
  }

  return (

    <div className="min-h-screen bg-off-white">


      {/* Tab Navigation Bar */}
      <div className="flex pl-40 pt-7">
        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="hobby-tab bg-medium-dark-red text-off-white font-[Kdam_Thmor_Pro] text-xl px-8 py-4 hover:bg-dark-red transition-colors rounded-t-lg "
        >
          [Close]
        </button>
        
        {/* Hobby Tabs */}
        {HOBBY_TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`hobby-tab font-[Kdam_Thmor_Pro] text-xl px-8 py-4 transition-colors  rounded-t-lg 
              ${activeTab === tab.id 
                ? 'bg-medium-light-red text-off-white' 
                : 'bg-medium-light-red text-dark-red hover:bg-light-red hover:text-off-white'
              }`}
          >
            {tab.label}
          </button>
        ))}
        
        {/* Fill remaining space */}
        <div className="flex-1 bg-off-white rounded-t-lg " />
      </div>

      {/* Main Content Area */}
      <div className="relative mx-auto w-320 h-170 bg-medium-light-red rounded-lg overflow-hidden">
        {/* Polaroid Photos Container */}
        <div className="absolute left-0 top-0 w-1/2 h-full p-10">
          {activeHobby?.images.map((image, index) => (
            <div
              key={index}
              className="polaroid-frame absolute"
              style={{
                transform: `rotate(${image.rotation}deg)`,
                top: image.top,
                left: image.left,
                zIndex: index + 1,
              }}
            >
              <div className="polaroid-inner bg-off-white p-2 pb-12 shadow-2xl">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-48 h-48 object-cover"
                  onError={(e) => {
                    // Fallback for missing images
                    e.target.style.backgroundColor = '#6A232B'
                    e.target.style.display = 'block'
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Title Section */}
        <div className="absolute right-10 top-1/2 transform -translate-y-1/2 text-right">
          <h1 className="hobby-title font-[Keania_One] text-off-white text-8xl leading-tight whitespace-pre-line">
            {activeHobby?.title}
          </h1>
        </div>
      </div>

      
    </div>
  )
}

export default HobbiesPage
