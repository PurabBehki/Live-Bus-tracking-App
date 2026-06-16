import { useEffect, useState } from "react";
import Navbar from "./navbar";
import API from "../services/api";

function BusTickets(){
    const [tickets, setTickets] = useState([]);
    useEffect(() => {
        const user = JSON.parse(
            localStorage.getItem("user")
        );
        if (!user) return;
        API.get(`/booking?email=${user.email}`).then((res) => { setTickets(res.data); });
    }, []);
    return(
        <div className="app-container">
            <Navbar/>
            <main className="dashboard-content">
                <h1>My Tickets</h1>
                {tickets.length === 0?( <p>No Tickets Booked Yet</p>
                ):( tickets.map((ticket) => (
                        <div key={ticket._id} className="card ticket-card">
                            <h3>{ticket.busNumber}</h3>
                            <p>{ticket.source} → {ticket.destination}</p>
                            <p> Seats: {ticket.seats} </p>
                            <p>Total Amount: ₹{ticket.totalAmount}</p>
                            <p> Booked By: {ticket.userName}</p>
                            <p>Booking Date:{" "} {new Date(ticket.createdAt).toLocaleDateString()}</p>
                            <p> Booking Time:{" "} {new Date(ticket.createdAt).toLocaleTimeString()}</p>
                        </div>
                    ))
                )}
            </main>
        </div>
    );
}

export default BusTickets;