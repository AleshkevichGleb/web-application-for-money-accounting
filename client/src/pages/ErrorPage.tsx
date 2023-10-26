import { FC } from 'react';
import { Link } from 'react-router-dom';
import errorPageImg from "../assets/errorPage.png";

const ErrorPage:FC = () => {
    return (
        <div className='min-h-screen bg-slate-900 font-roboto text-white flex justify-center items-center flex-col gap-5'> 
            <img src={errorPageImg} alt="errorPage" />
            <Link to ='/' className='bg-sky-500 rounded-md px-8 py-2 hover:bg-sky-600'>Back</Link>
        </div>
    );
};

export default ErrorPage;