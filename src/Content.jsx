import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { PlantsIndex } from "./PlantsIndex";
import { PlantsShow } from "./PlantsShow";
import { SchedulesIndex } from "./SchedulesIndex";
import { SchedulesCreate } from "./SchedulesCreate";
import { SchedulesShow } from "./SchedulesShow";
import { Modal } from "./Modal";

export function Content() {
  const [plants, setPlants] = useState([]);
  // const [searchTerms, setSearchTerms] = useState("");
  const [isPlantsShowVisible, setIsPlantsShowVisible] = useState(false);
  const [currentPlant, setCurrentPlant] = useState({});
  const [schedules, setSchedules] = useState([]);
  const [isSchedulesShowVisible, setIsSchedulesShowVisible] = useState(false);
  const [currentSchedule, setCurrentSchedule] = useState({});

  const handleIndexPlants = () => {
    console.log("handleIndexPlants");
    axios.get("http://localhost:3000/plants.json").then((response) => {
      console.log(response.data);
      setPlants(response.data.data); //response.data.data[then the array of plant details]
      // axios.get("http://localhost:3000/plants.json?search_terms=" + searchTerms).then((response) => {
      //   console.log(response.data);
      //   setPlants(response.data.plants);
      // });
    });
  };

  const handleShowPlant = (plant) => {
    console.log("handleShowPlant", plant);
    setIsPlantsShowVisible(true);
    setCurrentPlant(plant);
  };

  const handleClosePlant = () => {
    console.log("handleClosePlant");
    setIsPlantsShowVisible(false);
  };

  const handleIndexSchedules = () => {
    console.log("handleIndexSchedules");
    axios.get("http://localhost:3000/schedules.json").then((response) => {
      console.log(response.data);
      setSchedules(response.data);
    });
  };

  const handleCreateSchedule = (params, successCallback) => {
    console.log("handleCreateSchedule", params);
    axios.post("http://localhost:3000/schedules.json", params).then((response) => {
      setSchedules([...schedules, response.data]);
      successCallback();
    });
  };

  const handleCreatePlantAndSchedule = (plant) => {
    console.log("handleCreatePlantAndSchedule", plant);
    let daysToWater = 0;
    let amountOfSun = 0;
    if (plant.watering.toLowerCase === "frequent") {
      daysToWater = 1;
    }
    if (plant.watering.toLowerCase === "average") {
      daysToWater = 2;
    }
    if (plant.watering.toLowerCase === "minimum") {
      daysToWater = 3;
    }
    if (plant.watering.toLowerCase === "none") {
      daysToWater = 4;
    }
    if (plant.watering.toLowerCase === "") {
      daysToWater = 0;
    }
    if (plant.sunlight[0].toLowerCase === "full sun") {
      amountOfSun = 1;
    }
    if (plant.sunlight[0].toLowerCase === "part shade") {
      amountOfSun = 2;
    }
    if (plant.sunlight[0].toLowerCase === "full shade") {
      amountOfSun = 3;
    }
    if (plant.sunlight[0].toLowerCase === "") {
      amountOfSun = 4;
    }
    const params = {
      name: plant.common_name,
      amount_of_sun: amountOfSun,
      days_to_water: daysToWater,
    };
    axios.post("http://localhost:3000/plants.json", params).then((response) => {
      console.log(response.data);
      const scheduleParams = {
        plant_id: response.data.id,
        image_url: plant.default_image.small_url,
      };
      axios.post("http://localhost:3000/schedules.json", scheduleParams).then((response) => {
        console.log(response.data);
        window.location.href = "/schedules/show";
      });
    });
  };

  const handleShowSchedule = (schedule) => {
    console.log("handleShowSchedule", schedule);
    setIsSchedulesShowVisible(true);
    setCurrentSchedule(schedule);
  };

  const handleCloseSchedule = () => {
    console.log("handleCloseSchedule");
    setIsSchedulesShowVisible(false);
  };

  useEffect(handleIndexPlants, []);
  useEffect(handleIndexSchedules, []);

  return (
    <div className="container mb-5">
      <Routes>
        <Route path="/plants" element={<PlantsIndex plants={plants} onShowPlant={handleShowPlant} />} />
        {/* <Route path="/plants/show" element={<PlantsIndex plants={plants}  />} /> */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/schedules/new" element={<SchedulesCreate onCreateSchedule={handleCreateSchedule} />} />
        <Route
          path="/schedules/show"
          element={<SchedulesIndex schedules={schedules} onShowSchedule={handleShowSchedule} />}
        />
      </Routes>
      <Modal show={isPlantsShowVisible} onClose={handleClosePlant}>
        <PlantsShow plant={currentPlant} onCreatePlantAndSchedule={handleCreatePlantAndSchedule} />
      </Modal>
      <Modal show={isSchedulesShowVisible} onClose={handleCloseSchedule}>
        <SchedulesShow schedule={currentSchedule} />
      </Modal>
    </div>
  );
}
