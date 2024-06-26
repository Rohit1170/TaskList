import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {
    const navigate = useNavigate();
    return (
        <div>
           
            {
                <ul className="nav-ul" >
                    <li><Link to="/">View List </Link> </li>
                    <li><Link to="/add">add</Link> </li>
                    
                </ul>
              
            }
        </div>
    )
}
export default Nav;