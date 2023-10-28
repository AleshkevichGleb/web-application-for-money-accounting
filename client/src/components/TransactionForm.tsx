import { FC, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { Form, useLoaderData } from 'react-router-dom';
import { IResponseTransactionLoader } from '../types/types';
import CategoryModal from './CategoryModal';

interface IFormData {
    title: string,
    amount: undefined | number,
}

const TransactionForm:FC = () => {
    const {categories} = useLoaderData() as IResponseTransactionLoader;
    const [visibleModal, setVisibleModal] = useState<boolean>(false);
    const [formData, setFormData] = useState({
        title: '',
        amount: '',
    });

    const handleFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const {name, value} = e.target
        setFormData({...formData, [name]: value })

    }
    const handleSubmit = (): void => {
        setFormData({
            title: '',
            amount: '',
        })
    }   
    return (
        <div className='rounded-md bg-slate-800 p-4'> 
            <Form 
                onSubmit={handleSubmit}
                className='grid gap-2'
                method='post'
                action = '/transactions'
            >
                <label className='grid' htmlFor="title">
                    <input 
                        type="text" 
                        className='input' 
                        placeholder='Title...' 
                        name='title' 
                        required
                        // value={formData.title}
                        // onChange={handleFormData}
                    />
                </label>
                <label className='grid' htmlFor="amount">
                    <input 
                        type='number' 
                        className='input' 
                        placeholder='Amount...' 
                        name='amount' 
                        required
                        // value={formData.amount}
                        // onChange={handleFormData}
                    />
                </label>
                
               {categories?.length ?  (
                    <label htmlFor="category" className='grid'>
                        <span>Category</span>
                        <select className='input' name="category" required>
                            {categories.map((category) => (
                                <option key={category.id} value={category.id}>{category.title}</option>
                            ))}
                        </select>
                    </label> )
                :   <h2 className='mt-1 text-red-300'>To continue create a category first</h2>
                }

                <button onClick={() => {
                        
                    }} 
                    className='max-w-fit flex items-center gap-2 text-white/50 hover:text-white'>
                    <FaPlus
                />
                    <span onClick={() => setVisibleModal(true) }>Manage Categories:</span>
                </button>
                
                <div className='flex gap-4 items-center'>
                    <label className='cursor-pointer flex items-center gap-2'>
                        <input 
                            type="radio" 
                            name="type"
                            value={'income'}
                            className='form-radio text-blue-600'
                        />
                        <span>Income</span>
                    </label>
                    <label className='cursor-pointer flex items-center gap-2'>
                        <input 
                            type="radio" 
                            name="type"
                            value={'expense'}
                            className='form-radio text-blue-600'
                        />
                        <span>Expense</span>
                    </label>
                </div>

                <button className='btn btn-green max-w-fit mt-2'>Submit</button>
            </Form>
            {
                visibleModal && <CategoryModal type="post" setVisibleModal={setVisibleModal}/> 
            }
        </div>
    );
};

export default TransactionForm;