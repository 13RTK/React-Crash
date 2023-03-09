import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Unfortunately</h2>
            <p>Couldn't find this page by your URL.L</p>
            <Link to="/">Let's back to homepage......</Link>
        </div>
    );
}

export default NotFound;