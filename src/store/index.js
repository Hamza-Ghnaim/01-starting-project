import { configureStore, createSlice } from "@reduxjs/toolkit";

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

})

const initialAuthState = {isAuthenticated:false};

const authSlice = createSlice({
    name:'authentication',
    initialState:initialAuthState,
    reducers:{
        login (state){
            state.isAuthenticated = true;
        },
        logout (state){
            state.isAuthenticated = false;
        }
    }

})

const store = configureStore({
    reducer:{counter:counterSlice.reducer,auth:authSlice.reducer}
});

export const counterAction = counterSlice.actions;
export const authAction = authSlice.actions;

export default store;


