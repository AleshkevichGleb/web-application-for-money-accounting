import { FC } from 'react';
import { Form } from 'react-router-dom';
import { toast } from 'react-toastify';

interface CategoryModalProps {
    type: 'post' | 'patch',
    id?: number,
    setVisibleModal: (visible: boolean) => void,
}

const CategoryModal: FC<CategoryModalProps> = ({type, id, setVisibleModal}) => {
    console.log(type);
    
    const handleSubmit = () => {
        setVisibleModal(false);
        toast.success(`You ${type === 'post' ? 'created a new ' : 'updated a '}post`)
    }

    return (
        <div className='fixed bottom-0 left-0 right-0 top-0 flex h-full w-full justify-center items-center bg-black/50'>
            <Form 
                className='grid w-[300px] gap-2 p-5 rounded-md bg-slate-900 p-5'
                action='/categories'
                method={type}
                onSubmit={handleSubmit}
            >
                <label>
                    <small>Category title</small>
                    <input 
                        className='input w-full' 
                        type="text" 
                        name="title"
                        placeholder='Title...'
                    />
                    <input type="hidden" value={id} name = 'id'/>
                </label>
                <div className='flex items-center gap-2'>
                    <button className='btn btn-green' type='submit'>
                        {type === 'patch' ? 'Save' : 'Create'}
                    </button>
                    <button onClick={() => setVisibleModal(false)} className='btn btn-red' type='submit'>
                        Close
                    </button>

                </div>
            </Form>
        </div>
    );
};

export default CategoryModal;