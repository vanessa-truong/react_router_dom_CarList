import { useParams } from "react-router-dom";
import car from '../data/car.json';



const CarDetails = () => {

    const idParams = useParams();

    const detailCar = car.filter((elt) => {
        return  elt.id.toString() === idParams.id
        
    })

    return ( 
        <div>
            <p>{detailCar[0].carModel}</p>
            <p>{detailCar[0].CarMake}</p>
            <p>{detailCar[0].CarYear}</p>
        </div>
     );
}
 
export default CarDetails;