export function SchedulesShow(props) {
  return (
    <div>
      <h1>Plant Info</h1>
      <p>Plant: {props.schedule.plant.name}</p>
      <p>Owner: {props.schedule.user.name}</p>
      <img src={props.schedule.image_url} width="400" />
      <p>Start: {props.schedule.watering_start_date} </p>
    </div>
  );
}
