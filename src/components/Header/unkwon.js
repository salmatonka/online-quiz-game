// import {Link} from 'react-router-dom';
// import React, { useState } from 'react';

// const Header = () => {
//     const [open, setOpen] = useState(false)
//     return (
        
//             <nav className='px-5 py-5 bg-sky-200 shadow-lg'>
//                 <div className=' relative flex items-center justify-between'>
//                <Link to='/' className='inline-flex items-center'>
//                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
//   <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
//   <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z" />
// </svg>
// <span className='px-2 text-xl font-bold uppercase '>Online Quiz Game </span>
//                </Link>
//                     <ul className='flex items-center hidden font-medium  space-x-8 lg:flex'>
//                         <li>
//                             <Link to='/'>Home</Link>
//                         </li>
//                         <li>
//                             <Link to='/topicsCart'>TopicsCart</Link>
//                         </li>
//                         <li>
//                             <Link to='/quiz'>Quiz</Link>
//                         </li>
//                         <li>
//                             <Link to='/rechart'>Rechart</Link>
//                         </li>
//                         <li>
//                             <Link to='/blog'>Blog</Link>
//                         </li>
//                     </ul>

//                     <div className='lg:hidden'>
//           <button
//             aria-label='Open Menu'
//             title='Open Menu'
//             className='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50'
//             onClick={() => setOpen(true)}
//           >
//             <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
//               <path
//                 fill='currentColor'
//                 d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
//               />
//               <path
//                 fill='currentColor'
//                 d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
//               />
//               <path
//                 fill='currentColor'
//                 d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
//               />
//             </svg>
//           </button>
//           {isMenuOpen && (
//             <div className='absolute top-0 left-0 w-full'>
//               <div className='p-5 bg-white border rounded shadow-sm'>
//                 <div className='flex items-center justify-between mb-4'>
//                   <div>
//                   <Link to='/' className='inline-flex items-center'>
//                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
//   <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
//   <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z" />
// </svg>
// <span className='px-2 text-xl font-bold uppercase '>Online Quiz Game </span>
//                </Link>
            
//                 </div>
//                 <div>

//                 <button
//             aria-label='Open Menu'
//             title='Open Menu'
//             className='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50'
//             onClick={() => setOpen(true)}
//           >
//             <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
//               <path
//                 fill='currentColor'
//                 d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
//               />
//               <path
//                 fill='currentColor'
//                 d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
//               />
//               <path
//                 fill='currentColor'
//                 d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
//               />
//             </svg>
//           </button>





//                 </div>
//                 </div>
//                 </div>
//                 </div>
//             </nav>
       
//     );
// };

// export default Header;