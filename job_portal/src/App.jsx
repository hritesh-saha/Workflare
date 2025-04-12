import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import Onboarding from './pages/Onboarding'
import JobListing from './pages/JobListing'
import JobPage from './pages/JobPage'
import PostJob from './pages/PostJob'
import SavedJobs from './pages/SavedJobs'
import MyJobs from './pages/MyJobs'
import { ThemeProvider } from './components/ThemeProvider'
import LandingPage from './pages/LandingPage'

const router = createBrowserRouter([
  {
    element:<AppLayout />,
    children:[
      {
        path: '/',
        element: <LandingPage />
      },
      {
        path: '/onboarding',
        element: <Onboarding />
      },{
        path: '/jobs',
        element: <JobListing />
      },{
        path: '/job/:id',
        element: <JobPage />
      },{
        path: '/post-job',
        element: <PostJob />
      },{
        path: '/saved-job',
        element: <SavedJobs />
      },{
        path: '/my-jobs',
        element: <MyJobs />
      },
    ]
  }
])

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router}/>
    </ThemeProvider>
  )
}

export default App
