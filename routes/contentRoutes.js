const express = require('express');
const { createQuestion, getAllQuestions, getQuestion } = require('../controllers/contentController');
const { updateQuestion } = require('../controllers/questionController');



const router = express.Router();

// Routes for CRUD operations
router.post('/add', createQuestion); // Create a new question
router.get('/', getAllQuestions); // Get all questions
router.get('/:id', getQuestion); // Get question by ID
router.put('/:id', updateQuestion); // Update question by ID
// router.delete('/:id', deleteQuestion); // Delete question by ID

module.exports = router;

