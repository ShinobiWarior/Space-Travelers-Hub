import React from 'react';
import { useSelector } from 'react-redux';
import OneMission from './OneMission';
import '../style/Mission.css';

const Missions = () => {
  const missions = useSelector((state) => state.missions.missions);

  return (
    <ul className="m-0 p-0">
      <div className="container">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">Mission</th>
              <th scope="col">Description</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {missions && missions.map((mission) => (
              <tr key={mission.mission_id}>
                <OneMission
                  reserved={mission.reserved}
                  id={mission.mission_id}
                  name={mission.mission_name}
                  description={mission.description}
                />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ul>
  );
};

export default Missions;
