import { useState } from "react";

export function PlantsIndex(props) {
  console.log("Plants Index", props);

  return (
    <div>
      <h1>All Plants</h1>
      <div className="row">
        {props.plants.map((plant) => (
          <div key={plant.id} className="col-sm-4 mb-4">
            <div className="card">
              <img
                src={
                  plant.default_image
                    ? plant.default_image.small_url
                    : "https://media.istockphoto.com/id/486832119/photo/working-hard.jpg?s=612x612&w=0&k=20&c=8PfjxzsCp2B8VEpMiv0AWgN2kva4G8BCGJzg9ctjIZ4="
                }
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{plant.common_name}</h5>
                <button className="btn btn-success" onClick={() => props.onShowPlant(plant)}>
                  More info
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
