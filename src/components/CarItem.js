import { Link } from "react-router-dom";


const CarItem = (props) => {
    return ( 
        <div className="grid_item">
            <p>{props.carMarke}</p>
            <Link to={`/cars/${props.id}`}>READ MORE</Link>
        </div>
    );
}

export default CarItem;