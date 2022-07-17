import FontService from '../../../services/font/font-service';
export class FontController {
    async getAll(req, res) {
        res.status(200).json(await FontService.getAll());
    }
    async getById(req, res) {
        res.status(200).json(await FontService.getById(req.params.id));
    }
    async create(req, res) {
        res.status(200).json(await FontService.create(req.body));
    }
    async update(req, res) {
        res.status(200).json(await FontService.update(req.params.id, req.body));
    }
    async delete(req, res) {
        res.status(200).json(await FontService.delete(req.params.id));
    }
    async getByKeyword(req, res) {
        res.status(200).json(await FontService.getByKey(req.params.keyword));
    }
    async getRandom(req, res) {
        res.status(200).json(await FontService.getRandom());
    }
}
export default new FontController();
