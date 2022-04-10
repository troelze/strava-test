import React, { useState, useEffect } from "react";
import { Timeline } from "@mantine/core";

const Dashboard = (props) => {

    const [athleteData, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // console.log(props.location.state.athleteId)
        let isCancelled = false;
        if (!isCancelled) fetch(`http://localhost:4000/stats/${props.location.state.athleteId}`)
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw response
            }).then(data => {
                console.log(data)
                setData(data)
            }).catch(error => {
                console.error("error fetching data: ", error);
                if (!isCancelled) setError(error)
            })
            .finally(() => {
                if (!isCancelled) setLoading(false)
            });

        return () => {
            isCancelled = true;
        };
    }, [props.location.state.athleteId])

    if (isLoading) return "Loading....";
    if (error) return <pre> {JSON.stringify(error, null, 2)}</pre>;


    return (
        <>
            <h1>
                Hi {props.location.state.firstName}!<br></br>
                In the last four weeks you've ran..
            </h1>
            <div style={{ marginRight: 10 }}>
                <Timeline color="orange" radius="md" active={11} lineWidth={6} bulletSize={24}>
                    {Object.keys(athleteData.recent_run_totals).map((key) => {
                        return <Timeline.Item>{key}: {athleteData.recent_run_totals[key]}</Timeline.Item>
                        })}
                </Timeline>
            </div>
        </>
    );
};


export default Dashboard;

