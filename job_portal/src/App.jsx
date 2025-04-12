import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import Landing from './pages/Landing'
import Onboarding from './pages/Onboarding'
import JobListing from './pages/JobListing'
import JobPage from './pages/JobPage'
import PostJob from './pages/PostJob'
import SavedJobs from './pages/SavedJobs'
import MyJobs from './pages/MyJobs'

const router = createBrowserRouter([
  {
    element:<AppLayout />,
    children:[
      {
        path: '/',
        element: <Landing />
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
    <RouterProvider router={router}/>
  )
}

export default App
