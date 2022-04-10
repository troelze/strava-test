import mongoose from "mongoose";
import { AthleteSchema, AthleteStatsSchema } from "../models/athleteModel";

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


export const getAthleteById = (req, res) => {
    console.log(`Getting athlete id: ${req.params.id}`)
    if (!req.params.id) {
        console.log("No id! ")
        res.send("No id provided")
        return
    }

    Athlete.findById(req.params.id, (err, Athlete) => {
        if (err) {
            res.send(err);
        }
        res.json(Athlete);
    })
}


export const updateAthlete = (req, res) => {

    Athlete.findOneAndUpdate({ _id: req.params.id }, req.body, {new: true}, (err, Athlete) => {
        if (err) {
            res.send(err);
        }
        res.json(Athlete);
    })
}

export const deleteAthlete = (req, res) => {

    Athlete.remove({ _id: req.params.id }, (err, Athlete) => {
        if (err) {
            res.send(err);
        }
        res.json({message: "Successfully deleted athlete"});
    })
}