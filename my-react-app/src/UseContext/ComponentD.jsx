import React,{useContext} from 'react';
import { UserContext } from './ComponentA';
import Styles from './ComponentA.module.css'
function ComponentD(){
    const user=useContext(UserContext);
    return(
        <div className={Styles.box}>
            <h1>ComponentD</h1>
            <h2>{`Bye ${user}`}</h2>

        </div>
    );
}
export default ComponentD
