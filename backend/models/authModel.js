import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const Auth = new Schema({
    exchangeToken: {
        type: String, 
        required: true
    },
    createdDate: {
        type: Date, 
        default: Date.now
    },
})