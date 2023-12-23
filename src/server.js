import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoutes from "./routes/web";
require("dotenv").config();
// nếu port không định nghĩa thì sẽ chuyển sang 8080 
const PORT = process.env.PORT || 8080;
const app = express();

// config view engine 
configViewEngine(app);
// init web routes 
initWebRoutes(app);


app.listen(PORT, () => {
    console.log('>>> jwt is running on the port ' + PORT)
})