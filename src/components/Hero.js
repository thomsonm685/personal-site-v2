import { useEffect } from "react";
import Waves from "./Waves";


const Hero = () => {

    // useEffect(()=>{
    //     const renderType = () => {
    //         const elm = document.querySelector('.to-type');
    //         elm.style.width = `${elm.getBoundingClientRect().width}px`;
    //         elm.style.display='none';
    //         elm.classList.add('typing');
    //         elm.classList.remove('to-type');
    //         setTimeout(()=>{
    //             document.querySelector('.subTyping').style.marginTop = '0px'
    //             elm.style.display='block';
    //         },100)

    //     }


    //     if (document.readyState === 'complete') {
    //         renderType();
    //       } else {
    //         window.addEventListener('load', renderType);
    //         // Remove the event listener when component unmounts
    //         return () => window.removeEventListener('load', renderType);
    //       }

    // },[])

    return(
        <div className="hero">

            <div className="typing-wrapper">
            <h1 className="typing">Shopify App Development</h1>
            {/* <h1 className="to-type" style={{height:'1.5em'}}>Shopify App Development</h1> */}
            </div>
            <h2 className="subTyping" >By Michael Thomson.</h2>
            <p>Custom Shopify app development by one developer.</p>
            <p>Not an agency, collective, or even enough people to carry a (sane) conversation. This is Shopify app development offered by one US-based developer with years of experience, me. Singular attention and clear communication is guaranteed. I only take on one project at a time, allowing me to outpace agencies at a fraction of their price.</p>

                {/* <div class="container">
                    <div class="sliding-background"></div>
                </div> */}
            <Waves></Waves>
            
            {/* <div className="waves">
            </div> */}
        </div>
    )
}

export default Hero;