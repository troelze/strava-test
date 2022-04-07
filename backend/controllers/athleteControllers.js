import mongoose from "mongoose";
import { AthleteSchema } from "../models/athleteModel";

const Athlete = mongoose.model('Athlete', AthleteSchema)

export const addNewAthlete = (req, res) => {
    let newAthlete = new Athlete(req.body);

    newAthlete.save((err, Athlete) => {
        if (err) {
            res.send(err);
        }
        res.json(Athlete);
    })
}


export const getAllAthletes = (req, res) => {

    Athlete.find({}, (err, Athlete) => {
        if (err) {
            res.send(err);
        }
        res.json(Athlete);
    })
}