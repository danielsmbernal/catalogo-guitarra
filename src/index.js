import 'dotenv/config'
import express from "express";
import cors from "cors";
import guitarraController from './controller/guitarraController.js';

const servidor = express();
servidor.use(cors());
servidor.use(express.json());

servidor.use(guitarraController);

servidor.listen(process.env.PORT, () => console.log('API no ar!'));