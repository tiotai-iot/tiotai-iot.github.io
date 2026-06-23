import { createRoot } from 'react-dom/client';
import DotGrid from './DotGrid.jsx';

const root = createRoot(document.getElementById('dot-grid-root'));
root.render(
  <DotGrid
    dotSize={4}
    gap={28}
    baseColor="#1e1a2e"
    activeColor="#8fbfae"
    proximity={120}
    speedTrigger={80}
    shockRadius={220}
    shockStrength={4}
    maxSpeed={5000}
    resistance={800}
    returnDuration={1.8}
  />
);
