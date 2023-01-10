import mongoose from 'mongoose'

const QuestionSchema = new mongoose.Schema({
  question: {

    type: String,
    required: [true, 'Please provide a question.'],
  },

})

export default mongoose.models.Question || mongoose.model('Question', QuestionSchema)
