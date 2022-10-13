import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import {Link} from 'react-router-dom';

const Quiz = () => {
    const quizCart = useLoaderData().data
    const {name,total,questions} =quizCart
console.log(questions)

    return (
        <div className='mt-3 text-center'>
            <div lassName=' tex-2xl  rounded-xl'>
               <h1 className=' tex-6xl text-sky-800 bg-sky-200 font-semibold py-2 mx-4'>quiz present {name}</h1>    
               <p className=' tex-3xl text-sky-800'>total question{total}</p>
             
              
             </div>
             <div>
            
                {
                    questions.map(question => <Question 
                    key ={question.id}
                    question={question}
                    ></Question>)
                }
                
                <Link
to='/'
className='px-4 py-1 bg-gray-200 text-gray-700 rounded-lg shadow-xl'
>
Back to homepage
</Link>
</div>
</div>)



                 
     
};

export default Quiz;