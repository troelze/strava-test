import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const AthleteSchema = new Schema({
    firstName: {
        type: String, 
        required: true
    },
    lastName: {
        type: String, 
        required: true
    },
    createdDate: {
        type: Date, 
        default: Date.now
    },
})