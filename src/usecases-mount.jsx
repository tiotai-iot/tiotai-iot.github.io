import { createRoot } from 'react-dom/client';
import FlowingMenu from './FlowingMenu.jsx';

const items = [
  {
    link: '#',
    text: 'Tiotai GATE — Smart Access',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80',
    description: 'Cloud-based gate/door access issuing time-bound digital codes for contractors, delivery personnel, and visitors, alongside resident smart-lock control in one app, with every entry/exit logged per unit.',
    infographic: {
      title: 'Access Authorization Flow',
      steps: [
        { label: 'Request Code', desc: 'Guest requests time-bound access code', icon: 'fa-mobile-screen-button' },
        { label: 'Cloud Match', desc: 'Tiotai Cloud matches schedule permission', icon: 'fa-cloud-arrow-up' },
        { label: 'Gate Trigger', desc: 'Relay opens gate barrier automatically', icon: 'fa-lock-open' },
        { label: 'Secure Log', desc: 'Immutable entry ledger saved per unit', icon: 'fa-file-shield' }
      ]
    }
  },
  {
    link: '#',
    text: 'Tiotai POOL — Drowning Prevention',
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&q=80',
    description: 'Underwater motion/sonar sensors plus surface cameras to detect submersion or unusual stillness, alerting facilities staff and registered parents/guardians in real time — designed for community-wide deployment from a single console.',
    infographic: {
      title: 'Drowning Detection Pipeline',
      steps: [
        { label: 'Depth Motion', desc: 'Underwater sonar tracks activity level', icon: 'fa-water' },
        { label: 'AI Vision', desc: 'Surface cameras track swimmer safety state', icon: 'fa-eye' },
        { label: 'Local Edge', desc: 'AI processor flags submersion patterns', icon: 'fa-microchip' },
        { label: 'Push Alert', desc: 'SMS sent to parents & lifeguard console', icon: 'fa-bell' }
      ]
    }
  },
  {
    link: '#',
    text: 'Tiotai GREEN — Irrigation Automation',
    image: 'https://images.unsplash.com/photo-1463171359979-300c4642e49c?w=800&q=80',
    description: 'Soil-moisture probes linked to irrigation valves and local weather data, automatically skipping cycles during rain and protecting pumps from low-supply damage.',
    infographic: {
      title: 'Adaptive Irrigation Engine',
      steps: [
        { label: 'Soil Probe', desc: 'Sensors check sub-surface moisture levels', icon: 'fa-compass-drafting' },
        { label: 'Forecast Pull', desc: 'Weather API pulls active rainfall probability', icon: 'fa-cloud-rain' },
        { label: 'Smart Valves', desc: 'Control system tunes the flow schedules', icon: 'fa-sliders' },
        { label: 'Active Skip', desc: 'Valves skip cycle to save irrigation water', icon: 'fa-circle-xmark' }
      ]
    }
  },
  {
    link: '#',
    text: 'Tiotai CIVIC — Municipal Monitoring',
    image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&q=80',
    description: 'Fill-level sensors on public waste bins, ambient air-quality monitors, and flow/level sensors on water infrastructure feed into a single government-operated console, optimizing waste collection routes and auto-generating compliance logs.',
    infographic: {
      title: 'Municipal Infrastructure Loop',
      steps: [
        { label: 'Bin Sensor', desc: 'Fill levels monitored in waste units', icon: 'fa-trash-can' },
        { label: 'Air Nodes', desc: 'Wind/particle nodes record air quality', icon: 'fa-wind' },
        { label: 'Console AI', desc: 'Platform maps optimal logistics routes', icon: 'fa-route' },
        { label: 'Dispatch', desc: 'Crews sent based on actual fill metrics', icon: 'fa-truck-pickup' }
      ]
    }
  },
  {
    link: '#',
    text: 'Tiotai CAMPUS — Corporate Energy',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    description: 'Occupancy sensors and HVAC/BMS integration let the AI Engine pre-cool or pre-heat zones based on actual occupancy. Unifies access control across all buildings into one credential.',
    infographic: {
      title: 'Corporate Load Control Loop',
      steps: [
        { label: 'Space Scan', desc: 'Occupancy sensors track meeting bookings', icon: 'fa-network-wired' },
        { label: 'Pre-Cooling', desc: 'BMS cools room prior to schedule time', icon: 'fa-snowflake' },
        { label: 'Auto Drop', desc: 'HVAC disabled when room remains vacant', icon: 'fa-power-off' },
        { label: 'Single Ticket', desc: 'System alerts operations of empty draws', icon: 'fa-ticket' }
      ]
    }
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
