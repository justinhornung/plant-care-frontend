export function SchedulesIndex(props) {
  return (
    <div>
      <h1>All Schedules</h1>
      {props.schedules.map((schedule) => (
        <div key={schedule.id}>
          <p>Plant: {schedule.plant_id}</p>
          <p>Owner: {schedule.user_id}</p>
          <img src={schedule.image_url} />
          <p>Start: {schedule.watering_start_date} </p>
        </div>
      ))}
    </div>
  );
}
