require('dotenv').config();
import express from 'express';
import bodyParser from 'body-parser';
import ViewEngine from './configs/view/view-config';
import ConnectDB from './configs/database/connect-database';
import WebRoute from './routes/web/web-route';
import ApiFoodRoute from './routes/api/food/food-route';
import ApiFontRoute from './routes/api/font/font-route';
import ApiDataRoute from './routes/api/data/data-route';
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
WebRoute.init(app);
//view engine setup
ViewEngine.init(app);
//routes setup
ApiFontRoute.init(app);
ApiFoodRoute.init(app);
ApiDataRoute.init(app);
///database
ConnectDB.init();

let port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log('Chạy thành công http://localhost:' + port);
});
