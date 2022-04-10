import mongoose from "mongoose";
import { StatsSchema } from "../models/statsModel";
import { AthleteSchema } from "../models/athleteModel";
import axios from "axios";

const Athlete = mongoose.model('Athlete', AthleteSchema)
const Stats = mongoose.model('Stats', StatsSchema)

export const getAllStats = (req, res) => {

    Stats.find({}, (err, Stats) => {
        if (err) {
            res.send(err);
        }
        res.json(Stats);
    })
}

export const getStats = (req, res) => {
    console.log(`Getting athlete stats by id: ${req.params.id}`)
    if (!req.params.id) {
        console.log("No id! ")
        res.send("No id provided")
        return
    }


    Athlete.findById(req.params.id, (err, Athlete) => {
        if (err) {
            res.send(err);
        }
        axios.get(`https://www.strava.com/api/v3/athletes/${Athlete.stravaId}/stats`, {
            headers: {
                'Authorization': `Bearer ${Athlete.accessToken}`
            }
        })
            .then((response) => {
                console.log("got response from strava, updating stats")
                upsertStats(Athlete._id, response.data)
                    .then((stats) => {
                        console.log("got it, sending stats!")
                        res.send(stats)
                    }, (error) => {
                        console.log(error);
                        res.send(error)
                    });
            }, (error) => {
                console.log(error);
                res.send(error)
            });
    })
}


const upsertStats = (id, data) => {

    console.log(`updating stats for athlete : ${id}`)

    let newStats = new Stats({
        athleteId: id,
        recent_run_totals: {
            count: data.recent_run_totals.count,
            distance: data.recent_run_totals.distance,
            moving_time: data.recent_run_totals.moving_time,
            elapsed_time: data.recent_run_totals.elapsed_time,
            elevation_gain: data.recent_run_totals.elevation_gain,
            achievement_count: data.recent_run_totals.achievement_count,
        },
    });

    console.log(newStats)

    var upsertData = newStats.toObject();
    delete upsertData._id;

    console.log("findOne and Update")
    let result = Stats.findOneAndUpdate({ athleteId: id },
        upsertData, { new: true, upsert: true }).then((err, Stats) => {
            if (err) {
            console.log(err)
            return err
        }
        return Stats
        })
    
    return result


}
