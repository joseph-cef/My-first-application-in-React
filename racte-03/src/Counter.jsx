  import React , {useState} from 'react';
  
function Counter() {
    let [Counte , setCounte]= useState("0");
         const increment = ()=>{
            setCounte( Counte + 1)
          }
         const decrement = ()=>{
            setCounte( Counte - 1)
          }
         const reset = ()=>{
            setCounte(0)
          }
     return( 
        <>
        <div>
           <p className='count-display'>  {Counte}</p>
            <button className='counter-button' onClick={decrement}>decrement</button>
            <button className='counter-button' onClick={reset}>reset</button>
            <button className='counter-button' onClick={increment}>increment</button>
        </div>
        </>
    );
}

export default Counter;




