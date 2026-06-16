function BusStatus({bus}) {
  if(!bus){
    return null;
  }
  return (
    <div className="card bus-status">
      <h2>Current Bus Status</h2>
      <p><strong>Bus Number:</strong> {bus.busNumber} </p>
      <p><strong>Current Stop:</strong> {bus.currentStop} </p>
      <p> <strong>Status:</strong> {bus.status}</p>
      <p><strong>ETA:</strong> {bus.eta} </p>
    </div>
  );
}

export default BusStatus;