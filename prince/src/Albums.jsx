const Album = (props) => {
    return (
        <div className="album">
            <img src={props.image} alt={props.alt}/>
            <h2>{props.title}</h2>
            <h4><strong>Released:</strong> {props.year}</h4>
        </div>
    )
};

export default Album;