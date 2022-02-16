import React from "react";
import { connect } from "react-redux";
import ListGroup from "react-bootstrap/ListGroup";
import { Carousel } from "bootstrap";

const YourDistance = ({ user, returnTokens }) => {
  let arr = Object.entries(user.data);
    var activityMap = {};
    

  for (let i = 0; i < arr.length; i++) {
    let distance = (arr[i][1].distance * 0.000621371).toFixed(2);
    let activityName = arr[i][0];
    activityMap[activityName] = distance;
  }
    
    console.log(activityMap)

  return (
    <>
      <h1>
        Hi, {returnTokens.athlete.firstname} - here are your totals for the
        year:
      </h1>
      <div>
        <ListGroup>
                  <ListGroup.Item>all_ride_totals: { activityMap['all_ride_totals']}'] </ListGroup.Item>
        <ListGroup.Item>all_run_totals:  { activityMap['all_run_totals']}</ListGroup.Item>
        <ListGroup.Item>all_swim_totals: { activityMap['all_swim_totals']}</ListGroup.Item>
        <ListGroup.Item>biggest_climb_elevation_gain: { activityMap['biggest_climb_elevation_gain']} </ListGroup.Item>
        <ListGroup.Item>biggest_ride_distance:  { activityMap['biggest_ride_distance']}</ListGroup.Item>
        <ListGroup.Item>recent_ride_totals: { activityMap['recent_ride_totals']} </ListGroup.Item>
        <ListGroup.Item>recent_run_totals:{ activityMap['recent_run_totals']} </ListGroup.Item>
        <ListGroup.Item>recent_swim_totals:  { activityMap['recent_swim_totals']}</ListGroup.Item>
        <ListGroup.Item>ytd_ride_totals:{ activityMap['ytd_ride_totals']} </ListGroup.Item>
        <ListGroup.Item>ytd_run_totals:  { activityMap['ytd_run_totals']}</ListGroup.Item>
        <ListGroup.Item>ytd_swim_totals: { activityMap['ytd_swim_totals']} </ListGroup.Item>
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
