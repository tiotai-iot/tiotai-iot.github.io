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
      { label: "Request Briefing", href: "#contact", ariaLabel: "Request Briefing" }
    ]
  }
];

const root = createRoot(document.getElementById('nav-root'));
root.render(
  <CardNav
    items={items}
    baseColor="rgba(7, 11, 20, 0.72)"
    menuColor="#ece5da"
    buttonBgColor="linear-gradient(135deg, var(--gold-bright), var(--gold))"
    buttonTextColor="#1b1304"
    ease="power3.out"
    onCtaClick={() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }}
  />
);
