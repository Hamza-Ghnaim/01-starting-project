import { createStore } from "redux";
import { createSlice } from "@reduxjs/toolkit";


const initialState = {counter : 0 , showCounter:true};
createSlice({
    name:'counter',
    initialState,
    reducers:{
        increament(state){
            state.counter++;
        },
        decreament(state){
            state.counter--;
        },
        Increament5(state,action){
            state.counter=state.counter+action.amount;
        },
        toggle(state){
            state.showCounter=!state.showCounter;
        },
    }

})

const counterReducer = (state = initialState,action)=>{
    if (action.type === 'increament') {
        return {
            counter:state.counter+1,
            showCounter:state.showCounter
        };
    }

    if (action.type === 'Increament5') {
        return {
            counter:state.counter +action.amount,
            showCounter:state.showCounter
        };
    }
    if (action.type === 'toggle'){
        return({
            counter:state.counter,
            showCounter:!state.showCounter
        })
    }

    if (action.type === 'decreament') {
        return {
            counter:state.counter-1,
            showCounter:state.showCounter
        };
    }

    else return state;
};

const store = createStore(counterReducer);

export default store;


