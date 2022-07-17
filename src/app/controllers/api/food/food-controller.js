import FoodService from '../../../services/food/food-service';
export class FoodController {
    getAll(req, res) {
        FoodService.getAll()
            .then((foods) => res.json(foods))
            .catch((err) => res.status(500).json(err));
    }
    getRandom(req, res) {
        FoodService.getRandom()
            .then((food) => res.json(food))
            .catch((err) => res.status(500).json(err));
    }
    getById(req, res) {
        FoodService.getById(req.params.id)
            .then((food) => res.json(food))
            .catch((err) => res.status(500).json(err));
    }
    getByKeyword(req, res) {
        FoodService.getByKeyword(req.params.keyword)
            .then((foods) => res.json(foods))
            .catch((err) => res.status(500).json(err));
    }
    create(req, res) {
        FoodService.create(req.body)
            .then((food) => res.json(food))
            .catch((err) => res.status(500).json(err));
    }
    update(req, res) {
        FoodService.update(req.params.id, req.body)
            .then((food) => res.json(food))
            .catch((err) => res.status(500).json(err));
    }
    delete(req, res) {
        FoodService.delete(req.params.id)
            .then(() => res.json({}))
            .catch((err) => res.status(500).json(err));
    }
}
export default new FoodController();
