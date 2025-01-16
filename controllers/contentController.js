const Content = require('../models/content');

// Create a new question
const createQuestion = async (req, res) => {
    try {
        const { category, content } = req.body;

        const newQuestion = new Content({
            category,
            content,
        });

        const savedQuestion = await newQuestion.save();
        res.status(201).json(savedQuestion);
    } catch (error) {
        res.status(500).json({ message: 'Error creating question', error });
    }
};

// Get all questions
const getAllQuestions = async (req, res) => {
    try {
        const questions = await Content.find().populate('category');
        res.status(200).json(questions);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching questions', error });
    }
};

// Get question by ID
const getQuestion = async (req, res) => {
    try {
        const { id } = req.params;
        const question = await Content.findById(id).populate('category');
        if (!question) {
            return res.status(404).json({ message: 'Question not found' });
        }
        res.status(200).json(question);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching question', error });
    }
};

// Update question by ID
const updateQuestion = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;

        const updatedQuestion = await Content.findByIdAndUpdate(id, updatedData, { new: true, runValidators: true });
        if (!updatedQuestion) {
            return res.status(404).json({ message: 'Question not found' });
        }
        res.status(200).json(updatedQuestion);
    } catch (error) {
        res.status(500).json({ message: 'Error updating question', error });
    }
};

// Delete question by ID
const deleteQuestion = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedQuestion = await Content.findByIdAndDelete(id);
        if (!deletedQuestion) {
            return res.status(404).json({ message: 'Question not found' });
        }
        res.status(200).json({ message: 'Question deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting question', error });
    }
};

module.exports = {
    createQuestion,
    getAllQuestions,
    getQuestion,
    updateQuestion,
    deleteQuestion,
};
