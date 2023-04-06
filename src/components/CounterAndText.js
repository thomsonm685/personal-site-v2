import { useEffect, useState, useCallback } from "react"
import CountUp from 'react-countup';


const CounterAndText = ({countTo, text, i, addPlus}) => {

    const [inView,setInView] = useState(false);
    // let trackNum = 0;



    useEffect(()=>{
        window.addEventListener('scroll', (e)=>{
            if(inView) return;
            if((document.querySelectorAll(".incrementCounter")[i].getBoundingClientRect().top - window.innerHeight) <= -20) setInView(true);
        })
    },[])
    

    // const addOne = useCallback((n)=>setNum(n+1),[num]);

    return(
        <div className="incrementCounter">
            {inView?
            <h3 style={{color:'#060047',fontSize:'3em'}}><CountUp start={0} duration={3} end={countTo} />{addPlus?'+':''}</h3>
            :''}
            <span style={{width:'40px'}}></span>
            <h3>{text}</h3>
        </div>
    )
}

export default CounterAndText;