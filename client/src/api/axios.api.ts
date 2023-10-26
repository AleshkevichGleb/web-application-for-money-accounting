import axios from 'axios';
import { getTokenFromLocaleStorage } from '../helpers/localestorage.helper';

export const instance = axios.create({
    baseURL: 'http://localhost:3001/api',
    headers: {
        Authorization: 'Bearer' + getTokenFromLocaleStorage() || '',
    },

})