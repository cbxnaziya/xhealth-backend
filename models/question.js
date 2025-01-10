const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    questions: [
        {
            question: { type: String, required: true },
            options: [
                {
                    option: { type: String, required: true },
                    weightage: { type: Number, required: true },
                }
            ],
        }
    ],
}, { timestamps: true });

module.exports = mongoose.model('Question', questionSchema);
