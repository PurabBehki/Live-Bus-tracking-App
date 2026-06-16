import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar(){
    return(
        <nav className="navabar">
            <div className="logo">
                Track Your Bus
            </div>
            <ul className="nav-links">
                <li> <Link to='/passenger'>Home</Link> </li>
                <li><Link to='/bookTickets'>Bus Tickets</Link></li>
                <li><Link to='/fleet'>Fleet Monitoring</Link> </li>
                <li><Link to='/about'>About</Link> </li>
            </ul>
            <div className="profile">
                <Link to="/profile" aria-label="Profile"><span className="profile-logo">🚍</span></Link>
            </div>
        </nav>
    )
}

export default Navbar;