import "reflect-metadata"
require('dotenv').config();
import "./src/shared/container";
import { API_PORT } from './env';
import Express, { json } from 'express';
import { main } from './src/shared/database';
import { bookRoutes } from './src/modules/book';
import cors from 'cors'; 

const app = Express();
main();

app.use(json());
app.use(cors())

app.use("/book", bookRoutes);

app.listen(API_PORT, () => {
    console.log(`Running on Port ${API_PORT}`);
});