import { React,useState } from "react";
import "./counter.css"
function Counter(){
    const [count,setCount]=useState(0);
    function increaseCount(){
        setCount(count+1);
    }
    function decreaseCount(){
        setCount(count-1);
    }
    function resetCount(){
        setCount(0);
    }
return(
    <>
    <div className="counter-container-div">
        <h1 className="counter-heading"> Counter:{count}</h1>
        <button className="decrease-button" onClick={decreaseCount}>-</button>
        <button className="reset-button"  onClick={resetCount}>Reset</button>
        <button className="increase-button" onClick={increaseCount}>+</button>
    </div>
    </>
)
}
export default Counter;