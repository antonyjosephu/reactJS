import React, {useState,createContext} from 'react';
import ComponentB from './ComponentB.jsx'
import Styles from './ComponentA.module.css'
export const UserContext =createContext(); 
function ComponentA(){
    const [user,setUser]=useState("Antony");
    return(
        <div className={Styles.box}>
            <h1>ComponentA</h1>
            <h2>{`Hello ${user}`}</h2>
            <UserContext.Provider value={user}>
            <ComponentB/>
            </UserContext.Provider>
           

        </div>
    );
}
export default ComponentA
