import mongoose from "mongoose";
import { AuthSchema } from "../models/AuthModel";

const Auth = mongoose.model('Auth', AuthSchema)


export const upsertAuth = (req, res) => {

    Auth.findOneAndUpdate({ _id: req.params.id }, req.body, {new: true}, (err, Auth) => {
        if (err) {
            res.send(err);
        }
        res.json(Auth);
    })
}
