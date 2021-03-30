import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../logo.png'

const Header = () => {
    const [loggedInUser] = useContext(UserContext)

    return (
        <header>
            <div className="logo">
                <Link to='/'>
                    <img src={logo} alt="" />

                </Link>
            </div>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/orders'>Orders</Link>
                <Link to='/admin'>Admin</Link>
                <Link to='/deals'>Deals</Link>
                {
                    loggedInUser.email ? <img src={loggedInUser.image} alt=""></img> :
                        <Link to='/login'>Login</Link>
                }
            </nav>
        </header>
    );
};

export default Header;