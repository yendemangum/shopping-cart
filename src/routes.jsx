import Homepage from "./components/Homepage";
import Shop from "./components/Shop";
import ErrorPage from "./components/ErrorPage";
import App from "./App";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "shop", element: <Shop /> },
    ],
  },
];

export default routes;