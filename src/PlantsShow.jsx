export function PlantsShow(props) {
  return (
    <div>
      <h1>{props.plant.common_name}</h1>
      <p className="card-text">Sunlight Needs: {props.plant.sunlight ? props.plant.sunlight[0] : "No Data"}</p>
      <p className="card-text">Alt. Sunlight Needs: {props.plant.sunlight ? props.plant.sunlight[1] : "No Data"}</p>
      <p className="card-text">Watering: {props.plant.watering}</p>
    </div>
  );
}
