import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex items-center gap-3 justify-center'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/login'>Login</NavLink>
        </div>
    );
};

export default Navbar;