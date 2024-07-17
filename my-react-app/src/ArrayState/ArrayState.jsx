import React, { useState } from 'react';

function ArrayState(){
    const [fruits,setFruits]=useState(["Apple","Orange","Banana"]);
    function handleAddFruit(){
        const newFruit=document.getElementById("fruitinput").value;
        document.getElementById("fruitinput").value="";
         setFruits (f => ([...f,newFruit]));
    }
    function handleRemoveFruit(index){
        setFruits(fruits.filter((_,i) => i !== index));
    }
    return(
        <div>
            <h2>List of Fruits</h2>
            <ul>
                {fruits.map((fruit,index) => 
                <li key={index} onClick={() => handleRemoveFruit(index)}> {fruit}</li>)} 
            </ul>
        <input type="text" id="fruitinput" placeholder="Enter Fruit Name"/>
        <button onClick={handleAddFruit}>Add Food</button>
        </div>
    );
}
export default ArrayState