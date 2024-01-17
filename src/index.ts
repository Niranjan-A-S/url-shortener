import dotenv from "dotenv";
import express from "express";
import { connectToDB } from "./config/db";
import shortUrlsRouter from "./routes/short-urls";
import viewRouter from "./routes/view";

(async () => {
    dotenv.config();
    await connectToDB();
})();

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }))

const port = process.env.PORT || 8000;

app.use('/', viewRouter);
app.use('/shortUrls', shortUrlsRouter);

app.listen(port, () => {
    console.log(`Server running at Port ${port}`)
})