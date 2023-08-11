import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./slices/CounterSlice";

export const store = configureStore ({
    reducer : {
        counter : CounterSlice // key-value pair and key should be same
    },
})


// configureStore create global store
// To list all the slices
// key should be same
// Store - Centralised entity (global state)