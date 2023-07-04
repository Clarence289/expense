import AddTransaction from "./add";
import DisplayTransaction from "./displayTransaction";

import {getAuth, signOut} from 'firebase/auth';
import {auth} from '../config/firebase';
import { useHistory } from "react-router-dom";
import { Currency } from "./currency";


function Home(props){

    const history = useHistory()

    const logOut = (()=>{
        signOut(auth).then(()=>{
            history.push('/')
        })
    })
    return(
        <div>
            <i 
            onClick={logOut}
            class= "bi bi-box-arrow-inright"
            style={{float: "right", fontSize: "40px"}}
            ></i>
            <div className="container">
            <DisplayTransaction transactions={props.transactions}/>
            <AddTransaction add={props.add}/>
        </div>
        </div>
    )


}
export default Home