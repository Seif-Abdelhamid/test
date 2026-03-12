import { MemberProvider } from '@/integrations';
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from 'react-router-dom';
import { ScrollToTop } from '@/lib/scroll-to-top';
import ErrorPage from '@/integrations/errorHandlers/ErrorPage';
import HomePage from '@/components/pages/HomePage';
import MenuPage from '@/components/pages/MenuPage';
import LocationsPage from '@/components/pages/LocationsPage';
import AboutPage from '@/components/pages/AboutPage';
import ContactPage from '@/components/pages/ContactPage';
import HtmlPage from '@/components/pages/HtmlPage';

// Layout component that includes ScrollToTop
function Layout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      // Core pages — fully editable via Wix editor
      { index: true, element: <HomePage />, routeMetadata: { pageIdentifier: 'home' } },
      { path: 'menu', element: <MenuPage />, routeMetadata: { pageIdentifier: 'menu' } },
      { path: 'locations', element: <LocationsPage />, routeMetadata: { pageIdentifier: 'locations' } },
      { path: 'about', element: <AboutPage />, routeMetadata: { pageIdentifier: 'about' } },
      { path: 'contact', element: <ContactPage />, routeMetadata: { pageIdentifier: 'contact' } },

      // Additional pages — served from public/ HTML files (to be converted to React incrementally)
      { path: 'catering', element: <HtmlPage /> },
      { path: 'rewards', element: <HtmlPage /> },
      { path: 'blog', element: <HtmlPage /> },
      { path: 'gift-card', element: <HtmlPage /> },
      { path: 'community', element: <HtmlPage /> },
      { path: 'store', element: <HtmlPage /> },
      { path: 'store/cart', element: <HtmlPage /> },
      { path: 'store/product/:id', element: <HtmlPage /> },

      // Fallback
      { path: '*', element: <Navigate to='/' replace /> },
    ],
  },
], {
  basename: import.meta.env.BASE_NAME,
});

export default function AppRouter() {
  return (
    <MemberProvider>
      <RouterProvider router={router} />
    </MemberProvider>
  );
}
