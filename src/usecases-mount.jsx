import { createRoot } from 'react-dom/client';
import CircularGallery from './CircularGallery.jsx';

const items = [
  {
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80',
    text: 'Tiotai GATE'
  },
  {
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&q=80',
    text: 'Tiotai POOL'
  },
  {
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80',
    text: 'Tiotai AQUA'
  },
  {
    image: 'https://images.unsplash.com/photo-1463171359979-300c4642e49c?w=800&q=80',
    text: 'Tiotai GREEN'
  },
  {
    image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&q=80',
    text: 'Tiotai CIVIC'
  },
  {
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    text: 'Tiotai CAMPUS'
  }
];

const root = createRoot(document.getElementById('usecases-gallery-root'));
root.render(
  <CircularGallery
    items={items}
    bend={2}
    textColor="#8fbfae"
    borderRadius={0.08}
    font="700 16px 'JetBrains Mono'"
    fontUrl="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@700&display=swap"
    scrollSpeed={3}
    scrollEase={0.03}
  />
);
