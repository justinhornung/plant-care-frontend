export function PlantsIndex(props) {
  console.log("Plants Index", props);
  return (
    <div>
      <h1>All Plants</h1>
      {props.plants.map((plant) => (
        <div key={plant.id}>
          <h2>{plant.common_name}</h2>
          <img
            src={
              plant.default_image
                ? plant.default_image.small_url
                : "https://media.istockphoto.com/id/486832119/photo/working-hard.jpg?s=612x612&w=0&k=20&c=8PfjxzsCp2B8VEpMiv0AWgN2kva4G8BCGJzg9ctjIZ4="
            }
            width="400"
            alt=""
          />
          {/* <p>Desc: {plant.description}</p> */}
          {/* <p>{plant.data["sunlight"]}</p> */}
          <p>Watering:{plant.watering}</p>
        </div>
      ))}
    </div>
  );
}
