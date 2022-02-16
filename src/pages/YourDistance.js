import React from "react";
import { connect } from "react-redux";
import ListGroup from "react-bootstrap/ListGroup";
import { Carousel } from "bootstrap";
import { Timeline } from "@mantine/core";

const YourDistance = ({ user, returnTokens }) => {
  let arr = Object.entries(user.data);
  var activityMap = {};

  for (let i = 0; i < arr.length; i++) {
    let distance = (arr[i][1].distance * 0.000621371).toFixed(2);
    let activityName = arr[i][0];
    activityMap[activityName] = distance;
  }

  console.log(activityMap);

  return (
    <>
      <h1>
        Hi, {returnTokens.athlete.firstname} - here are your totals for the
        year:
      </h1>
      <div style={{ marginRight: 10 }}>
        <Timeline
          color="orange"
          radius="md"
          active={11}
          lineWidth={6}
          bulletSize={24}
        >
          <Timeline.Item>{activityMap["all_ride_totals"]} Rode</Timeline.Item>
          <Timeline.Item>{activityMap["all_run_totals"]} Ran</Timeline.Item>
          <Timeline.Item>{activityMap["all_swim_totals"]} Swam</Timeline.Item>
          <Timeline.Item>
            ytd_ride_totals: {activityMap["ytd_ride_totals"]}{" "}
          </Timeline.Item>
          <Timeline.Item>
            ytd_run_totals: {activityMap["ytd_run_totals"]}
          </Timeline.Item>
          <Timeline.Item>
            ytd_swim_totals: {activityMap["ytd_swim_totals"]}{" "}
          </Timeline.Item>
        </Timeline>
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
