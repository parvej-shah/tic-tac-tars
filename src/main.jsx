import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './pages/Root';
import LandingPage from './pages/LandingPage';
import FriendlyBattle from './pages/FriendlyBattle';
import TarsGame from './pages/TarsGame';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
      {
        path:'/',
        element:<LandingPage/>
      },
      {
        path:'/friend-game',
        element:<FriendlyBattle/>
      },
      {
        path:'/tars-game',
        element:<TarsGame/>
      },
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
