import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signUp } from '../authReducer/auth';

function SignUp() {

    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');

    const dispatch = useDispatch();


    return (
        <div className='container'>
            <h1>Sign Up page</h1>

            <input 
            type="text" placeholder="Enter Email"
                onChange={(event) => setEmail(event.target.value)}
            />{" "}
            <br></br>
            <input 
            type="password" placeholder="Enter Password"
                onChange={(event) => setpassword(event.target.value)}
            />{" "}
            <br></br>

            <button onClick={() => dispatch(signUp(email, password))}>Sign up</button>
        </div>
    );
}
export default SignUp