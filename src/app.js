import express from 'express';
import morgan from 'morgan';
import { ErrorMiddleware } from './middlewares/errorMiddleware.js';
import ErrorHandler from './utils/errorHandler.js';
import feedbackRoutes from './routes/feedbackRoutes.js';
import { Config } from './config/index.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (Config.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

app.get('/api/health-check', (_req, res) => {
	try {
		res.status(200).json({
			success: true,
			message: 'API is working',
		});
	} catch (error) {
		console.error(error);
	}
});

app.use('/api/feedback', feedbackRoutes);

//Fallback route
app.use((req, _res, next) => {
	next(new ErrorHandler(`Route  ${req.originalUrl} not found`, 404));
});

app.use(ErrorMiddleware);

export default app;
