import db from '../../models';
export class FoodService {
    async getAll() {
        return new Promise(async (resolve, reject) => {
            try {
                let fonts = await db.Font.findAll({});
                resolve(fonts);
            } catch (error) {
                reject(error);
            }
        });
    }
    async create(font) {
        return new Promise(async (resolve, reject) => {
            try {
                let font = await db.Font.create({
                    name: font.name,
                    key: font.key,
                    link: font.link,
                    image: font.image,
                    message: font.message,
                    post_link: font.post_link,
                });
                resolve(font);
            } catch (error) {
                reject(error);
            }
        });
    }
    async update(id, font) {
        return new Promise(async (resolve, reject) => {
            try {
                let font = await db.Font.update(font, {
                    where: {
                        id: id,
                    },
                });
                resolve(font);
            } catch (error) {
                reject(error);
            }
        });
    }
    async delete(id) {
        return new Promise(async (resolve, reject) => {
            try {
                let font = await db.Font.destroy({
                    where: {
                        id: id,
                    },
                });
                resolve(font);
            } catch (error) {
                reject(error);
            }
        });
    }
    async getById(id) {
        return new Promise(async (resolve, reject) => {
            try {
                let font = await db.Font.findOne({
                    where: {
                        id: id,
                    },
                });
                resolve(font);
            } catch (error) {
                reject(error);
            }
        });
    }
    getRandom10() {
        return new Promise(async (resolve, reject) => {
            try {
                let fonts = await db.Font.findAll({
                    limit: 10,
                    order: [db.fn.random()],
                });
                resolve(fonts);
            } catch (error) {
                reject(error);
            }
        });
    }
}
export default new FoodService();
