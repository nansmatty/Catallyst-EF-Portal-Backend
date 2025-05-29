import mongoose from 'mongoose';
import { Config } from './index.js';

const dbURL = Config.MONGODB_URI || '';

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(dbURL);
		console.log(`MongoDB Connected ${conn.connection.host}`);
	} catch (err) {
		if (err instanceof Error) {
			console.error(`Database connection failed: ${err.message}`);
		} else {
			console.error('Database connection failed with an unknown error.');
		}
		process.exit(1);
	}
};

export default connectDB;
