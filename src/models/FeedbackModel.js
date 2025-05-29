import mongoose from 'mongoose';

const feedbackSchema = new mongoose.Schema(
	{
		feedbackText: {
			type: String,
			required: [true, 'Feedback is required!'],
			trim: true,
		},

		category: {
			type: String,
			enum: ['Work-Environment', 'Leadership', 'Growth', 'Others'],
			required: true,
		},

		reviewed: {
			type: Boolean,
			default: false,
		},
	},
	{
		timestamps: true,
	}
);

const Feedback = mongoose.model('Feedback', feedbackSchema);

export default Feedback;
