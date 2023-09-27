import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Results from './pages/Results';
import AppLayout from './ui/AppLayout';
import Questions from './pages/Questions';
import AspectsReview from './pages/AspectsReview';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/questions',
        element: <Questions />,
      },
      {
        path: '/review',
        element: <AspectsReview />,
      },
      {
        path: '/results',
        element: <Results />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
