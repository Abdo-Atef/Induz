import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index:true,
          element: <Home />,
        },
        {
          path: "About",
          element: <About />,
        },
        {
          path: "Services",
          element: <Services />,
        },
        {
          path: "Contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return <>
    <RouterProvider router={router} />
  </>;
}

export default App;
