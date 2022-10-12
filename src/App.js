import React from 'react';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Header from './components/Header/Header';

const router = createBrowserRouter([{
  path:'/',
 element:<Header></Header>,
}])
const App = () =>{

  return <RouterProvider router={router}></RouterProvider>


};

export default App;