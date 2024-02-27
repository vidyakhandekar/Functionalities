import React,{useEffect,useState} from 'react'
import './timer.css'
function Timer() {
    const [Seconds,setSeconds]=useState(0);
    const [Minutes,setMinutes]=useState(0);

    var timer;
    useEffect(()=>{
        timer=setInterval(()=>{

            setSeconds(Seconds+1);

            if(Seconds===59){
                setMinutes(Minutes+1);
                setSeconds(0);
            }
        },1000)
        return()=>clearInterval(timer);
    });
    const restart=()=>{
        setSeconds(0);
        setMinutes(0);
    }
    const stop=()=>{
        clearInterval(timer);
    }
  return (
    <div className='timer'>
    <div className="container">
        <div className="timer-container">
            <h1>Timer</h1>
            <h1>{Minutes<10? "0"+Minutes : Minutes}:{Seconds<10? "0"+Seconds: Seconds}</h1>
            <button className='restat' onClick={restart}>Restart</button>
            <button className='stop' onClick={stop}>Stop</button>
        </div>
    </div>
      
    </div>
  )
}

export default Timer
