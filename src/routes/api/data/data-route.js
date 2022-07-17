import express from 'express';
const router = express.Router();
import { DataController } from '../../../app/controllers/api/data/data-controller';
export class ApiDataRoute {
    constructor(dataController = new DataController()) {
        this.dataController = dataController;
    }
    init(app) {
        router.get('/', this.dataController.getAll);
        router.get('/random', this.dataController.getRandom);
        router.get('/:id', this.dataController.getById);
        router.get('/keyword/:keyword', this.dataController.getByKeyword);
        router.post('/', this.dataController.create);
        router.put('/:id', this.dataController.update);
        router.delete('/:id', this.dataController.delete);
        return app.use('/api/data', router);
    }
}
export default new ApiDataRoute();
