function DisplayTransaction (props){
    return(
        <div>
            <h4>History of your transaction</h4>
            
            {props.transactions.map((data)=>(
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