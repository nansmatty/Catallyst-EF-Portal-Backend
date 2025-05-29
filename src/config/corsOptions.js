import { Config } from './index.js';

// const allowedOrigins = [Config.FRONTEND_URL];

export const corsOptions = {
	origin: (origin, callback) => {
		const allowedOrigin = Config.FRONTEND_URL || 'http://localhost:5173'; // Remove trailing slash

		if (!origin || origin.replace(/\/$/, '') === allowedOrigin) {
			callback(null, true);
		} else {
			callback(new Error('Not allowed by CORS'));
		}
	},
};
