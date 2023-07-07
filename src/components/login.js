import {signInWithEmailAndPassword} from 'firebase/auth';
import { useState } from 'react';
import {useHistory, Link} from 'react-router-dom';
import {auth} from '../config/firebase'

import { signIn } from '../authReducer/auth';
import {useDispatch} from 'react-redux';

function Login (){

const history = useHistory();
const [email, setEmail]= useState('');
const [password, setpassword] = useState('')

const dispatch = useDispatch();
  
    return(

        <div className='container'>
            <h1>Login Page</h1>
            <input type="text" placeholder="Enter Email" onChange={(event)=>setEmail(event.target.value)}/><br></br>
            <input type="password" placeholder="Enter password" onChange={(event)=>setpassword(event.target.value)}/><br></br>
            <button onClick={()=>dispatch(signIn(email, password))}>Login</button><br></br><br></br>
            <Link to="/forgotpassword">Forgot password</Link>
            <Link to="/SignUp">Don't have an account : Sign Up</Link>
        </div>
    );
}

export default Login