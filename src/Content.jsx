import axios from "axios";
import { useState, useEffect } from "react";
import { PlantsIndex } from "./PlantsIndex";
import { SchedulesIndex } from "./SchedulesIndex";
import { SchedulesCreate } from "./SchedulesCreate";
import { Modal } from "./Modal";
import { SchedulesShow } from "./SchedulesShow";

export function Content() {
  const [plants, setPlants] = useState([]);
  const [schedules, setSchedules] = useState([]);
  const [isSchedulesShowVisible, setIsSchedulesShowVisible] = useState(false);
  const [currentSchedule, setCurrentSchedule] = useState({});

  const handleIndexPlants = () => {
    console.log("handleIndexPlants");
    axios.get("http://localhost:3000/plants.json").then((response) => {
      console.log(response.data);
      setPlants(response.data);
    });
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

  const handleShowSchedule = (schedule) => {
    console.log("handleShowSchedule", schedule);
    setIsSchedulesShowVisible(true);
    setCurrentSchedule(schedule);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsSchedulesShowVisible(false);
  };

  useEffect(handleIndexPlants, []);
  useEffect(handleIndexSchedules, []);

  return (
    <div>
      <PlantsIndex plants={plants} />
      <SchedulesCreate onCreateSchedule={handleCreateSchedule} />
      <SchedulesIndex schedules={schedules} onShowSchedule={handleShowSchedule} />
      <Modal show={isSchedulesShowVisible} onClose={handleClose}>
        <SchedulesShow schedule={currentSchedule} />
      </Modal>
    </div>
  );
}
