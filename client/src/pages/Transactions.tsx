import { FC } from 'react';
import { instance } from '../api/axios.api';
import TransactionForm from '../components/TransactionForm';
import { ICategory } from '../types/types';

export const transactionLoader = async() => {
    const categories = await instance.get<ICategory[]>('/categories')
    const data = {
        transactions: categories.data,
    } 
    return data
}

export const transactionAction = async({ request }: any) => {
    const data = {} 
    return data
}

const Transactions:FC = () => {
    
    return (
        <>
            <div className='mt-4 grid grid-cols-3 items-start gap-4'>
                <div className='col-span-2 grid'>
                    <TransactionForm/>
                </div>
                <div className='rounded-md bg-slate-800 p-3'>
                    <div className='grid grid-cols-2 gap-3'>
                        <div>
                            <p className='uppercase text-md font-bold text-center'>
                                Total Income
                            </p>
                            <p className='bg-green-600 p-1 rounded-sm text-center mt-2'>
                                1000$
                            </p>
                        </div>
                        <div>
                            <p className='uppercase text-md font-bold text-center'>
                                Total Expense
                            </p>
                            <p className='bg-red-500 p-1 rounded-sm text-center mt-2'>
                                1000$
                            </p>
                        </div>
                    </div>    
                    <>Chart</>
                </div>    
            </div> 
            
            <h2>Table</h2>
        </>
    );
};

export default Transactions;