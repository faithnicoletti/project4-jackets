import { Link } from 'react-router-dom'
import React from 'react'
import "../../App.css"

export default function NavBar() {
    return (
        <nav>
            <Link to="/">All Jackets</Link>
            &nbsp; | &nbsp;
            <Link to="/custom">Customize Your Own?</Link>
            &nbsp; | &nbsp;
            <Link to="/checkout">Checkout</Link>
            &nbsp; | &nbsp;
            <Link to="/login">Login</Link>
            &nbsp; | &nbsp;
            <Link to="/sign-up">Sign-up</Link>
        </nav>
    );
}