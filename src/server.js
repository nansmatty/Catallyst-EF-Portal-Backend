import app from './app.js';
import connectDB from './config/dbConnect.js';
import { Config } from './config/index.js';

const startServer = () => {
	const PORT = Config.PORT || 5000;

	connectDB();

	try {
		app.listen(PORT, () => {
			console.log(`🚀 Server running on port -- ${PORT}`);
		});
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
};

startServer();
