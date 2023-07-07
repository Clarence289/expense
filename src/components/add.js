
import { useState } from "react";
import {db} from '../config/firebase';
import {collection, addDoc} from 'firebase/firestore';
import { addTransaction } from "../firestoreReducers/data";
import { useDispatch } from "react-redux";


function AddTransaction(props) {

    const[transactionItem, setTransactionItem]= useState('');
    const[amount, setAmount]=useState('');
    const[transactionType, setTransactionType]=useState('');

    const dispatch = useDispatch();

    const add=(async() =>{

      dispatch(addTransaction({
        transactionItem: transactionItem,
        amount: amount,
        transactionType: transactionType
      }))

     })

  return (
    <div>
        <h5 style={{paddingTop:"25px"}}>Add a new transaction</h5> 
<br></br>
        <input type="text" placeholder="Enter amount" onChange={(event)=> setTransactionItem(event.target.value)}/><br></br><br></br>
       <input type="text" placeholder="Enter amount"  onChange={(event)=> setAmount(event.target.value)}/>
        <br></br>
        <select onChange={(event)=> setTransactionType(event.target.value)}>
        <option>Income</option>
        <option>Expense</option>
        </select> 
    <br></br><br></br>
        <button onClick={add} className="addBtn">Add a transaction</button>
    </div>
  )
}

export default AddTransaction