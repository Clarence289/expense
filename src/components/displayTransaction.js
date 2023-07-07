import { useEffect } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { fetchData } from "../firestoreReducers/data";

function DisplayTransaction (props){

    const dispatch = useDispatch();
    const {loading, error, data} = useSelector((state)=>state.data)

    useEffect(()=>{
        dispatch(fetchData());

    })
    return(
        <div>
            <h4>History of your transaction</h4>
            
            {data.map((data)=>(
                <div>
                <h6>{data.transactionItem}</h6>
                <h6>{data.amount}</h6>
                <h6>{data.transactionType}</h6>
        </div>
))}

<div>

</div>
    
    </div>
    )
}

export default DisplayTransaction