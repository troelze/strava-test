import React from "react";

const { REACT_APP_STRAVA_CLIENTID, REACT_APP_REDIRECT_URL } = process.env;

const handleLogin = () => {
    window.location = `https://www.strava.com/oauth/authorize?client_id=${REACT_APP_STRAVA_CLIENTID}&response_type=code&redirect_uri=${REACT_APP_REDIRECT_URL}/exchange_token&approval_prompt=force&scope=read`;
};

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <button onClick={handleLogin}>Connect with Strava</button>
        </div>
    );
};

export default Home;