import { createRoot } from 'react-dom/client';
import CurvedLoop from './CurvedLoop.jsx';

const root = createRoot(document.getElementById('curved-loop-root'));
root.render(
  <CurvedLoop
    marqueeText="Tiotai ✦ Unified IoT Infrastructure ✦ Built on Farm21 ✦ Managed at Scale ✦"
    speed={1.1}
    curveAmount={220}
    direction="left"
    interactive={true}
    className="curved-text"
  />
);
