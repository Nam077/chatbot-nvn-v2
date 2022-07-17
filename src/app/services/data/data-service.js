import db from '../../models';
export class DataService {
    async getAll() {
        return new Promise(async (resolve, reject) => {
            try {
                let datas = await db.Data.findAll({});
                resolve(datas);
            } catch (error) {
                reject(error);
            }
        });
    }
    async create(data) {
        return new Promise(async (resolve, reject) => {
            try {
                let data = await db.Data.create({
                    key: data.key,
                    image: data.image,
                    respone: data.respone,
                });
                resolve(data);
            } catch (error) {
                reject(error);
            }
        });
    }
    async update(id, data) {
        return new Promise(async (resolve, reject) => {
            try {
                let data = await db.Data.update(data, {
                    where: {
                        id: id,
                    },
                });
                resolve(data);
            } catch (error) {
                reject(error);
            }
        });
    }
    async delete(id) {
        return new Promise(async (resolve, reject) => {
            try {
                let data = await db.Data.destroy({
                    where: {
                        id: id,
                    },
                });
                resolve(data);
            } catch (error) {
                reject(error);
            }
        });
    }
    async getById(id) {
        return new Promise(async (resolve, reject) => {
            try {
                let data = await db.Data.findOne({
                    where: {
                        id: id,
                    },
                });
                resolve(data);
            } catch (error) {
                reject(error);
            }
        });
    }
    async getByKey(key) {
        return new Promise(async (resolve, reject) => {
            try {
                let data = await db.Data.findOne({
                    where: {
                        key: key,
                    },
                });
                resolve(data);
            } catch (error) {
                reject(error);
            }
        });
    }
    async getRandom() {
        return new Promise(async (resolve, reject) => {
            try {
                let data = await db.Data.findOne({
                    order: [[db.sequelize.fn('RAND')]],
                });
                resolve(data);
            } catch (error) {
                reject(error);
            }
        });
    }
    async getCount() {
        return new Promise(async (resolve, reject) => {
            try {
                let data = await db.Data.count();
                resolve(data);
            } catch (error) {
                reject(error);
            }
        });
    }
    async getAllPagination(page, limit) {
        return new Promise(async (resolve, reject) => {
            try {
                const count = await this.getCount();
                let datas = await db.Data.findAll({
                    offset: page * limit, // your page number
                    limit: limit,
                });
                //resolve page , current, limit, allpage, data
                resolve({
                    current: page,
                    limit: limit,
                    page: Math.ceil(count / limit),
                    count: count,
                    datas: datas,
                });
            } catch (error) {
                reject(error);
            }
        });
    }
}
export default new DataService();
