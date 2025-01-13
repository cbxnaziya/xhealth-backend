const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    questions: [
        {
            title: { type: String, required: true },
            plan: [
                {
                    title: { type: String, required: true },
                    name: { type: Number, required: true },
                    type: { type: Number, required: true },
                    content: { type: Number, required: true },
                    duration: { type: Number, required: true },
                    image: { type: Number, required: true },
                }
            ],
            status: { type: String,},
            review: { type: String, },
           
        }
    ],
}, { timestamps: true });

module.exports = mongoose.model('Question', questionSchema);

// const mongoose = require('mongoose');

// const questionSchema = new mongoose.Schema({
//     category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
//     questions: [
//         {
//             question: { type: String, required: true },
//             options: [
//                 {
//                     option: { type: String, required: true },
//                     weightage: { type: Number, required: true },
//                 }
//             ],
//         }
//     ],
// }, { timestamps: true });

// module.exports = mongoose.model('Question', questionSchema);
