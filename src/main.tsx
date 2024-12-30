import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import Landing from './routes/landing/landing.tsx'
import Contact from './routes/contact/contact.tsx';

const router = createBrowserRouter([
  {
      path: "/",
      element: <Landing />,
  },
  {
    path: "/contact",
    element: <Contact />,
},
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={router}/>
  </StrictMode>,
)
