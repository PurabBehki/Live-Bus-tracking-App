import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./global.css";
import LoginSignup from "./pages/login_signup";
import Passenger from "./pages/passenger";
import About from "./components/about";
import Tracking from "./components/fleetmonitoring";
import BookTicket from "./components/bookTicket";
import BusTickets from "./components/busTickets";
import FleetMonitoring from "./components/fleetMonitoring";
import Profile from "./components/profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginSignup/>} />
        <Route path="/passenger" element={<Passenger/>}/>
        <Route path="/tracking/:id" element={<Tracking/>} />
        <Route path="/fleet" element={<FleetMonitoring/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/book/:id" element={<BookTicket/>} />
        <Route path="/bookTickets" element={<BusTickets />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;