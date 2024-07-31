import { useRoutes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <LandingPage/> },
    { path: "*", element: <NotFound /> },

  ]);

  return element;
};

export default ProjectRoutes;
