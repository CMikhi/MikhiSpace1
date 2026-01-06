/**
 * ╔═══════════════════════════════════════════════════════════════════╗
 * ║            📁 PROJECT DATA - Edit your projects here!             ║
 * ╚═══════════════════════════════════════════════════════════════════╝
 * 
 * Each project has its own unique content for the notebook page.
 * The 'slug' is used in the URL (e.g., /project/shutterbug)
 * 
 * To add a new project:
 * 1. Copy an existing project object
 * 2. Change the slug (must be unique, lowercase, no spaces)
 * 3. Customize all the content fields
 */

const projectsData = {
  // ═══════════════════════════════════════════════════════════════════
  // 🦋 SHUTTERBUG
  // ═══════════════════════════════════════════════════════════════════
  shutterbug: {
    slug: "shutterbug",
    
    header: {
      title: "ShutterBug",
      subtitle: "A photography companion app 📸",
    },
    
    about: {
      heading: "About This Project",
      paragraphs: [
        "ShutterBug is a mobile app designed to help photographers track their favorite shooting locations.",
        "Built with React Native and Python backend, it features location saving, weather integration, and golden hour calculations.",
      ],
    },
    
    cards: [
      {
        emoji: "📍",
        title: "Features",
        description: "Location tracking, weather data, golden hour alerts",
      },
      {
        emoji: "🛠️",
        title: "Tech Stack",
        description: "React Native, Python, Firebase",
      },
      {
        emoji: "📅",
        title: "Timeline",
        description: "Started: Jan 2025 | Status: In Progress",
      },
    ],
    
    // Custom sections - add as many as you want!
    sections: [
      {
        icon: "🎯",
        heading: "Goals",
        content: "Create an intuitive app that helps photographers never miss the perfect lighting conditions.",
      },
      {
        icon: "💡",
        heading: "Inspiration",
        content: "As a photographer myself, I often found myself checking multiple apps for weather, sun position, and location notes. ShutterBug combines all of these!",
      },
    ],
    
    footer: {
      text: "Want to contribute? Check out the repo!",
      links: [
        { label: "GitHub", url: "#" },
        { label: "Live Demo", url: "#" },
      ],
    },
  },

  // ═══════════════════════════════════════════════════════════════════
  // 🚗 COB TRAFFIC
  // ═══════════════════════════════════════════════════════════════════
  "cob-traffic": {
    slug: "cob-traffic",
    
    header: {
      title: "COB Traffic",
      subtitle: "Smart traffic monitoring system 🚦",
    },
    
    about: {
      heading: "About This Project",
      paragraphs: [
        "COB Traffic is an intelligent traffic monitoring and prediction system.",
        "Using machine learning algorithms, it analyzes traffic patterns and provides real-time updates to commuters.",
      ],
    },
    
    cards: [
      {
        emoji: "📊",
        title: "Features",
        description: "Real-time monitoring, ML predictions, route suggestions",
      },
      {
        emoji: "🛠️",
        title: "Tech Stack",
        description: "Python, TensorFlow, React Native",
      },
      {
        emoji: "📅",
        title: "Timeline",
        description: "Started: Mar 2025 | Status: Planning",
      },
    ],
    
    sections: [
      {
        icon: "🎯",
        heading: "Goals",
        content: "Reduce commute times by providing accurate traffic predictions and alternative route suggestions.",
      },
      {
        icon: "📈",
        heading: "Progress",
        content: "Currently in the data collection phase, gathering traffic patterns from various sources.",
      },
    ],
    
    footer: {
      text: "Interested in traffic data? Let's connect!",
      links: [
        { label: "GitHub", url: "#" },
        { label: "Documentation", url: "#" },
      ],
    },
  },

  // ═══════════════════════════════════════════════════════════════════
  // 🖥️ DESKTOP WIDGETS
  // ═══════════════════════════════════════════════════════════════════
  "desktop-widgets": {
    slug: "desktop-widgets",
    
    header: {
      title: "Desktop Widgets",
      subtitle: "Beautiful widgets for your desktop ✨",
    },
    
    about: {
      heading: "About This Project",
      paragraphs: [
        "A collection of customizable desktop widgets built with Electron.",
        "Features include a clock, weather display, todo list, and music controller - all with a cohesive aesthetic.",
      ],
    },
    
    cards: [
      {
        emoji: "⏰",
        title: "Widgets",
        description: "Clock, weather, todos, music, calendar",
      },
      {
        emoji: "🛠️",
        title: "Tech Stack",
        description: "Electron, Python, JavaScript",
      },
      {
        emoji: "📅",
        title: "Timeline",
        description: "Started: Feb 2025 | Status: Active",
      },
    ],
    
    sections: [
      {
        icon: "🎨",
        heading: "Design Philosophy",
        content: "Minimalist and unobtrusive - widgets should enhance your workflow without cluttering your screen.",
      },
      {
        icon: "⚙️",
        heading: "Customization",
        content: "Every widget is fully customizable - colors, sizes, positions, and update frequencies can all be adjusted.",
      },
    ],
    
    footer: {
      text: "Download the latest release!",
      links: [
        { label: "GitHub", url: "#" },
        { label: "Download", url: "#" },
      ],
    },
  },

  // ═══════════════════════════════════════════════════════════════════
  // ✈️ AEROSTREAM
  // ═══════════════════════════════════════════════════════════════════
  aerostream: {
    slug: "aerostream",
    
    header: {
      title: "AeroStream",
      subtitle: "Flight tracking made beautiful ✈️",
    },
    
    about: {
      heading: "About This Project",
      paragraphs: [
        "AeroStream is a real-time flight tracking application with a focus on beautiful visualizations.",
        "Track flights worldwide with detailed information about aircraft, routes, and delays.",
      ],
    },
    
    cards: [
      {
        emoji: "🗺️",
        title: "Features",
        description: "Live tracking, 3D globe view, flight history",
      },
      {
        emoji: "🛠️",
        title: "Tech Stack",
        description: "React Native, Python, MapBox",
      },
      {
        emoji: "📅",
        title: "Timeline",
        description: "Started: Apr 2025 | Status: Development",
      },
    ],
    
    sections: [
      {
        icon: "🌍",
        heading: "Vision",
        content: "Make flight tracking accessible and visually stunning for aviation enthusiasts and travelers alike.",
      },
      {
        icon: "📡",
        heading: "Data Sources",
        content: "Integrates with multiple flight data APIs to provide comprehensive coverage worldwide.",
      },
    ],
    
    footer: {
      text: "Aviation enthusiast? Let's chat!",
      links: [
        { label: "GitHub", url: "#" },
        { label: "Preview", url: "#" },
      ],
    },
  },

  // ═══════════════════════════════════════════════════════════════════
  // ☁️ CLOUD BOARD
  // ═══════════════════════════════════════════════════════════════════
  "cloud-board": {
    slug: "cloud-board",
    
    header: {
      title: "Cloud Board",
      subtitle: "Your ideas, synced everywhere ☁️",
    },
    
    about: {
      heading: "About This Project",
      paragraphs: [
        "Cloud Board is a collaborative whiteboard application with real-time sync.",
        "Perfect for brainstorming sessions, planning, and creative collaboration across devices.",
      ],
    },
    
    cards: [
      {
        emoji: "🎨",
        title: "Features",
        description: "Real-time collab, infinite canvas, templates",
      },
      {
        emoji: "🛠️",
        title: "Tech Stack",
        description: "React, Python, WebSockets",
      },
      {
        emoji: "📅",
        title: "Timeline",
        description: "Started: May 2025 | Status: Beta",
      },
    ],
    
    sections: [
      {
        icon: "🤝",
        heading: "Collaboration",
        content: "See cursors in real-time, leave comments, and work together seamlessly with your team.",
      },
      {
        icon: "📱",
        heading: "Cross-Platform",
        content: "Works on desktop, tablet, and mobile - your boards are always accessible.",
      },
    ],
    
    footer: {
      text: "Try the beta version!",
      links: [
        { label: "GitHub", url: "#" },
        { label: "Try Beta", url: "#" },
      ],
    },
  },
}

// Helper function to get project by slug
export const getProjectBySlug = (slug) => {
  return projectsData[slug] || null
}

// Get all project slugs (useful for generating routes)
export const getAllProjectSlugs = () => {
  return Object.keys(projectsData)
}

// Default export
export default projectsData
