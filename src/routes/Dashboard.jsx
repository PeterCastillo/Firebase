import { Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="navbar navbar-expand-lg navbar-dark bg-dark">
            <nav>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to={'/'}>Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={'/Login'}>Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={'/Admin'}>Admin</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Dashboard