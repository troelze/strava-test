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

export const getStats = async (req, res) => {
    let id = req.params.id
    console.log(`Getting stats for athlete ${id}`)

    try {

        let athlete = await Athlete.findById(req.params.id);

        let stats = await axios.get(`https://www.strava.com/api/v3/athletes/${athlete.stravaId}/stats`, {
            headers: {
                'Authorization': `Bearer ${athlete.accessToken}`
            }
        });

        console.log('Got response from Strava, status: ', stats.status)

        let newStats = await upsertStats(athlete._id, stats.data)
        res.send(newStats)

    } catch (err) {
        console.log(err)
        res.send(err)
    }
}


const upsertStats = async (id, data) => {

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

    var upsertData = newStats.toObject();
    delete upsertData._id;

    try {
        let result = await Stats.findOneAndUpdate({ athleteId: id },
            upsertData, { new: true, upsert: true })
        
        return result
        
    } catch (err) {
        console.log(err)
        return err
    }
    
}
