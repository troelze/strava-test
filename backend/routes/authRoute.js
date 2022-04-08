import { upsertAuth } from '../controllers/authControllers'

const routes = (app) => {

    app.route('/auth/:token')
        .get(upsertAuth)
}

export default routes