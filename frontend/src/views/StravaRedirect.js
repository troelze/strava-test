import React from "react";
import { useState, useEffect } from "react";
import { Redirect } from 'react-router'

const StravaRedirect = (props) => {

    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isCancelled = false;
        let code = parseAuthToken(props.location.search)
        if (!isCancelled) fetch(`http://localhost:4000/auth/${code}`)
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw response
            }).then(data => {
                console.log(data._id)
                setData(data._id)
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
    }, [props.location.search])

    if (isLoading) return "Loading....";
    if (error) return <pre> {JSON.stringify(error, null, 2)}</pre>;

    return <Redirect to={{ pathname: '/dashboard', state: { athleteId: data } }} />
}

const parseAuthToken = (str) => {
    return str.split("&")[1].slice(5);
};


export default StravaRedirect;