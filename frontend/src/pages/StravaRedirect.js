import React from "react";
import { useState, useEffect } from "react";
import httpCommon from "../http-common";
import { parseAuthToken } from "../utils/functions";
// import { parseAuthToken } from "../utils/functions";
// import DataService from '../service'
// import { setUser } from "../actions";



const StravaRedirect = (props) => {

    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isCancelled = false;
        let code = parseAuthToken(props.location.search)
        console.log(code)
        fetch(`http://localhost:4000/auth/${code}`)
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw response
            }).then(data => {
                if (!isCancelled) setData(data);
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
    if (error) return "Error!";
      

    
    
        // fetchData().catch(console.error);;
        // return () => isSubscribed = false;


        // fetch(`http://localhost:4000/auth/${token}`)
        //     .then((response) => response.json())
        //     .then(setData)
        //     .then(() => setLoading(false))
        //     .catch(setError);
    //     }, [props.location.search])
    // if (loading) return <h1> Loading....</h1>;
    // if (error) return <pre> {JSON.stringify(error, null, 2)}</pre>;
    // if (!data) return null;


   return(
        <>
            
        <h1>{data.url}</h1>
            </>
    );
    
    // const authenticate = async () => {
    //     console.log(this.props)
    //     const { history, location } = this.props;
    //     try {
    //         // If not redirected to Strava, return to home
    //         if (_.isEmpty(location)) {
    //             return history.push("/");
    //         }

            // Save the Auth Token to the Store (it's located under 'search' for some reason)
            // const stravaAuthToken = cleanUpAuthToken(location.search);

            // // Post Request to Strava (with AuthToken) which returns Refresh Token and and Access Token
            // const tokens = await testAuthGetter(stravaAuthToken);
            // this.props.setUser(tokens);
            // const accessToken = tokens.access_token;
            // const userID = tokens.athlete.id;

            // // Axios request to get users info
            // const user = await getUserData(userID, accessToken);
            // this.props.setUserActivities(user);

            // // Once complete, go to display page
            // history.push("/yourdistance");
        // } catch (error) {
        //     history.push("/");
        // }
    // };
    // authenticate();
    
}


export default StravaRedirect;