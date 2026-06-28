import { createRoot } from 'react-dom/client';
import FlowingMenu from './FlowingMenu.jsx';

const items = [
  {
    link: '#',
    text: 'Tiotai GATE — Smart Access',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80',
    description: 'Cloud-based gate/door access issuing time-bound digital codes for contractors, delivery personnel, and visitors, alongside resident smart-lock control in one app, with every entry/exit logged per unit.'
  },
  {
    link: '#',
    text: 'Tiotai POOL — Drowning Prevention',
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&q=80',
    description: 'Underwater motion/sonar sensors plus surface cameras to detect submersion or unusual stillness, alerting facilities staff and registered parents/guardians in real time — designed for community-wide deployment from a single console.'
  },
  {
    link: '#',
    text: 'Tiotai AQUA — Water & Pump Intelligence',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80',
    description: 'Inline flow meters and ultrasonic tank-level sensors that activate pump relays based on real-time well/supply readings, with dry-run protection to cut power before a motor burns out.'
  },
  {
    link: '#',
    text: 'Tiotai GREEN — Irrigation Automation',
    image: 'https://images.unsplash.com/photo-1463171359979-300c4642e49c?w=800&q=80',
    description: 'Soil-moisture probes linked to irrigation valves and local weather data, automatically skipping cycles during rain and protecting pumps from low-supply damage.'
  },
  {
    link: '#',
    text: 'Tiotai CIVIC — Municipal Monitoring',
    image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&q=80',
    description: 'Fill-level sensors on public waste bins, ambient air-quality monitors, and flow/level sensors on water infrastructure feed into a single government-operated console, optimizing waste collection routes and auto-generating compliance logs.'
  },
  {
    link: '#',
    text: 'Tiotai CAMPUS — Corporate Energy',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    description: 'Occupancy sensors and HVAC/BMS integration let the AI Engine pre-cool or pre-heat zones based on actual occupancy. Unifies access control across all buildings into one credential.'
  }
];

const root = createRoot(document.getElementById('usecases-gallery-root'));
root.render(
  <FlowingMenu
    items={items}
    textColor="var(--ivory)"
    bgColor="transparent"
    marqueeBgColor="var(--gold)"
    marqueeTextColor="var(--ink)"
    borderColor="var(--line-soft)"
    speed={18}
  />
);
