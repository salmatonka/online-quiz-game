import React from 'react';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Error from './components/Error/Error';
import ReChart from './components/ReChart/ReChart';

import Home from './components/Home/Home';
import MainHome from './components/MainHome/MainHome';
import Blog from './components/Blog/Blog'
const router = createBrowserRouter([{
  path:'/',
 element:<MainHome></MainHome>,
 errorElement:<Error></Error>,
 children:[
  {path:'/', element:<Home></Home>,},

  {path:'/home', element:<Home></Home>, loader:async()=>{return fetch (`https://openapi.programming-hero.com/api/quiz`)}},

  {path:'/rechart', element: <ReChart></ReChart>,},

  {path:'/blog', element: <Blog></Blog>,},

  



 ]
}])
const App = () =>{

  return <RouterProvider router={router}></RouterProvider>


};

export default App;