import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../Config/firebaseConfig';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import Header from '../Header/Header';


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleLogin = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                const newUser = { email: user.email, name: user.displayName, image: user.photoURL }
                setLoggedInUser(newUser)
                history.push(from)
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                console.log(errorCode, errorMessage, email)
            });
    }
    return (
        <>
            <Header></Header>
            <main>
                <div className="login">
                    <div className="form">
                        <h2>Login</h2>
                        <label htmlFor="email">Email:</label>
                        <input type="email" placeholder="enter your email" />
                        <label htmlFor="password">Password:</label>
                        <input type="password" placeholder="enter your email" />
                        <p>Remember Me forgot password?</p>
                        <button>Login</button>
                    </div>
                    <p>Or</p>
                    <button className="googlebtn" onClick={handleGoogleLogin}>Continue With Google</button>
                </div>
            </main>
        </>
    );
};

export default Login;