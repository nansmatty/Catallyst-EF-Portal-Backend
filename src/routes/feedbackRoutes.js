import express from 'express';
import { deleteFeedback, getAllFeedback, markAsReviewed, submitFeedback } from '../controllers/feedbackControllers.js';

const router = express.Router();

router.route('/').get(getAllFeedback).post(submitFeedback);
router.delete('/:id', deleteFeedback);
router.put('/:id/reviewed', markAsReviewed);

export default router;
