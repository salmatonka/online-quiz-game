import React from 'react';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Error from './components/Error/Error';
import ReChart from './components/ReChart/ReChart';

import Home from './components/Home/Home';

import Blog from './components/Blog/Blog';
import Main from './components/Main/Main';
import Quiz from './components/Quiz/Quiz'
import QuizOption from './components/QuizOption/QuizOption';



const router = createBrowserRouter([{
  path:'/',
 element:<Main></Main>,
 errorElement:<Error></Error>,
 
 children:[
  

   {path:'/',
   loader:(async)=>{return fetch ('https://openapi.programming-hero.com/api/quiz')},
  element:<Home></Home>
  
  }, 
   
   {path:'/home',
   loader:(async)=>{return fetch ('https://openapi.programming-hero.com/api/quiz')},
  element:<Home></Home>
  
  }, 
   
  

   {path:'/quiz/:quizId',
   loader: async({params})=> {
    return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
   },
    element:<Quiz></Quiz>,},

  {path:'/rechart',
  loader:(async)=>{return fetch ('https://openapi.programming-hero.com/api/quiz')},
   element: <ReChart></ReChart>,},

  {path:'/blog',
   element: <Blog></Blog>,}]

   
}])
const App = () =>{

  return <RouterProvider router={router}></RouterProvider>


};

export default App;