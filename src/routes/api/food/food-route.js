import { FoodController } from '../../../app/controllers/api/food/food-controller';
import express from 'express';
const router = express.Router();
export class ApiFoodRoute {
    constructor(foodController = new FoodController()) {
        this.foodController = foodController;
    }
    init(app) {
        router.get('/', this.foodController.getAll);
        router.get('/random', this.foodController.getRandom);
        router.get('/:id', this.foodController.getById);
        router.get('/keyword/:keyword', this.foodController.getByKeyword);
        router.post('/', this.foodController.create);
        router.put('/:id', this.foodController.update);
        router.delete('/:id', this.foodController.delete);
        return app.use('/api/food', router);
    }
}
export default new ApiFoodRoute();
