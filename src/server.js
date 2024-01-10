import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoutes from "./routes/web";
require("dotenv").config();
import bodyParser from "body-parser";
// nếu port không định nghĩa thì sẽ chuyển sang 8080 
const PORT = process.env.PORT || 8080;
const app = express();
//config body parser 
// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
// config view engine 
configViewEngine(app);
// init web routes 
initWebRoutes(app);


app.listen(PORT, () => {
    console.log('>>> jwt is running on the port ' + PORT)
})