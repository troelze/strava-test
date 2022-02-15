import React from "react";
import Button from "react-bootstrap/Button";

const { REACT_APP_STRAVA_CLIENTID, REACT_APP_REDIRECT_URL } = process.env;

const handleLogin = () => {
  window.location = `https://www.strava.com/oauth/authorize?client_id=${REACT_APP_STRAVA_CLIENTID}&response_type=code&redirect_uri=${REACT_APP_REDIRECT_URL}/exchange_token&approval_prompt=force&scope=read`;
};

// Homepage with BIG RED BUTTON
const Home = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Home</h1>
      <div className="d-grid gap-2">
        <Button variant="danger" size="lg" onClick={handleLogin}>
          Connect with Strava
        </Button>
      </div>
    </div>
  );
};

export default Home;
