import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateTask = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [dueDate, setDueDate] = useState("");
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getProduct();
    }, []);

    const getProduct = async () => {
        let result = await fetch(`http://localhost:5000/product/${params.id}`);
        result = await result.json();
        console.log(result);
        setTitle(result.title);
        setDescription(result.description);
        setDueDate(result.dueDate);
    }

    const updateData = async () => {
        console.log( title, description, dueDate);

        let result = await fetch(`http://localhost:5000/product/${params.id}`, {
            method: 'PUT',
            body: JSON.stringify({ title, description, dueDate }),
            headers: {
                'Content-Type': 'application/json',
            }
        });

        result = await result.json();
        console.log(result);
        navigate('/');
    }

    return (
        <div className="product">
            <h1>Update Product and Task</h1>
           
            <input type="text" placeholder='Enter Title' value={title} className='inputbox'
                onChange={(e) => { setTitle(e.target.value) }} ></input>

            <textarea placeholder='Enter Description' value={description} className='inputbox'
                onChange={(e) => { setDescription(e.target.value) }} ></textarea>

            <input type="date" placeholder='Enter Due Date' value={dueDate} className='inputbox'
                onChange={(e) => { setDueDate(e.target.value) }} ></input>

            <button onClick={updateData} className="inputbox submitbtn">Update Product and Task</button>
        </div>
    )
}

export default UpdateTask;
