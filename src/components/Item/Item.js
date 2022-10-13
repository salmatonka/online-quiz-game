import React from 'react';
import { Link } from 'react-router-dom';
const Item = ({item}) => {
    const {name,logo,id,total} = item
    return (
        <div>
           <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 bg-sky-200">
	<img src={logo} alt="" className="  object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="">
			<h3 className="text-2xl font-semibold tracking-wide">
                Name: {name}</h3>
			<h4>Total: {total}</h4>
		</div>
		<Link to={`/quiz/${id}`} type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide bg-blue-500 border-gray-300 rounded-lg shadow-xl ">Quiz start</Link>
	</div>
</div> 

        </div>
    );
};

export default Item;