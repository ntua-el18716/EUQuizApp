import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Results from "./pages/Results";
import AppLayout from "./ui/AppLayout";
import Questions from "./pages/Questions";
import AspectsReview from "./pages/AspectsReview";
import CandidateHomePage from "./pages/nonPublicPages/candidates/CandidateHomePage";
import CandidateInsertPage from "./pages/nonPublicPages/candidates/CandidateInsertPage";
import CandidateUpdate from "./pages/nonPublicPages/candidates/CandidateUpdate";
import QuestionInsertPage from "./pages/nonPublicPages/questions/QuestionInsertPage";
import QuestionUpdate from "./pages/nonPublicPages/questions/QuestionUpdate";

const developmentRoutes = [
  // Add your extra routes here
  {
    path: "/candidateInsert",
    element: <CandidateInsertPage />,
  },
  {
    path: "/candidateUpdate",
    element: <CandidateUpdate />,
  },
  {
    path: "/extraRoute1",
    element: <QuestionInsertPage />,
  },
  {
    path: "/questionUpdate",
    element: <QuestionUpdate />,
  },
];

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/questions",
        element: <Questions />,
      },
      {
        path: "/review",
        element: <AspectsReview />,
      },
      {
        path: "/results",
        element: <Results />,
      },
      {
        path: "/candidateHome",
        element: <CandidateHomePage />,
      },
    ],
  },
  ...developmentRoutes,
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
