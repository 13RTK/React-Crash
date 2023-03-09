import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Unfortunately</h2>
            <p>Can not found this page by your URL</p>
            <Link to="/">Let's back to homepage......</Link>
        </div>
    );
}

export default NotFound;
;