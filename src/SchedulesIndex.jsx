export function SchedulesIndex(props) {
  return (
    <div>
      <h1>My Plant Collection</h1>
      <div className="row">
        {props.schedules.map((schedule) => (
          <div key={schedule.id} className="col-sm-4 mb-4">
            <div className="card">
              <img src={schedule.image_url} width="fit" />
              <p>Plant: {schedule.plant.name}</p>
              <p>Owner: {schedule.user.name}</p>
              <button className="btn btn-success" onClick={() => props.onShowSchedule(schedule)}>
                More info
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
