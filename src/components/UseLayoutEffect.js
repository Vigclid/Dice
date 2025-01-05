import {useEffect, useLayoutEffect, useState} from "react";


const UserLayoutEffect = () => {
    const [count, setCount] = useState(0);

    useLayoutEffect(() => {
        if (count > 3) setCount(0);
    },[count])

    const increaseCount = () => setCount( count + 1 );

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increaseCount}>Run</button>
        </div>
    )
}

export default UserLayoutEffect;