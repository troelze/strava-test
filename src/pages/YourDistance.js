import React from "react";
import { connect } from "react-redux";
import ListGroup from "react-bootstrap/ListGroup";

const YourDistance = ({ user, returnTokens }) => {
  //console.log(Object.entries(user.data));

  let arr = Object.entries(user.data);
  var activityMap = {};

  for (let i = 0; i < arr.length; i++) {
    let distance = (arr[i][1].distance * 0.000621371).toFixed(2);
    let activityName = arr[i][0];
    activityMap[activityName] = distance;
  }

  console.log(activityMap);
  const distances = Object.values(activityMap);

  console.log(distances);
  const names = Object.entries(activityMap);
  console.log(names[5][0] + ": " + names[5][1]);

  // sets table from Strava JSON Data
  const userDataList = [
    user.data.all_run_totals.distance,
    user.data.all_ride_totals.distance,
    user.data.all_swim_totals.distance,
  ];

  // const sportList = ["run", "rode", "swam"];

  // Creates Key-Object Mapping for React Component + converts Meters to Miles
  const distanceObject = names.map((a, b, i) => ({
    id: i,
    title: (a * 0.000621371).toFixed(2),
    sport: b,
  }));

  console.log(distanceObject);

  //Validators
  //console.log(userDataList);
  //console.log(distanceObject);

  return (
    // Prints ListGroup to page mapping over Object w/ key
    <>
      <h1>
        Hi, {returnTokens.athlete.firstname} - here are your totals for the
        year:{" "}
      </h1>
      <div className="card align-items-center" style={{ textAlign: `center` }}>
        <ListGroup>
          {names.distanceObject((distances) => (
            <ListGroup.Item key={distances.id}>
              {distances.title} miles you've {distances.sport}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    returnTokens: state.returnTokens,
  };
};

export default connect(mapStateToProps)(YourDistance);
