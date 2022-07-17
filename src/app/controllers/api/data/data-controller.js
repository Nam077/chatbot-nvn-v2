import DataService from '../../../services/data/data-service';
export class DataController {
    async getAll(req, res) {
        res.status(200).json(await DataService.getAll());
    }
    async getById(req, res) {
        res.status(200).json(await DataService.getById(req.params.id));
    }
    async create(req, res) {
        res.status(200).json(await DataService.create(req.body));
    }
    async update(req, res) {
        res.status(200).json(await DataService.update(req.params.id, req.body));
    }
    async delete(req, res) {
        res.status(200).json(await DataService.delete(req.params.id));
    }
    async getByKeyword(req, res) {
        res.status(200).json(await DataService.getByKeyword(req.params.keyword));
    }
    async getRandom(req, res) {
        res.status(200).json(await DataService.getRandom());
    }
}
export default new DataController();
