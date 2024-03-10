import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "@/pages/home";
import Layout from "@/pages/layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
