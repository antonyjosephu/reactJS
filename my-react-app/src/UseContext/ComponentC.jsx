import ComponentD from './ComponentD';
import Styles from './ComponentA.module.css'
function ComponentC(){
    return(
        <div className={Styles.box}>
            <h1>ComponentC</h1>
            <ComponentD/>

        </div>
    );
}
export default ComponentC
