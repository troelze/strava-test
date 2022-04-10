import { addNewAthlete, deleteAthlete, getAllAthletes, getAthleteById, updateAthlete } from '../controllers/athleteControllers'

const athleteRoutes = (app) => {
    app.route('/athletes')
        .post(addNewAthlete)
        .get(getAllAthletes);
    app.route('/athletes/:id')
        .get(getAthleteById)
        .put(updateAthlete)
        .delete(deleteAthlete)
   

       

}

export default athleteRoutes