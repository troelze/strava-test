import React from "react";
import { connect } from "react-redux";
import ListGroup from "react-bootstrap/ListGroup";

const YourDistance = ({ user, returnTokens }) => {
  //console.log(Object.entries(user.data));

  // sets table from Strava JSON Data
  const userDataList = [
    user.data.all_run_totals.distance,
    user.data.all_ride_totals.distance,
    user.data.all_swim_totals.distance,
  ];

  // const sportList = ["run", "rode", "swam"];

  // Creates Key-Object Mapping for React Component + converts Meters to Miles
  const distanceObject = userDataList.map((distance, i) => ({
    id: i,
    title: (distance * 0.000621371).toFixed(2),
  }));

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
          {distanceObject.map((distances) => (
            <ListGroup.Item key={distances.id}>
              {distances.title} miles you've
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
