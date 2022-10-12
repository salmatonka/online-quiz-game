import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import { createContext } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export const  CartContext =createContext([])

const MainHome = () => {
    const carts = useLoaderData() ;
console.log(carts)
    return (
        <CartContext.Provider value={carts} >
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </CartContext.Provider>
    );
};

export default MainHome;