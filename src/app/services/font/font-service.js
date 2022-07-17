import db from '../../models/index';
export class FontService {
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
    async getByKey(key) {
        return new Promise(async (resolve, reject) => {
            try {
                let font = await db.Font.findOne({
                    where: {
                        key: key,
                    },
                });
                resolve(font);
            } catch (error) {
                reject(error);
            }
        });
    }
    //pagination
    async getAllPagination(page, limit) {
        return new Promise(async (resolve, reject) => {
            try {
                let count = await this.getCount();

                let fonts = await db.Font.findAll({
                    offset: page * limit, // your page number
                    limit: limit,
                    raw: true,
                });
                resolve({ count: count, page: Math.floor(count / limit), current: page, limit: limit, fonts: fonts });
            } catch (error) {
                reject(error);
            }
        });
    }
    async getCount() {
        return new Promise(async (resolve, reject) => {
            try {
                let count = await db.Font.count();
                resolve(count);
            } catch (error) {
                reject(error);
            }
        });
    }
    async insertMulti(fonts) {
        return new Promise(async (resolve, reject) => {
            try {
                fonts.forEach((element, index) => {
                    element.id = index + 1;
                    element.createAt = formartDate();
                    element.updateAt = formartDate();
                });
                await db.Font.destroy({ where: {} });
                let msg = await db.Font.bulkCreate(fonts);
                resolve(fonts);
            } catch (error) {
                reject(error);
            }
        });
    }
    async deleteAll() {
        return new Promise(async (resolve, reject) => {
            try {
                let font = await db.Font.destroy({ where: {} });
                resolve(font);
            } catch (error) {
                reject(error);
            }
        });
    }
    formartDate() {
        var date = new Date();
        return (
            ('00' + (date.getMonth() + 1)).slice(-2) +
            '/' +
            ('00' + date.getDate()).slice(-2) +
            '/' +
            date.getFullYear() +
            ' ' +
            ('00' + date.getHours()).slice(-2) +
            ':' +
            ('00' + date.getMinutes()).slice(-2) +
            ':' +
            ('00' + date.getSeconds()).slice(-2)
        );
    }
    async getRandom() {
        return new Promise(async (resolve, reject) => {
            try {
                let fonts = await db.Font.findAll({
                    limit: 10,
                    //random order
                    order: [[db.sequelize.fn('RAND')]],
                });
                resolve(fonts);
            } catch (error) {
                reject(error);
            }
        });
    }
}
export default new FontService();
