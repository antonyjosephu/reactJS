import React, {useState} from 'react';
function ObjectState(){
    const[car,setCar]=useState({year:2019,
                                make:"Honda",
                                model:"City"});
           function handleYearChange(event){
             setCar(c =>({...c,year:event.target.value}));
           }     
           function handleMakeChange(event){
              setCar (c =>({...c,make:event.target.value}));
             
           }  
           function handleModelChange(event){
            setCar (c =>({...c,model:event.target.value}));
             
           }          
    return(<div>
        <p>Your favourite car is: {car.year} {car.make} {car.model}</p>
       <input type="number" value={car.year} onChange={handleYearChange}/><br/>
       <input type="string" value={car.make} onChange={handleMakeChange}/><br/>
       <input type="string" value={car.model} onChange={handleModelChange}/><br/>
    </div>);
}
export default ObjectState