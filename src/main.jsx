import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Index from './pages';
import About from './pages/About';
import Contact from './pages/Contact';
import Air from './pages/Products/Air';
import B2b from './pages/Products/B2b';
import B2c from './pages/Products/B2c';
import Ftl from './pages/Products/Ftl';
import Suply from './pages/Products/Suply';
import Warehouse from './pages/Products/Warehouse';
import ErrorPage from './pages/ErrorPage';
import DomesticCal from './pages/DomesticCal';
import InterCal from './pages/InterCal';




const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path:'',
        element:<Index/>
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "calculator/domestic",
        element: <DomesticCal />,
      },
      
      {
        path: "calculator/international",
        element: <InterCal />,
      },
      
    
      {
        path: "products/air",
        element: <Air />,
       
      },
    
      {
        path: "products/b2b",
        element: <B2b/>,
      },
      {
        path: "products/b2c",
        element: <B2c />,
      },
    
      {
        path: "products/ftl",
        element: <Ftl />,
      },
      {
        path: "products/supply",
        element: <Suply />,
      },
    
      {
        path: "products/warehouse",
        element: <Warehouse />,
      },
     
    ],
    errorElement:<ErrorPage/>
    
  },




]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
