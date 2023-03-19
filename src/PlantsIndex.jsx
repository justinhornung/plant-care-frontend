export function PlantsIndex(props) {
  return (
    <div>
      <h1>All Plants</h1>
      {props.plants.map((plant) => (
        <div key={plant.id}>
          <h2>{plant.name}</h2>
          <p>Desc: {plant.description}</p>
          <p>Needs {plant.amount_of_sun} hours of sunlight per day.</p>
          <p>{plant.days_to_water} until next drink.</p>
        </div>
      ))}
    </div>
  );
}
