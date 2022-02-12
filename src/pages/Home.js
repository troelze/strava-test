import React from "react";
import env from "react-dotenv";


const redirectUrl = "http://localhost:3000/redirect"

const handleLogin = () => {
    window.location = `https://www.strava.com/oauth/authorize?client_id=77648&response_type=code&redirect_uri=${redirectUrl}/exchange_token&approval_prompt=force&scope=read`;
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