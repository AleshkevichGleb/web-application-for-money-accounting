import { FC, PropsWithChildren } from 'react';
import { GoAlertFill } from "react-icons/go";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const ProtectedRoute:FC<PropsWithChildren> = ({children}) => {
    const navigate = useNavigate();
    const isAuth = useAuth();
    return (
        <>
            {
                isAuth
                ? children
                : (
                    <div className='mt-40 flex flex-col items-center justify-center gap-10'>
                        <h1 className='text-2xl'>To view this page you must be logged in.</h1>
                        <GoAlertFill size = {150}/>
                        <button className='btn btn-green' onClick={() => navigate('/auth')}>Login</button>
                    </div>
                )
            }   
        </>
    );
};

export default ProtectedRoute;