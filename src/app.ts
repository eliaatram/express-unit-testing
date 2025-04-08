import express, { Request, Response } from 'express';
import cors from 'cors';
// import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import healthCheckRoutes from './routes/health.route';
import itemRoutes from './routes/item.route';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(cors());

app.get('/', (_req: Request, res: Response) => {
	res.json({
		status: true
	})
});

app.use('/health', healthCheckRoutes);
app.use('/item', itemRoutes);

// Connect to mongoDB
// let mongoDB = process.env.MONGODB_URL || "mongodb://localhost:27017/express-api-unit-test-starter";
// mongoose.connect(mongoDB, {
// });
// mongoose.Promise = global.Promise;

// mongoose.connection.on('error', console.error.bind(console, '❌❌❌ MongoDB Connection Error ❌❌❌'));

module.exports = app;