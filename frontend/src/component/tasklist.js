import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const TaskList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        let result = await fetch("http://localhost:5000/products");
        result = await result.json();
        setProducts(result);
    }

    const deleteProduct = async (id) => {
        let result = await fetch(`http://localhost:5000/product/${id}`, {
            method: "DELETE"
        });
        result = await result.json();
        if (result) {
            console.log(result);
            alert("Deleted");
            getProducts();
        }
    }

    const searchHandle = async (event) => {
        const key = event.target.value;
        if (key) {
            let result = await fetch(`http://localhost:5000/search/${key}`);
            result = await result.json();
            if (result) {
                setProducts(result);
            }
        } else {
            getProducts();
        }
    }

    return (
        <div className="Product-list">
            <h3>Product List</h3>
            <input type="text" className='search' placeholder='search' onChange={searchHandle} />
            <ul>
                <li>S no.</li>
               
                <li>Title</li>
                <li>Description</li>
                <li>Due Date</li>
                <li>Operation</li>
            </ul>
            {
                products.length > 0 ? products.map((item, index) =>
                    <ul key={item._id}>
                        <li>{index + 1}</li>
                        <li>{item.title}</li>
                        <li>{item.description}</li>
                        <li>{item.dueDate}</li>
                        <li>
                            <button onClick={() => deleteProduct(item._id)}>Delete</button>
                            <Link to={"/update/" + item._id}>Update</Link>
                        </li>
                    </ul>
                ) : <h1>No result found</h1>
            }
        </div>
    )
}

export default TaskList;
