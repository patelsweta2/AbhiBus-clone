import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
const App = lazy(() => import("./App.jsx"));
const LandingPage = lazy(() => import("./screens/LandingPage"));
const CustomSuspense = ({ children }) => {
  return <Suspense fallBack={<h3>Loading...</h3>}>{children}</Suspense>;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <CustomSuspense>
          <App />
        </CustomSuspense>
      }
    >
      <Route
        index={true}
        path="/"
        element={
          <CustomSuspense>
            <LandingPage />
          </CustomSuspense>
        }
      />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
