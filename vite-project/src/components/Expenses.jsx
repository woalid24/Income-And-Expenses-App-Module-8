import { useState } from 'react';
import Menu from '../Menu';


const Expenses = () => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [ExpensesList, setExpensesList] = useState([]);
    const addToList = () => {
        if (!title || !amount) {
            alert("Title and Amount are required for submission to add a new Item");
        }else if (isNaN(Number(amount))) {
            alert("Amount must be a valid number");
        } else {
            const newExpensesItem = {
                title: title,
                amount: amount,
            };
            setExpensesList([...ExpensesList, newExpensesItem]);
            setTitle('');
            setAmount('');
        }
    };
    const handleDeleteItem = (index) => {
        const updatedList = ExpensesList.filter((_, i) => i !== index);
        setExpensesList(updatedList);
    };
    return (
        <div>
            <Menu />
            
                <div className='py-40 flex flex-col items-center '>
                    <input type="text" placeholder="Input Your Product Title" value={title} onChange={(e) => setTitle(e.target.value)} className="input input-bordered input-primary w-full max-w-xs" />
                    <input type="text" placeholder="Product Expenses Amount" value={amount} onChange={(e) => setAmount(e.target.value)} className="input input-bordered input-accent w-52 max-w-xs m-4 " />
                    <button className="btn btn-outline btn-success btn-wide" onClick={addToList}>Success</button>
                </div>
                <div className='flex-wrap flex justify-center'>
                {ExpensesList.map((item, index) => (
                    <div key={index} className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{item.title}</h2>
                            <p>{item.amount}</p>
                            <div className="card-actions">
                                <button
                                    className="btn btn-error"
                                    onClick={() => handleDeleteItem(index)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    );
};

export default Expenses;