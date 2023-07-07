import { createSlice } from '@reduxjs/toolkit'

import { collection, addDoc } from 'firebase/firestore';
import { db } from '../config/firebase';


export const firestoreReducer = createSlice({
    name: "db",
    initialState: [{
        transactionItem: "",
        transactionType: ""
    }],

    reducers: {
        addTransaction: async (state, action) => {
            try {
                const docRef = await addDoc(
                    collection(db, "transactions"),
                    action.payload
                );
                alert ("Added succesfully");
            } catch (err) { }

        },
    },
});

export const { addTransaction } = firestoreReducer.actions;

export default firestoreReducer.reducer