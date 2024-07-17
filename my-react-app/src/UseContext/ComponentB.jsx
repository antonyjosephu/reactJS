import React,{useContext} from 'react';
import { UserContext } from './ComponentA';
import ComponentC from './ComponentC';
import Styles from './ComponentA.module.css'
function ComponentB(){
    const user=useContext(UserContext);
    return(
        <div className={Styles.box}>
            <h1>ComponentB</h1>
            <h2>{`Hello again ${user}`}</h2>
            <ComponentC/>

        </div>
    );
}
export default ComponentB
