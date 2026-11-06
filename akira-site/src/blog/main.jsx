import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../styles/tokens.css';
import '../styles/global.css';
import BlogApp from './BlogApp.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BlogApp />
  </StrictMode>
);
