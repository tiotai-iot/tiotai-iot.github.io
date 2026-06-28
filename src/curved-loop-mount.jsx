import { createRoot } from 'react-dom/client';
import CurvedLoop from './CurvedLoop.jsx';

const root = createRoot(document.getElementById('curved-loop-root'));
root.render(
  <CurvedLoop
    marqueeText="Tiotai ✦ AI-Native IoT Platform ✦ Built for AI Agents ✦ Unified PropTech Layer ✦"
    speed={1.1}
    curveAmount={220}
    direction="left"
    interactive={true}
    className="curved-text"
  />
);
