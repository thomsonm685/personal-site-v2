

const ParaAndGif = ({para, gifUrl, title}) => {

    return(
        <div className="paraAndGif">
            <div className="text">
                <h3>{title}</h3>
                <p>{para}</p>
            </div>
            <img src={gifUrl}></img>
        </div>
    )
}

export default ParaAndGif;