import { FaMapMarkerAlt } from "react-icons/fa";


function Card(props){

    return(
        <div className="card">
            <img src={props.item.imageUrl} alt='' className="card-image"/>

            <div className="card-stats">
                <div className="card-header">
                    <FaMapMarkerAlt color="#F55A5A" size='10px' />
                    <p>{props.item.location}</p>
                    <a href={props.item.googleMapsUrl}>View on Google Maps</a>
                </div>

                <h1>{props.item.title}</h1>
                <h3>{props.item.startDate} - {props.item.endDate}</h3>
                <p>{props.item.description}</p>
            </div>
        </div>
    )
}

export default Card;