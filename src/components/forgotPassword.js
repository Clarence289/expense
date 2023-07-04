
import { useState } from "react";
import {auth} from'../config/firebase';
import { sendPasswordResetEmail } from "firebase/auth";


function ResetPassword(){

    const forgotPassword = (()=>{
        sendPasswordResetEmail(auth, email).then(()=>{
            alert("Check your email")
        }).catch((error)=>{
            
        })
    })

    const [email, setpassword] = useState('')
    return(
        <div className="container">
<h4>Reset your password</h4>

<input type="text" placeholder="Enter email" onChange={(event)=> setpassword(event.target.value)}/><br></br>
<button onClick={forgotPassword}>Reset password</button>
        </div>
    );
}
export default ResetPassword