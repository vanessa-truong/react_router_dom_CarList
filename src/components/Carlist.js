import car from "../data/car.json"
import CarItem from "./CarItem"



const Carlist = () => {
    return ( 
        <div className="grid_container">
            {car.map((elt) => {
                return (
                    <CarItem 
                    key={elt}
                    carMarke={elt.CarMake}
                    carModel={elt.carModel}
                    carYear={elt.CarYear}
                    id={elt.id}
                    />
                )
            })}
        </div>
    );
}

export default Carlist;