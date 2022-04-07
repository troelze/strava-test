import { addNewAthlete, deleteAthlete, getAllAthletes, getAthleteById, updateAthlete } from '../controllers/athleteControllers'

const routes = (app) => {
    app.route('/athletes')
        .post(addNewAthlete)
        .get(getAllAthletes);
    app.route('/athletes/:id')
        .get(getAthleteById)
        .put(updateAthlete)
        .delete(deleteAthlete)
}

export default routes