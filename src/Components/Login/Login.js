import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../Config/firebaseConfig';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleLogin = () => {
        console.log('loging with google')
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
        <div>
            <h2>Hello Wiz or witch! Please login or register with your google account first.</h2>
            <button onClick={handleGoogleLogin}>Continue With Google</button>
        </div>
    );
};

export default Login;