import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {counter : 0 , showCounter:true};

const counterSlice = createSlice({
    name:'counter',
    initialState:initialCounterState,
    reducers:{
        increament(state){
            state.counter++;
        },
        decreament(state){
            state.counter--;
        },
        Increament5(state,action){
            state.counter=state.counter+action.payload;
        },
        toggle(state){
            state.showCounter=!state.showCounter;
        },
    }

});
export default counterSlice;
export const counterAction = counterSlice.actions;
