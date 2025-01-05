import {useRef, useState} from "react";


const Learn_UseRef = () => {

    const [timer,setTimer] = useState(60);

    let timerID = useRef();

    const handleStart = () => {
        timerID.current = setInterval(()=>{

            setTimer(prev => prev-1);
            },500)
    }

    const handleStop = () => {
        clearInterval(timerID.current);
    }
    return (
        <div style={{ paddingLeft: "5%" }}>
            <h1>{timer}</h1>
            <button onClick={() => handleStart()}>Start</button>
            <button onClick={() => handleStop()}>Stop</button>
        </div>
    )
}

export default Learn_UseRef;
