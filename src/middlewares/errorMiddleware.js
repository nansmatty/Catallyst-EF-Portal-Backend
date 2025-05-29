export const ErrorMiddleware = (err, _req, res, _next) => {
	// Ensure err is of type CustomError
	if (err instanceof Error) {
		const error = err;
		error.statusCode = error.statusCode || 500;
		error.message = error.message || 'Internal Server Error';

		// MongoDB CastError
		if (error.name === 'CastError' && error.path) {
			error.message = `Resource not found. Invalid: ${error.path}`;
			error.statusCode = 400;
		}

		// MongoDB Duplicate Key Error
		if (error.code === 11000 && error.keyValue) {
			error.message = `Duplicate ${Object.keys(error.keyValue).join(', ')} entered.`;
			error.statusCode = 400;
		}

		res.status(error.statusCode).json({
			success: false,
			message: error.message,
		});
	} else {
		// If the error is not an instance of Error, send a generic internal server error
		res.status(500).json({
			success: false,
			message: 'Internal Server Error',
		});
	}
};
