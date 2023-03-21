export function SchedulesIndex(props) {
  return (
    <div>
      <h1>All Schedules</h1>
      {props.schedules.map((schedule) => (
        <div key={schedule.id}>
          <p>Plant: {schedule.plant.name}</p>
          <p>Owner: {schedule.user.name}</p>
          <p>Start: {schedule.watering_start_date} </p>
          <button onClick={() => props.onShowSchedule(schedule)}>More info</button>
        </div>
      ))}
    </div>
  );
}
