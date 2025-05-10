import { useState } from 'react';
import './Counter.css'
import Reset from './Reset';

function Counter(){
    const [val,setVal] = useState(0);
    const increment = () =>{
        setVal(val+1);
    }
    const decrement = () =>{
        setVal(val-1);
    }
    const resetHandler = ()=>{
        setVal(0);
    }
    return(
        <div className='reset'>
            <div className='counter'>
                <div>
                    <button onClick={decrement}>-</button>
                </div>
                <div className='val'>
                    <p>{val}</p>
                </div>
                <div>
                    <button onClick={increment}>+</button>
                </div>
            </div>
            <Reset reset={resetHandler}></Reset>
        </div>
    );
}
export default Counter;