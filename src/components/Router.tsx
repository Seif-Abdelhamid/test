import { MemberProvider } from '@/integrations';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from '@/integrations/errorHandlers/ErrorPage';
import HtmlPage from '@/components/pages/HtmlPage';

const router = createBrowserRouter([
  {
    path: '/*',
    element: <HtmlPage />,
    errorElement: <ErrorPage />,
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
