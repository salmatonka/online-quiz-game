import React from 'react';
import { useLoaderData,Link } from 'react-router-dom';
import {LineChart,Line,XAxis,YAxis,Tooltip} from 'recharts';

const ReChart = () => {
const chart =useLoaderData().data;

console.log(chart)

    return (
        <div className=' lg:mx-80 py-10 mx-auto '>
            
<span className='text-2xl text-purple-300'>ReChart Analytics</span>
     


   <LineChart  width={310} height={280} data={chart}
    
   >
   <Line type="monotone" dataKey="total" stroke="#8884d8" activeDot={{ r: 8 }} />
   <XAxis dataKey="name"></XAxis>
   <YAxis></YAxis>
<Tooltip></Tooltip>

   </LineChart>
  
              
   <Link
to='/'
className='px-4 my-6 py-3 sm:px-1 rounded bg-purple-200 text-gray-900'
>
Back to homepage
</Link>

</div>



        


    );
};

export default ReChart;