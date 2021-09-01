import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to='/'>Blessing</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to='/'>Home </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/Signup'>SignUP</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/Signin'>SignIN</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/Products'>Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/Movies'>Movies</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/Ref'>Ref</Link>
                        </li>
                        
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
