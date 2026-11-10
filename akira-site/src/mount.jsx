import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';

/*
 * The build prerenders each page into its HTML. When that HTML is there, React adopts
 * it (hydrate) instead of rebuilding it, so images are not requested a second time and
 * the page is interactive sooner. In dev the root is empty, so it renders from scratch.
 */
export function mount(element) {
  const root = document.getElementById('root');
  const tree = <StrictMode>{element}</StrictMode>;
  if (root.hasChildNodes()) hydrateRoot(root, tree);
  else createRoot(root).render(tree);
}
