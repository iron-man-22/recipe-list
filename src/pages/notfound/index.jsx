import { Link } from "react-router-dom";

function NotFoundPage(){
    return <div>
        <h3>Page Doesn't Exists..</h3>
        <Link to="/recipe-list">Got to Recipe List Page</Link>
    </div>
}

export default NotFoundPage;