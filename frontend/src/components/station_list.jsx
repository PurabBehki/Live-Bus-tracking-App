function StationList({bus}){
  if(!bus) {
    return (
      <div className="station-list">
        <h2>Route Progress</h2>
        <p>Select a bus to view route.</p>
      </div>
    );
  }
  const stations=[
    bus.source,
    bus.currentStop,
    bus.destination
  ];
  return(
    <div className="station-list">
      <h2>Route Progress </h2>
      <ul>{bus.stations?.map((station,index)=>(
        <li key={index} >{station}</li>
      ))}</ul>
    </div>
  );
}

export default StationList;