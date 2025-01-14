const express = require('express');
const { createQuestion, getAllQuestions, getQuestionById, updateQuestion, deleteQuestion } = require('../controllers/questionController');
// const {
//     createQuestion,
//     getAllQuestions,
//     getQuestionById,
//     updateQuestion,
//     deleteQuestion,
// } = require('../controllers/questionController');

const router = express.Router();

// Routes for CRUD operations
router.post('/add', createQuestion); // Create a new question
router.get('/', getAllQuestions); // Get all questions
router.get('/:id', getQuestionById); // Get question by ID
router.put('/:id', updateQuestion); // Update question by ID
router.delete('/:id', deleteQuestion); // Delete question by ID

module.exports = router;



// const express = require('express');
// const Question = require('../models/question');
// const Category = require('../models/category');
// const router = express.Router();

// // Add questions to a category
// router.post('/add', async (req, res) => {
//     try {
//         const { categoryId, questions } = req.body;

//         // Validate category existence
//         const category = await Category.findById(categoryId);
//         if (!category) {
//             return res.status(404).json({ error: 'Category not found' });
//         }

//         const question = new Question({ category: categoryId, questions });
//         await question.save();
//         res.status(201).json({ message: 'Questions added successfully', question });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// // Get questions by category
// router.get('/:categoryId', async (req, res) => {
//     try {
//         const { categoryId } = req.params;
//         const questions = await Question.findOne({ category: categoryId }).populate('category');
//         if (!questions) {
//             return res.status(404).json({ error: 'No questions found for this category' });
//         }
//         res.status(200).json(questions);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// module.exports = router;
