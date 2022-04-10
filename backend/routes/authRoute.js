import { authenticate } from '../controllers/authControllers'

const authRoutes = (app) => {
   
    app.route('/auth/:token')
        .get(authenticate)
}

export default authRoutes