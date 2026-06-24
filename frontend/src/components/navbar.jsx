import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
    const [displayName, setDisplayName] = useState("Guest");

    useEffect(() => {
        const savedUser = localStorage.getItem("user");
        if (savedUser) {
            try {
                const user = JSON.parse(savedUser);
                if (user?.name) {
                    setDisplayName(user.name);
                }
            } catch (err) {
                console.error("Failed to parse stored user", err);
            }
        }
    }, []);

    return (
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
                <Link to="/profile" aria-label="Profile">
                    <span className="profile-name">{displayName}</span>
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;