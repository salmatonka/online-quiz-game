import React from 'react';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
const QuizOption = ({option,correctAnswer}) => {
  const correctAddToHandle =()=>{
if(option=== correctAnswer){
  toast("It is true!!")
}
else{
  toast("It is false!!")
}
  }

    return (
     
<button onClick={()=>correctAddToHandle()} className="bg-white py-2 rounded-lg text-sky-800 p-2 mx-5 my-2  "> 
  

<p className='text-1xl text-center '>{option}</p>

 
<ToastContainer autoClose={1000}></ToastContainer>
</button>



        
    );
};

export default QuizOption;