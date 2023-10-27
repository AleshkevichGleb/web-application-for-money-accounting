import { FC } from 'react';
import { FaBtc, FaSignOutAlt } from "react-icons/fa";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { removeTokenFromLocaleStorage } from '../helpers/localestorage.helper';
import { useAppDispatch } from '../hooks/redux-hooks';
import { useAuth } from '../hooks/useAuth';
import { logout } from '../store/user/user.slice';
const Header:FC = () => {
    const isAuth = useAuth();
    const navigate = useNavigate();

    const dispatch = useAppDispatch();
    const logoutHandler = () => {
        dispatch(logout())
        removeTokenFromLocaleStorage('token');
        toast.success('You logget out');
        navigate('/')
    }
    return (
        <header className='flex items-center bg-slate-800 p-4 shadow-sm backdrop-blur-sm'>
            <Link to = '/'>
                <FaBtc size = {20}/>
            </Link>

            {
                isAuth && (
                    <nav className='ml-auto'>
                        <ul className="flex items-center gap-5 mr-10">
                            <li>
                                <NavLink 
                                    to = '/' 
                                    className={({isActive}) => isActive ? 'text-white' : 'text-white/70'}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to = '/transactions'
                                    className={({isActive}) => isActive ? 'text-white' : 'text-white/70'}
                                >
                                    Transaction
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to = '/categories'
                                    className={({isActive}) => isActive ? 'text-white' : 'text-white/70'}
                                >
                                    Categories
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                )
            }

            {
                isAuth 
                ?   (<button className='btn btn-red' onClick={logoutHandler}>
                        <span>Log out</span>
                        <FaSignOutAlt/>
                    </button>)
                :   (<Link className='py-2 text-white/70 hover:text-white ml-auto' to = '/auth'>
                        Log in/Log out
                    </Link>)
            }
        </header>
    );
};

export default Header;