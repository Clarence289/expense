import { useHistory, Link } from "react-router-dom";

function Login (){
    const history = useHistory();

    const goToHomePage =(()=>{
        history.push('/home')

     })
    
    return(

        <div>
            <h1>Login Page</h1>

            <button onClick={goToHomePage}>Go to home page</button><br></br><br></br>
            <Link to="/SignUp">Don't have an account : Sign Up</Link>
        </div>
    );
}

export default Login