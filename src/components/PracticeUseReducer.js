import {useReducer, useState} from "react";


const initialState = 0;

//ACTION
const UP_ACTION = "up";
const DOWN_ACTION = "down";

//Reducer
const reducer = (state,action) => {

    switch(action){
        case UP_ACTION:
            return state+1;

        case DOWN_ACTION:
            return state-1;

        default:
            throw new Error(`Unknown action: ${action}`);
    }
}



const PracticeUseReducer = () => {
    const [count, dispatch] = useReducer(reducer,initialState);
    console.log("hello");
    return (
        <div style={{ paddingLeft: "5%" }}>
            <h1>{count}</h1>
            <button onClick={() => dispatch(UP_ACTION)}> up </button>
            <button onClick={() => dispatch(DOWN_ACTION)}> down </button>
        </div>
    )
}

export default PracticeUseReducer;