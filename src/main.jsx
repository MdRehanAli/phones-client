import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './assets/components/Main.jsx';
import Phones from './assets/components/Phones.jsx';
import Phone from './assets/components/Phone.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/phones",
        element: <Phones/>,
        loader: () => fetch("http://localhost:3000/phones")
      },
      {
        path: "/phone/:id",
        element: <Phone/>,
        loader: ({params}) => fetch(`http://localhost:3000/phones/${params.id}`)
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
