import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Project from './pages/Project'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './components/layout/AppLayout'


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/project",
          element: <Project />
        },
      ]
    },

  ])


  return <RouterProvider router={router} />
}

export default App
