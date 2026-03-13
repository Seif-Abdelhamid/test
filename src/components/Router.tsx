import { MemberProvider } from '@/integrations';
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from 'react-router-dom';
import { ScrollToTop } from '@/lib/scroll-to-top';
import ErrorPage from '@/integrations/errorHandlers/ErrorPage';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomePage from '@/components/pages/HomePage';
import MenuPage from '@/components/pages/MenuPage';
import LocationsPage from '@/components/pages/LocationsPage';
import ContactPage from '@/components/pages/ContactPage';
import CateringPage from '@/components/pages/CateringPage';
import RewardsPage from '@/components/pages/RewardsPage';
import BlogPage from '@/components/pages/BlogPage';

function Layout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage />, routeMetadata: { pageIdentifier: 'home' } },
      { path: 'menu', element: <MenuPage />, routeMetadata: { pageIdentifier: 'menu' } },
      { path: 'locations', element: <LocationsPage />, routeMetadata: { pageIdentifier: 'locations' } },
      { path: 'contact', element: <ContactPage />, routeMetadata: { pageIdentifier: 'contact' } },
      { path: 'catering', element: <CateringPage />, routeMetadata: { pageIdentifier: 'catering' } },
      { path: 'rewards', element: <RewardsPage />, routeMetadata: { pageIdentifier: 'rewards' } },
      { path: 'blog', element: <BlogPage />, routeMetadata: { pageIdentifier: 'blog' } },
      { path: '*', element: <Navigate to="/" replace /> },
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
