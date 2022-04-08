import express from 'express';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';
import cors from 'cors';
import routes from './routes/athleteRoutes';

require('dotenv').config();

const app = express();
const PORT = 4000;

// mongo connection
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// bodyparser setup
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json());

// CORS setup
app.use(cors())

routes(app);

app.get('/', (req, res) => {
    res.send('Our app is running');
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
});