import React from "react";
import { connect } from "react-redux";
import ListGroup from "react-bootstrap/ListGroup";
import { Carousel } from "bootstrap";
import { Timeline } from "@mantine/core";

const YourDistance = ({ user, returnTokens }) => {
  let arr = Object.entries(user.data);
  var activities = [];

  for (let i = 0; i < arr.length; i++) {
    let distance = (arr[i][1].distance * 0.000621371).toFixed(2);
    let activityName = arr[i][0];
    let item = {
      name: activityName,
      distance: distance,
    };
    activities.push(item);
  }

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
          {activities.map((item) => (
            <Timeline.Item>
              {item.name}: {item.distance}
            </Timeline.Item>
          ))}
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
