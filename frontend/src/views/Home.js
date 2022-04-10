import React from "react";
import { Text, Title } from "@mantine/core";
const { REACT_APP_STRAVA_CLIENTID, REACT_APP_REDIRECT_URL } = process.env;

const handleLogin = () => {
    window.location = `https://www.strava.com/oauth/authorize?client_id=${REACT_APP_STRAVA_CLIENTID}&response_type=code&redirect_uri=${REACT_APP_REDIRECT_URL}/exchange_token&approval_prompt=force&scope=read`;
};

const Home = () => {
    return (
        <>
            <div style={{ position: "absolute", right: 0, paddingTop: 20, paddingRight: 20 }}></div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                <div>
                    <Title order={1}>
                        Jump into the
                        <Text component="span" align="center" variant="gradient" gradient={{ from: "indigo", to: "cyan", deg: 45 }} size="xl" weight={700} inherit>
                            verse.
                        </Text>
                    </Title>
                </div>

                <div>
                    <img style={{ cursor: "pointer" }} src="btn_strava_connectwith_orange@2x.png" className="githubIcon" alt="strava logo" onClick={() => handleLogin()}/>
                </div>
                <br />
            </div>
        </>
    );
};

export default Home;
