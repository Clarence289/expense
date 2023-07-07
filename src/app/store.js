import { ConfigureStore, configureStore } from '@reduxjs/toolkit'
import authSlice from '../authReducer/auth';
import firestoreSlice from '../firestoreReducers/firestore';

import dataSlice from '../firestoreReducers/data';


export const store = configureStore({
    reducer:{
        authentication: authSlice,
        firestore: firestoreSlice,
        data: dataSlice
    }
})
