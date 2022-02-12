

import React from "react";
import { connect } from "react-redux";

const YourDistance = ({ user, returnTokens }) => {
    console.log(user.data)
    return (
        <div>
            <h1>Hi, {returnTokens.athlete.firstname}!</h1>
            <h2>Your total run distance: {user.data.all_run_totals.distance}m</h2>
            <h2>Your total ride distance: {user.data.all_ride_totals.distance}m</h2>
            <h2>Your total swim distance :{user.data.all_swim_totals.distance}m</h2>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        user: state.user,
        returnTokens: state.returnTokens,
    };
};

export default connect(mapStateToProps)(YourDistance);