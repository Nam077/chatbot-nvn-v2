import express from 'express';
export class ViewEngine {
    init(app) {
        app.use(express.static('./src/public'));
        app.set('view engine', 'ejs');
        app.set('views', './src/views');
    }
}
export default new ViewEngine();
