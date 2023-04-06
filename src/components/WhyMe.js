

import CounterAndText from "./CounterAndText";


const WhyMe = () => {
    return(
        <div className="whyMe">
            <div className="paraAndGif first">
                <div className="text">
                    <h3>Automations</h3>
                    <p>Not an agency, collective, or even enough people to carry a (sane) conversation. This is Shopify app development offered by one developer with years of experience, me. Singular attention and clear communication is guaranteed. I only take on one project at a time, allowing me to outpace agencies at a fraction of their price.</p>
                </div>
                <img src='/gears.gif'></img>
                </div>
                <h3 style={{color:'#060047', fontSize:'3em'}}>&</h3>
                <div className="paraAndGif">
                <img src='/einstien.gif' ></img>
                <div className="text">
                    <h3>Solutions</h3>
                    <p>Not an agency, collective, or even enough people to carry a (sane) conversation. This is Shopify app development offered by one developer with years of experience, me. Singular attention and clear communication is guaranteed. I only take on one project at a time, allowing me to outpace agencies at a fraction of their price.</p>
                </div>
            </div>
        </div>
    )
}

export default WhyMe;
