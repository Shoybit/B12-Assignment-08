import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Installation from "../Pages/Installation";
import Apps from "../Pages/Apps";
import Error from '../Components/Error/Error';
import MainLayout from "../Layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: (
      <MainLayout>
        <Error />
      </MainLayout>
    ),
    children: [
      {
        index: true,
        Component: Home,
      },  
      {
        path: "/apps",
        Component: Apps,
      },
      {
        path: "/installation",
        Component: Installation,
      },
      {
        path: "*",
        element: <Error />,
      },
    ]
  },
]);

export default router;