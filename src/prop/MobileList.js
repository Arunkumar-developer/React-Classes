import "./MobileList.css"








function MobileList(props){

    return (
        <div className="main">
            {console.log(props)}
            <img className="image" src={props.image}/>
            <div>
            <h2>{props.title}</h2> 
            <h4>$ {props.Price}</h4>
            <button> Add To Cart </button>
            </div>
        </div>
    )
}
export default MobileList