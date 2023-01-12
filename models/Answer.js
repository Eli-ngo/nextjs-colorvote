import mongoose from 'mongoose'

const AnswerSchema = new mongoose.Schema({
    answer: {
        type: Number,
        required: [true, 'Please provide a answer.'],
    },

    users: [
        {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
    ]
})

export default mongoose.models.Answer || mongoose.model('Answer', AnswerSchema)
