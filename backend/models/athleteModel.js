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
    city: {
        type: String, 
        required: false
    },
    state: {
        type: String, 
        required: false
    },
    refreshToken: {
        type: String, 
        required: false
    },
    accessToken: {
        type: String, 
        required: false
    },
    accessTokenExpiration: {
        type: String, 
        required: false
    },
    profilePhoto: {
        type: String, 
        required: false
    },
    lastUpdatedDate: {
        type: Date, 
        default: Date.now
    },
    createdDate: {
        type: Date, 
        default: Date.now
    },
})