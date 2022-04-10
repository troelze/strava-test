import {  getAllStats, getStats } from '../controllers/statsControllers'

const statRoutes = (app) => {
    app.route('/stats')
        .get(getAllStats);
    
    app.route('/stats/:id')
        .get(getStats);
}

export default statRoutes