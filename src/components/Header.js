import { Link } from "react-router-dom";

const Header = () => {
    return ( 
        <div>
            <h1>Super Carlist</h1>
            <Link to='/cars'>Home</Link>
        </div>
    );
}

export default Header;