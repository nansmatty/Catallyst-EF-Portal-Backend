import Feedback from '../models/FeedbackModel.js';
import CatchAsyncError from '../utils/catchAsyncError.js';
import ErrorHandler from '../utils/errorHandler.js';

export const getAllFeedback = CatchAsyncError(async (req, res, next) => {
	const { category } = req.query;

	let query = {};

	if (category) {
		query.category = category;
	}

	const feedbackList = await Feedback.find(query).sort({ createdAt: -1 });

	return res.status(200).json({ success: true, data: feedbackList });
});

export const submitFeedback = CatchAsyncError(async (req, res, next) => {
	const { feedbackText, category } = req.body;

	console.log({ feedbackText, category });

	if (!feedbackText || !category) {
		return next(new ErrorHandler('Please provide all the details', 400));
	}

	const newFeedback = await Feedback.create({ feedbackText, category });

	if (!newFeedback) {
		return next(new ErrorHandler('Something went wrong while submitting the feedback', 404));
	}

	return res.status(201).json({
		success: true,
		message: 'Feedback submitted successfully.',
	});
});

export const markAsReviewed = CatchAsyncError(async (req, res, next) => {
	const { id } = req.params;

	const updatedFeedback = await Feedback.findByIdAndUpdate(id, { reviewed: true }, { new: true });

	if (!updatedFeedback) {
		return next(new ErrorHandler('Feedback not found', 404));
	}

	res.status(200).json({
		success: true,
		message: 'Feedback marked as reviewed.',
	});
});

export const deleteFeedback = CatchAsyncError(async (req, res, next) => {
	const { id } = req.params;

	const deletedFeedback = await Feedback.findByIdAndDelete(id);

	if (!deletedFeedback) {
		return next(new ErrorHandler('Feedback not found', 404));
	}

	res.status(200).json({
		success: true,
		message: 'Feedback deleted successfully',
	});
});
