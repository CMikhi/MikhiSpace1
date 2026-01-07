// Project card data for ProjectsPage
// Each project includes title, details, link, techIcons, and styling properties

export const projectsData = [
  // First Row
  {
    id: 'shutterbug',
    title: 'ShutterBug',
    details: 'It is a mobile app that uses computer vision to identify different photos of insects and provide information about them to the user. Information is saved to a database where the user can look back upon on a future day.',
    link: '/project/shutterbug',
    techIcons: [
      { src: 'src/assets/ComponentPhotos/PythonBlock.svg', alt: 'Python', height: 10 },
      { src: 'src/assets/ComponentPhotos/ReactNatBlock.svg', alt: 'React Native', height: 12 },
    ],
    index: 0,
    className: '-rotate-4',
    delay: '0ms',
    marginTop: '',
  },
  {
    id: 'cob-traffic',
    title: 'COB Traffic',
    details: 'Worked with a team of 3 and the CoB Traffic Commity to create a MML model to optimize traffic timing along the 102 corridor.',
    link: '/project/cob-traffic',
    techIcons: [
      { src: 'src/assets/ComponentPhotos/PythonBlock.svg', alt: 'Python', height: 10 },
      { src: 'src/assets/ComponentPhotos/ReactNatBlock.svg', alt: 'React Native', height: 12 },
    ],
    index: 1,
    className: 'rotate-3',
    delay: '150ms',
    marginTop: 'mt-35',
  },
  {
    id: 'desktop-widgets',
    title: 'Desktop Widgets',
    details: '[insert details here]',
    link: '/project/desktop-widgets',
    techIcons: [
      { src: 'src/assets/ComponentPhotos/PythonBlock.svg', alt: 'Python', height: 10 },
      { src: 'src/assets/ComponentPhotos/ElectronBlock.svg', alt: 'Electron', height: 10 },
    ],
    index: 2,
    className: '-rotate-2',
    delay: '300ms',
    marginTop: 'mt-70',
  },
  // Second Row
  {
    id: 'aerostream',
    title: 'AeroStream',
    details: 'Ignite passion project for a TLI-based messagings app. Originally used as a git learning project.',
    link: '/project/aerostream',
    techIcons: [
      { src: 'src/assets/ComponentPhotos/PythonBlock.svg', alt: 'Python', height: 10 },
      { src: 'src/assets/ComponentPhotos/ReactNatBlock.svg', alt: 'React Native', height: 12 },
    ],
    index: 0,
    className: 'rotate-2',
    delay: '450ms',
    marginTop: 'mt-55',
  },
  {
    id: 'cloud-board',
    title: 'Cloud Board',
    details: 'A dynamic whiteboard application that allows users to create, share, and collaborate on virtual space in real-time. Used for planning, designing, and brainstorming.',
    link: '/project/cloud-board',
    techIcons: [
      { src: 'src/assets/ComponentPhotos/PythonBlock.svg', alt: 'Python', height: 10 },
      { src: 'src/assets/ComponentPhotos/ReactNatBlock.svg', alt: 'React Native', height: 12 },
    ],
    index: 1,
    className: '-rotate-4',
    delay: '600ms',
    marginTop: 'mt-20',
  },
]
