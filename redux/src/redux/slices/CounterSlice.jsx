import {createSlice} from "@reduxjs/toolkit";

const initialState = { 
    value : 0,
}

// Slice Behaviour 

export const CounterSlice=createSlice({
    
    name: "counter",

    initialState,

    reducers : {
        increment : (state) => {
            state.value+=1;
        },
        decrement : (state) => {
            state.value-=1;
        }
    }
});
// Destructuring
// Action creators are generated for each reducer function

export const {increment, decrement} = CounterSlice.actions;
export default CounterSlice.reducer;




// we need to export all the functions from action creator and reducer as well