import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { getTokenFromLocaleStorage } from './helpers/localestorage.helper';
import { useAppDispatch } from './hooks/redux-hooks';
import { router } from './router/router';
import { AuthService } from './services/auth.service';
import { login, logout } from './store/user/user.slice';

function App() {
  const dispatch = useAppDispatch();
  const checkAuth = async () => {
    const token = getTokenFromLocaleStorage()
    try {
      if(token) {
        const data = await AuthService.getProfile();

        if(data) {
          dispatch(login(data))
        } else {
          dispatch(logout())
        }
      }
    }catch(err) {
      console.log(err);
    }
  }

  useEffect(() => {
    checkAuth();
  }, []);
  
  return <RouterProvider router={router}/>
}

export default App
  