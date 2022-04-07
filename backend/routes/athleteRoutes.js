import { addNewAthlete, getAllAthletes } from '../controllers/athleteControllers'

const routes = (app) => {
    app.route('/athletes')
        .post(addNewAthlete)
        .get(getAllAthletes)
}

export default routes