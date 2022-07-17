import express from 'express';
const router = express.Router();
import { FontController } from '../../../app/controllers/api/font/font-controller';
export class ApiFontRoute {
    constructor(fontController = new FontController()) {
        this.fontController = fontController;
    }
    init(app) {
        router.get('/', this.fontController.getAll);
        router.get('/random', this.fontController.getRandom);
        router.get('/:id', this.fontController.getById);
        router.get('/keyword/:keyword', this.fontController.getByKeyword);
        router.post('/', this.fontController.create);
        router.put('/:id', this.fontController.update);
        router.delete('/:id', this.fontController.delete);
        app.use('/api/font', router);
    }
}
export default new ApiFontRoute();
