import mongoose from "mongoose";
import axios from "axios";
import { AthleteSchema } from "../models/athleteModel";

const Athlete = mongoose.model('Athlete', AthleteSchema)



export const authenticate = (req, res) => {
    console.log("starting authenticate")
    if (!req.params.token) {
        res.send("No token provided")
    } else {

        axios.post('https://www.strava.com/api/v3/oauth/token', {
            client_id: 77648,
            client_secret: '21f1ae054e5ed0ba8930b57eca65d7926d101795',
            code: req.params.token,
            grant_type: 'authorization_code',
        })
            .then((response) => {
                console.log("got response from strava, upserting Athlete...")
                upsertAthlete(response.data).then((newAthlete) => {
                    console.log("upserted athlete")
                    res.send(newAthlete)

                }, (error) => {
                    console.log(error);
                    res.send(error.toJSON())
                })

            }, (error) => {
                console.log(error);
                res.send(error)
            });
        
    }
      
}

const upsertAthlete = (data) => {
    let newAthlete = new Athlete({
        stravaId: data.athlete.id,
        firstName: data.athlete.firstname,
        lastName: data.athlete.lastname,
        city: data.athlete.city,
        state: data.athlete.state,
        refreshToken: data.refresh_token,
        accessToken: data.access_token,
        accessTokenExpiration: data.expires_at,
        profilePhoto: data.athlete.profile,
    });

    var upsertData = newAthlete.toObject();
    delete upsertData._id;
    delete upsertData.createdDate


    let result = Athlete.findOneAndUpdate({ firstName: newAthlete.firstName, lastName: newAthlete.lastName },
        upsertData, { new: true, upsert: true }).then((err, Athlete) => {
        if (err) {
            return err
        }
        return Athlete
        })
    
    return result


}
