import React, {useState,useEffect,useRef} from 'react'
import Styles from './StopWatch.module.css'
function StopWatch(){
    const [isRunning, setIsRunning]=useState(false);
    const [elapsedTime,setElapsedTime]=useState(0);
    const intervaldRef=useRef(null);
    const startTimeRef=useRef(0);
    useEffect(()=>{
        if(isRunning){
            intervaldRef.current=setInterval(()=>{
                setElapsedTime(Date.now()-startTimeRef.current);
        },10)
        }
        return() =>{
            clearInterval(intervaldRef.current);

        }


    },[isRunning]);
    function start(){
        setIsRunning(true);
        startTimeRef.current=Date.now()-elapsedTime;
    }
    function stop(){
        setIsRunning(false);

    }
    function reset(){
        setElapsedTime(0);
        setIsRunning(false);

    }
    function formatTime(){
        let hours= Math.floor(elapsedTime/(1000*60*60));
        let minutes= Math.floor(elapsedTime/(1000*60)%60);
        let seconds= Math.floor(elapsedTime/(1000)%60);
        let milliseconds= Math.floor((elapsedTime%1000)/10);
        hours=String(hours).padStart(2,"0");
        minutes=String(minutes).padStart(2,"0");
        seconds=String(seconds).padStart(2,"0");
        milliseconds=String(milliseconds).padStart(2,"0");
        return(`${minutes}:${seconds}:${milliseconds}`);
    }

    return(
    <>
    <div className={Styles.stopwatch}>
        <div className={Styles.display}>{formatTime()}</div>
        <div className={Styles.controls}>
            <button onClick={start} className={Styles.startbutton}>Start</button>
            <button onClick={stop} className={Styles.stopbutton}>Stop</button>
            <button onClick={reset} className={Styles.resetbutton}>Reset</button>
        </div>
    </div>
    </>);

}
export default StopWatch