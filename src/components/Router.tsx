import { MemberProvider } from '@/integrations';
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ScrollToTop } from '@/lib/scroll-to-top';
import ErrorPage from '@/integrations/errorHandlers/ErrorPage';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LoadingSpinner } from '@/components/ui/loading-spinner';

// Lazy load pages to avoid circular dependencies
const HomePage = lazy(() => import('@/components/pages/HomePage'));
const MenuPage = lazy(() => import('@/components/pages/MenuPage'));
const LocationsPage = lazy(() => import('@/components/pages/LocationsPage'));
const ContactPage = lazy(() => import('@/components/pages/ContactPage'));
const CateringPage = lazy(() => import('@/components/pages/CateringPage'));
const RewardsPage = lazy(() => import('@/components/pages/RewardsPage'));
const BlogPage = lazy(() => import('@/components/pages/BlogPage'));

function Layout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Suspense fallback={<LoadingSpinner />}>
        <Outlet />
      </Suspense>
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
      { index: true, element: <Suspense fallback={<LoadingSpinner />}><HomePage /></Suspense>, routeMetadata: { pageIdentifier: 'home' } },
      { path: 'menu', element: <Suspense fallback={<LoadingSpinner />}><MenuPage /></Suspense>, routeMetadata: { pageIdentifier: 'menu' } },
      { path: 'locations', element: <Suspense fallback={<LoadingSpinner />}><LocationsPage /></Suspense>, routeMetadata: { pageIdentifier: 'locations' } },
      { path: 'contact', element: <Suspense fallback={<LoadingSpinner />}><ContactPage /></Suspense>, routeMetadata: { pageIdentifier: 'contact' } },
      { path: 'catering', element: <Suspense fallback={<LoadingSpinner />}><CateringPage /></Suspense>, routeMetadata: { pageIdentifier: 'catering' } },
      { path: 'rewards', element: <Suspense fallback={<LoadingSpinner />}><RewardsPage /></Suspense>, routeMetadata: { pageIdentifier: 'rewards' } },
      { path: 'blog', element: <Suspense fallback={<LoadingSpinner />}><BlogPage /></Suspense>, routeMetadata: { pageIdentifier: 'blog' } },
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
