import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://img.freepik.com/free-vector/finance-department-employees-are-calculating-expenses-company-s-business_1150-41782.jpg?w=1060&t=st=1690190288~exp=1690190888~hmac=7a3dc6dca2050ed91de2a6883d268ab054e342d16fe7bc33e6cec6a2f1e5622f)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-extrabold">Income And Expenses App</h1>
                        <p className="mb-5 text-lime-500 ">Whenever expenses become greater than income, it is inevitable that liabilities will become greater than assets. The expenses to live your life is not high. However, the expenses you live on living the others' lifestyle is higher.</p>
                        <button className="btn btn-primary"><NavLink to="/Income">Get Started</NavLink></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;