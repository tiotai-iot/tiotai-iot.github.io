import { createRoot } from 'react-dom/client';
import Dither from './Dither.jsx';

// Wave color matches the site's coral accent (#ff6b57 → 1, 0.42, 0.34),
// kept subtle (low colorNum, slow speed) so it reads as ambient texture,
// not a distraction behind the headline.
const root = createRoot(document.getElementById('dither-root'));
root.render(
  <Dither
    waveColor={[1.0, 0.42, 0.34]}
    disableAnimation={false}
    enableMouseInteraction={true}
    mouseRadius={0.3}
    colorNum={4}
    pixelSize={2}
    waveAmplitude={0.28}
    waveFrequency={3}
    waveSpeed={0.03}
  />
);
