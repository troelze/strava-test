
import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const StatsSchema = new Schema({
    athleteId: {
        type: String,
        required: false
    },
    recent_run_totals: {
        count: {
            type: Number,
            required: false
        },
        distance: {
            type: Number,
            required: false
        },
        moving_time: {
            type: Number,
            required: false
        },
        elapsed_time: {
            type: Number,
            required: false
        },
        elevation_gain: {
            type: Number,
            required: false
        },
        achievement_count: {
            type: Number,
            required: false
        }
    },
})