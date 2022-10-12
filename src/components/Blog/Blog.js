import React from 'react';

const Blog = () => {
    return (
        <div>
<h1 className='font-bold my-8 text-red-400 text-center text-3xl' >Question : 3</h1>
            <div className='border-gray-300 rounded-lg shadow-xl   mx-10 my-8 py-5 px-5 bg-sky-200'>


                <h1 className='font-bold py-5 '>1. what is the purpose of react ?</h1>
                <p><code className='text-red-500 '>Answer:</code> React is a JavaScript library developed by Facebook which, among other things, was used to build Instagram.com. Its aim is to allow developers to easily create fast user interfaces for websites and applications alike. The main concept of React. js is virtual DOM</p>
            </div>

<div  className='border-gray-300 rounded-lg shadow-xl   mx-10 my-8 py-5 px-5 bg-sky-200'>
    <h1 className='font-bold py-5'>2. what is usehref hook ?</h1>
    <p> <code className='text-red-500'>Answer:</code> The useHref hook returns a URL that may be used to link to the given to location, even outside of React Router. Tip: You may be interested in taking a look at the source for the "Link" component in react-router-dom to see how it uses useHref internally to determine its own href value.</p>
</div>
<div className='border-gray-300 rounded-lg shadow-xl   mx-10 my-8 py-5 px-5 bg-sky-200'>
    <h1 className='font-bold py-5'>3. how does context api work ?</h1>
    <p> <code className='text-red-500'>Answer:</code>  The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
</div>



        </div>
    );
};

export default Blog;