import { HomeController } from '../../app/controllers/home/home-controller';
import express from 'express';
const router = express.Router();
export class WebRoute {
    constructor(homeController = new HomeController()) {
        this.homeController = homeController;
    }
    init(app) {
        router.get('/', this.homeController.getHomepage);
        router.get('/webhook', this.homeController.getWebhook);
        router.post('/webhook', this.homeController.postWebhook);
        return app.use('/', router);
    }
}
export default new WebRoute();
