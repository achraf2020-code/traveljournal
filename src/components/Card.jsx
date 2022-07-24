import coverImg from "../assets/images/card1.png"
import iconLocation from "../assets/images/icon-location.png"
const Card = (props)=>{
    console.log(JSON.stringify(props))
    return(
            <div className="card">
                <img src={props.imageUrl} alt ="mountain" className="card--img"/>
                <div>
                    <small className="card--stats">
                        <img src= {iconLocation} alt="location" className="card--icon--location"/>
                        <span className="card--country">{props.location}</span>
                        <a href={props.googleMapsUrl} className="card--url--google">View on Google Maps</a>
                    </small>
                    <h1 className="card--tittle">{props.title}</h1>
                    <span className="card-date">
                        <span className="start--time">{props.startDate}</span>-<span className="end--time">{props.endtDate}</span>
                    </span>
                    <p className="card--description">{props.description}</p>
                </div>
            </div>       
    )
}
export default Card