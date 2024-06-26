import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddTask = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleData = async () => {
        if (!title || !description || !dueDate) {
            setError(true);
            return false;
        }

        console.warn(title, description, dueDate);

        const result = await fetch("http://localhost:5000/add-task", {
            method: "POST",
            body: JSON.stringify({ title, description, dueDate }),
            headers: {
                "Content-Type": "application/json",
            }
        });

        const data = await result.json();
        console.log(data);
        navigate('/');
    }

    return (
        <div className="product">
            <h1>Add Task</h1>
           
            <input 
                type="text" 
                placeholder='Enter Title' 
                value={title} 
                className='inputbox'
                onChange={(e) => setTitle(e.target.value)} 
            />
            {error && !title && <span className="invalid-input">Enter valid title</span>}

            <textarea 
                placeholder='Enter Description' 
                value={description} 
                className='inputbox'
                onChange={(e) => setDescription(e.target.value)} 
            />
            {error && !description && <span className="invalid-input">Enter valid description</span>}

            <input 
                type="date" 
                placeholder='Enter Due Date' 
                value={dueDate} 
                className='inputbox'
                onChange={(e) => setDueDate(e.target.value)} 
            />
            {error && !dueDate && <span className="invalid-input">Enter valid due date</span>}

            <button onClick={handleData} className="inputbox submitbtn">Add Task</button>
        </div>
    );
}

export default AddTask;
