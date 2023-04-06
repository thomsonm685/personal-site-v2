import CounterAndText from "./CounterAndText";


const Stats = () => {
    return(
        <div className="stats">

            {/* <h1 style={{color:'#fff', marginBottom:'10vh'}}>THE STATS</h1> */}

            <CounterAndText countTo={4} addPlus={false} text={"Public Apps"} i={0}></CounterAndText>
            <CounterAndText countTo={20} addPlus={true} text={"Private Apps"} i={1}></CounterAndText>
            <CounterAndText countTo={100} addPlus={true} text={"Brands And Clients"} i={2}></CounterAndText>
            
            <div style={{margin:'10vh'}}></div>

            <img className="funnel" src="/funnel.svg"></img>

        </div>
    )
}

export default Stats;