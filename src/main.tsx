import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Guide from './components/pages/guide/index.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  }, {
    path: '/guide/:id',
    element: <Guide />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
