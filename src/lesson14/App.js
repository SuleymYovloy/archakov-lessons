import React from "react";

function Counter({value}) {

    const [count, setCount] = React.useState(0);
    // let count = 0;

    const plus = () => {
        // count += 1;
        // document.querySelector('h1').innerText = `Счетчик: ${count}`
        setCount(count + 1);
    }
    
    const minus = () => {
        // count -= 1;
        // document.querySelector('h1').innerText = `Счетчик: ${count}`
        setCount(count - 1);
    }

    return (
        <div>
            <h1>Счетчик: {count}</h1>
            <button onClick={plus}>+</button>
            <button onClick={minus}>-</button>
        </div>
    )
}

export default function App() {
    return (
        <Counter value={5}/>
    );
}