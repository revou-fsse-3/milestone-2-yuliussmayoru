import React,{HTMLAttributes,FC, PropsWithChildren} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Guide from './components/pages/guide/index.tsx'
import {Outlet} from "react-router-dom"

interface LayoutProps  extends HTMLAttributes<HTMLDivElement>{ 
}
type  LayoutComponents=FC<LayoutProps>  & PropsWithChildren
const Layout: LayoutComponents = ({children,...resProps }) => {
  
  return <div
            {...resProps}
            className={
              ""+
                ` ${resProps.className ? resProps.className : ""}`
              }
            >
              <h1>

              League Of Legends Chammpions
              </h1>
           <Outlet/>
        </div>;
};

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children=[
//       {
//         path:"/",
//         element: <App />
//       },
//       {
//         path: '/guide/:id',
//         element: <Guide />
//       }
//     ]
//   },
 
// ])

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path:"/",
        element: <App />
     
      },
      {
        path: '/guide/:id',
        element: <Guide />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
