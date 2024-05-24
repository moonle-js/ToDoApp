import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Default from './Components/Default'
import Tasks from './Components/Tasks'
import TaskDetailed from './Components/TaskDetailed'

import './style.css'
import TasksContext from './Contexts/TasksContext'


const root = ReactDOM.createRoot(document.querySelector('#root'))

const router = createBrowserRouter([
    {
        path: '/',
        element: <Default></Default>,
        children: [
            {   
                index: true,
                element: <Tasks></Tasks>,
            },
            {
                path: "taskDetailed/:id",
                element: <TaskDetailed></TaskDetailed>
            }
        ]
    }
])

root.render(
    <>
        <TasksContext>
            <RouterProvider router={router}>
            </RouterProvider>
        </TasksContext>
    </>
)