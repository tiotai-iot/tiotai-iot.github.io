import { createRoot } from 'react-dom/client';
import CircularGallery from './CircularGallery.jsx';

const items = [
  {
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    text: 'Smart City'
  },
  {
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80',
    text: 'Traffic & Fleet'
  },
  {
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
    text: 'Supply Chain'
  },
  {
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80',
    text: 'Energy & Grid'
  },
  {
    image: 'https://images.unsplash.com/photo-1545259742-0b6a8d9a14a3?w=800&q=80',
    text: 'Water Quality'
  },
  {
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    text: 'Building Access'
  },
  {
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    text: 'GIS Analytics'
  },
  {
    image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80',
    text: 'Predictive Maint.'
  },
  {
    image: 'https://images.unsplash.com/photo-1460472178825-e5240623afd5?w=800&q=80',
    text: 'Environmental'
  },
  {
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
    text: 'Smart Parking'
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
