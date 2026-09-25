import { createRoot } from 'react-dom/client';
import CardNav from './CardNav.jsx';

const items = [
  {
    label: "Platform",
    bgColor: "#1b1828",
    textColor: "#ece5da",
    links: [
      { label: "Explore Platform", href: "#solution", ariaLabel: "Explore Platform" },
      { label: "Verticals", href: "#verticals", ariaLabel: "Industry Verticals" }
    ]
  },
  {
    label: "Business",
    bgColor: "#282235",
    textColor: "#ece5da",
    links: [
      { label: "Opportunity", href: "#problem", ariaLabel: "Opportunity" },
      { label: "Business Model", href: "#model", ariaLabel: "Business Model" },
      { label: "Positioning", href: "#matrix", ariaLabel: "Positioning" }
    ]
  },
  {
    label: "Contact",
    bgColor: "#1b1828",
    textColor: "#ece5da",
    links: [
      { label: "Request Pitch Deck", href: "mailto:johan@tiotai.com?subject=Request%20for%20Tiotai%20Pitch%20Deck", ariaLabel: "Request Pitch Deck" }
    ]
  }
];

// View mode switching logic
function applyViewMode(mode) {
  const pageContent = document.getElementById('page-content');
  const agentContent = document.getElementById('agent-content');
  
  if (!pageContent || !agentContent) return;
  
  if (mode === 'agent') {
    pageContent.style.display = 'none';
    agentContent.style.display = 'block';
    // Trigger entrance animation
    requestAnimationFrame(() => {
      agentContent.classList.add('agent-visible');
    });
    document.body.classList.add('agent-mode');
  } else {
    pageContent.style.display = '';
    agentContent.style.display = 'none';
    agentContent.classList.remove('agent-visible');
    document.body.classList.remove('agent-mode');
  }
}

// Listen for mode changes
window.addEventListener('tiotai-view-mode', (e) => {
  applyViewMode(e.detail.mode);
});

// Apply saved mode on load
const savedMode = localStorage.getItem('tiotai-view-mode') || 'human';

const root = createRoot(document.getElementById('nav-root'));
root.render(
  <CardNav
    logo="tiotai.png"
    items={items}
    baseColor="rgba(7, 11, 20, 0.72)"
    menuColor="#ece5da"
    buttonBgColor="linear-gradient(135deg, var(--gold-bright), var(--gold))"
    buttonTextColor="#1b1304"
    ease="power3.out"
    viewMode={savedMode}
    onViewModeChange={applyViewMode}
    onCtaClick={() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }}
  />
);

// Initial application after DOM is ready
requestAnimationFrame(() => {
  applyViewMode(savedMode);
});
