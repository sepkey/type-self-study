// import ContactPage, { contactPageAction } from './ContactPage';//React router approach
import ContactPage from './ContactPage';

import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import ThankYouPage from './ThankYouPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="contact" />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
    // action: contactPageAction,//React router approach
  },
  {
    path: '/thank-you/:name',
    element: <ThankYouPage />,
  },
]);
const App = () => {
  // return <ContactPage />; //controled and uncontrolled form
  return <RouterProvider router={router} />;
};

export default App;
