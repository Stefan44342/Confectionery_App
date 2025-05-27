import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CreateCake from '/src/create-cake/index.jsx'
import SweetSubscription from './sweet-box/SweetSubscription'
import Recipes from './recipes/Recipes'
import DigitalAssistant from './digital-assistant/DigitalAssistant'
import LoyaltyProgram from './loyalty-program/LoyaltyProgram'
import NewsletterSubscriber from './newsletter/NewsletterSubscriber'


const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/create-cake',
    element:<CreateCake/>
  },
  {
    path:'/sweet-box',
    element:<SweetSubscription/>
  },
  {
    path:'/recipes',
    element:<Recipes/>
  },
  {
    path:'/assistant',
    element:<DigitalAssistant/>
  },
  {
    path:'/loyalty',
    element:<LoyaltyProgram/>
  },
  {
    path:'/newsletter',
    element:<NewsletterSubscriber/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
