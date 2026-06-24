import { useState } from "react";
import "./search_route.css";
import cities from "../data/cities";
import API from "../services/api";

function SearchRoute({setBuses}) {
  const [source, setSource]= useState("");
  const [destination, setDestination]= useState("");
  const [date, setDate]=useState("");
  const [time, setTime]= useState("");
  const handleSearch=async()=>{
    try{
      const res = await API.get(`/bus/search?source=${source}&destination=${destination}`);
      console.log("Search result:",res.data);
      setBuses(res.data);
    } 
    catch(error){ console.log(error); }
};
  return (
    <div className="search-route">
      <h2>Search Bus Route</h2>
      <div>
        <label>Source</label><br/>
        <input type="text"
          list="source-cities"
          placeholder="Enter Source"
          value={source}
          onChange={(e)=>setSource(e.target.value)}/>
        <datalist id="source-cities">
          {cities.map((city) => (<option key={city} value={city}/>))}
        </datalist>
      </div>
      <br/>
      <div>
        <label>Destination</label>
        <br/>
        <input type="text"
          list="destination-cities"
          placeholder="Enter Destination"
          value={destination}
          onChange={(e)=>setDestination(e.target.value)} />
         <datalist id="destination-cities">
          {cities.map((city) => (
            <option key={city} value={city}/>
          ))}
        </datalist>
      </div> <br/>
      <div>
        <label>Date</label><br/>
        <input type="date"
          value={date}
          onChange={(e)=>setDate(e.target.value)}/>
      </div> <br />
      <div>
        <label>Time</label>
        <br />
        <input type="time"
          value={time}
          onChange={(e)=>setTime(e.target.value)}/>
      </div><br/>
      <button onClick={handleSearch}>Search Bus</button>
    </div>
  );
}

export default SearchRoute;