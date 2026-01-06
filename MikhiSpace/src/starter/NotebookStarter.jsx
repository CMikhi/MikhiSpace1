/**
 * ╔═══════════════════════════════════════════════════════════════════╗
 * ║               🎨 NOTEBOOK AESTHETIC STARTER                       ║
 * ║                  Beginner-Friendly Template                       ║
 * ╚═══════════════════════════════════════════════════════════════════╝
 * 
 * QUICK START:
 * 1. Edit project content in projectsData.js
 * 2. Each project card links to /project/:slug
 * 3. Customize the styling in NotebookStarter.css
 * 
 * CUSTOMIZATION TIPS:
 * - Colors: Edit the CSS variables in NotebookStarter.css
 * - Content: Edit projectsData.js for each project's unique content
 * - Styling: Classes are organized in NotebookStarter.css
 */

import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getProjectBySlug } from './projectsData'
import './NotebookStarter.css'

// ═══════════════════════════════════════════════════════════════════
// 📝 DEFAULT CONTENT - Used when no project slug is provided
// ═══════════════════════════════════════════════════════════════════

const DEFAULT_CONTENT = {
  header: {
    title: "Welcome to My Space",
    subtitle: "A cozy corner of the internet ✨",
  },
  
  about: {
    heading: "About Me",
    paragraphs: [
      "Hello! I'm a creative soul who loves to code and design.",
      "This is my digital notebook where I share my thoughts and projects.",
    ],
  },
  
  cards: [
    {
      emoji: "💻",
      title: "Projects",
      description: "Check out what I've been building",
    },
    {
      emoji: "🎨",
      title: "Design",
      description: "My creative explorations",
    },
    {
      emoji: "📚",
      title: "Learning",
      description: "Things I'm currently studying",
    },
  ],
  
  sections: [],
  
  footer: {
    text: "Made with 💖 and lots of coffee",
    links: [
      { label: "GitHub", url: "#" },
      { label: "LinkedIn", url: "#" },
      { label: "Email", url: "#" },
    ],
  },
}

// ═══════════════════════════════════════════════════════════════════
// 🧩 COMPONENTS - Reusable building blocks
// ═══════════════════════════════════════════════════════════════════

/**
 * NotebookCard - A cute card component with hover effects
 * @param {string} emoji - Emoji icon for the card
 * @param {string} title - Card title
 * @param {string} description - Card description
 * @param {function} onClick - Optional click handler
 */
function NotebookCard({ emoji, title, description, onClick }) {
  return (
    <div className="notebook-card" onClick={onClick}>
      <span className="notebook-card-emoji">{emoji}</span>
      <h3 className="notebook-card-title">{title}</h3>
      <p className="notebook-card-description">{description}</p>
    </div>
  )
}

/**
 * NotebookDivider - A decorative line divider
 * @param {string} style - 'solid', 'dashed', or 'dotted'
 */
function NotebookDivider({ style = 'solid' }) {
  return <div className={`notebook-divider notebook-divider-${style}`} />
}

/**
 * NotebookButton - A styled button component
 * @param {string} children - Button text
 * @param {string} variant - 'primary' or 'secondary'
 * @param {function} onClick - Click handler
 */
function NotebookButton({ children, variant = 'primary', onClick }) {
  return (
    <button 
      className={`notebook-button notebook-button-${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

/**
 * NotebookTag - Small tag/label component
 * @param {string} children - Tag text
 */
function NotebookTag({ children }) {
  return <span className="notebook-tag">{children}</span>
}

// ═══════════════════════════════════════════════════════════════════
// 🏠 MAIN PAGE COMPONENT
// ═══════════════════════════════════════════════════════════════════

function NotebookStarter() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [activeCard, setActiveCard] = useState(null)

  // Get project-specific content or use default
  const projectData = slug ? getProjectBySlug(slug) : null
  const CONTENT = projectData || DEFAULT_CONTENT

  // Handle back navigation
  const handleBack = () => {
    navigate('/projects')
  }

  return (
    <div className="notebook-page">
      {/* ====== PAPER TEXTURE BACKGROUND ====== */}
      <div className="notebook-paper-texture" />
      
      {/* ====== NOTEBOOK LINES (decorative) ====== */}
      <div className="notebook-lines" />
      
      {/* ====== MAIN CONTENT CONTAINER ====== */}
      <div className="notebook-container">

        {/* ====== BACK BUTTON ====== */}
        {slug && (
          <button className="notebook-back-button" onClick={handleBack}>
            ← Back to Projects
          </button>
        )}
        
        {/* ====== HEADER SECTION ====== */}
        <header className="notebook-header">
          <h1 className="notebook-title">{CONTENT.header.title}</h1>
          <p className="notebook-subtitle">{CONTENT.header.subtitle}</p>
          <NotebookDivider style="dashed" />
        </header>

        {/* ====== ABOUT SECTION ====== */}
        <section className="notebook-section">
          <h2 className="notebook-section-heading">
            <span className="notebook-heading-icon">📌</span>
            {CONTENT.about.heading}
          </h2>
          {CONTENT.about.paragraphs.map((paragraph, index) => (
            <p key={index} className="notebook-paragraph">
              {paragraph}
            </p>
          ))}
        </section>

        <NotebookDivider style="dotted" />

        {/* ====== CARDS SECTION ====== */}
        <section className="notebook-section">
          <h2 className="notebook-section-heading">
            <span className="notebook-heading-icon">🗂️</span>
            {slug ? "Project Details" : "My Stuff"}
          </h2>
          <div className="notebook-cards-grid">
            {CONTENT.cards.map((card, index) => (
              <NotebookCard
                key={index}
                emoji={card.emoji}
                title={card.title}
                description={card.description}
                onClick={() => setActiveCard(index)}
              />
            ))}
          </div>
        </section>

        {/* ====== CUSTOM SECTIONS (from projectsData) ====== */}
        {CONTENT.sections && CONTENT.sections.length > 0 && (
          <>
            <NotebookDivider />
            {CONTENT.sections.map((section, index) => (
              <section key={index} className="notebook-section">
                <h2 className="notebook-section-heading">
                  <span className="notebook-heading-icon">{section.icon}</span>
                  {section.heading}
                </h2>
                <p className="notebook-paragraph">{section.content}</p>
              </section>
            ))}
          </>
        )}

        <NotebookDivider />

        {/* ====== INTERACTIVE DEMO SECTION ====== */}
        <section className="notebook-section">
          <h2 className="notebook-section-heading">
            <span className="notebook-heading-icon">✨</span>
            {slug ? "Quick Info" : "Try Me!"}
          </h2>
          <div className="notebook-demo-box">
            <p className="notebook-paragraph">
              {activeCard !== null 
                ? `You clicked on: ${CONTENT.cards[activeCard].title}!` 
                : slug 
                  ? "Click on a card above to highlight it!"
                  : "Click on a card above to see interactivity!"}
            </p>
            <div className="notebook-button-group">
              <NotebookButton variant="primary" onClick={handleBack}>
                {slug ? "View All Projects" : "Primary Button"}
              </NotebookButton>
              <NotebookButton variant="secondary">
                {slug ? "Contact Me" : "Secondary"}
              </NotebookButton>
            </div>
            <div className="notebook-tags-row">
              <NotebookTag>React</NotebookTag>
              <NotebookTag>CSS</NotebookTag>
              <NotebookTag>Beginner Friendly</NotebookTag>
            </div>
          </div>
        </section>

        {/* ====== FOOTER SECTION ====== */}
        <footer className="notebook-footer">
          <NotebookDivider style="dashed" />
          <p className="notebook-footer-text">{CONTENT.footer.text}</p>
          <div className="notebook-footer-links">
            {CONTENT.footer.links.map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                className="notebook-footer-link"
              >
                {link.label}
              </a>
            ))}
          </div>
        </footer>

      </div>
    </div>
  )
}

// Export the main component and all reusable components
export default NotebookStarter
export { NotebookCard, NotebookDivider, NotebookButton, NotebookTag }
