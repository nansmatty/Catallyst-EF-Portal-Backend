import { config } from 'dotenv';

config();

const { PORT, NODE_ENV, MONGODB_URI } = process.env;

export const Config = {
	PORT,
	NODE_ENV,
	MONGODB_URI,
};
