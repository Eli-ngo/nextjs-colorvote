import mongoose from 'mongoose'

const AnswerSchema = new mongoose.Schema({
    answer: {
        type: Number,
        required: [true, 'Please provide a answer.'],
    },

    question: [
        {type: mongoose.Schema.Types.ObjectId, ref: 'Question'}
    ],

    room: [
        {type: mongoose.Schema.Types.ObjectId, ref: 'Room'}
    ],

    user: [
        {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
    ]
})

export default mongoose.models.Answer || mongoose.model('Answer', AnswerSchema)
