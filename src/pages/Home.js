import React from 'react'
import ProductList from "../components/ProductList";

const Home = () => {
    return (
        <>
            <main>
                <ProductList /> {/* ดึงหน้า ProductList จาก components/*/} 
            </main>
        </>
    );

};
export default Home;
