import React, {useState,useEffect,useRef} from 'react';
function UseRef(){
    const inputRef1=useRef(null);
    const inputRef2=useRef(null);
    const inputRef3=useRef(null);
    useEffect(()=>{
        console.log("Component Rendered");
        
    });
    function handleClick1(){
      inputRef1.current.focus();
      inputRef1.current.style.backgroundColor="red";
      inputRef2.current.style.backgroundColor="";
      inputRef3.current.style.backgroundColor="";
    
    }
    function handleClick2(){
        inputRef2.current.focus();
        inputRef1.current.style.backgroundColor="";
        inputRef2.current.style.backgroundColor="red";
        inputRef3.current.style.backgroundColor="";
      
      }
      function handleClick3(){
        inputRef3.current.focus();
        inputRef1.current.style.backgroundColor="";
        inputRef2.current.style.backgroundColor="";
        inputRef3.current.style.backgroundColor="red";
      
      }
    return(
       <div>
         <button onClick={handleClick1}>Click Me1</button>
         <input ref={inputRef1}/><br/>
         <button onClick={handleClick2}>Click Me2</button>
         <input ref={inputRef2}/><br/>
         <button onClick={handleClick3}>Click Me3</button>
         <input ref={inputRef3}/><br/>
       </div>
       
    );

}
export default UseRef