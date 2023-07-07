import { createSlice } from "@reduxjs/toolkit";

import { collection, addDoc, getDocs } from "firebase/firestore";


import {db} from '../config/firebase'

const initialState = {
    loading: false,
    error: null,
    data: [],
}
const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers:{

        addData :(state, action)=>{
            state.data.push (action.payload)

        },

        fetchDataStart(state){
            state.loading = true;
            state.error = null
        },
        fetchDataSuccess(state, action){
            state.loading = false;
            state.data = action.payload;
        },
        fetchDataFailure(state, action){
            state.loading = false;
            state.error = action.payload
        }
    }
})

export const {fetchDataStart, fetchDataFailure, fetchDataSuccess, addData} =dataSlice.actions;

export const fetchData = () => async (dispatch)=>{
    dispatch(fetchDataStart())
    try{

        const querySnapShot = await getDocs(collection(db, "transaction"));
        const data = querySnapShot.docs.map((doc)=>({
            id: doc.id,
            ...doc.data()
        }))
        dispatch(fetchDataSuccess(data));
    }catch(error){
        dispatch(fetchDataFailure(error));
    }
};
export const addTransaction = (data)=> async (dispatch)=>{

    try{
        const docRef = await addDoc(collection(db, "transaction"), data);
        dispatch(addData(data));
        alert ("Added successfully");

    }catch (error){

    }
    
    
}
export default dataSlice.reducer;