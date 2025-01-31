const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    content: [
        {
            title: { type: String, required: true },
            plan: [
                {
                    title: { type: String, required: true },
                    name: { type: String, required: true },
                    type: { type: String, required: true },
                    content: { type: String, required: true },
                    duration: { type: String, required: true },
                    image: { type: String, required: true },
                }
            ],
            status: { type: String,},
            review: { type: String, },           
        }
    ],
}, { timestamps: true });

module.exports = mongoose.model('Content', contentSchema);
