import connectMongo from '../connect';
import Question from '../../../models/Question';
import Answer from '../../../models/Answer';

export default async function handler(req, res) {
  const {
    query: { id, answerId },
    method,
  } = req

  await connectMongo()

  switch (method) {
    case 'GET' /* Get a model by its ID */:
      try {
        const question = await Question.findById(id).populate('answers')
        
        if (!question) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: question })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    case 'PUT' /* Edit a model by its ID */:
      try {
        if (answerId) {
            const answer = await Answer.findById(answerId)
            var question = await Question.findByIdAndUpdate(id, {
                $push: { answers: answer }
            }, {
                new: true,
                runValidators: true,
            })
        } else {
            var question = await Question.findByIdAndUpdate(id, req.body, {
                new: true,
                runValidators: true,
            })
        }
        if (!question) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: question })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    case 'DELETE' /* Delete a model by its ID */:
      try {
        const deletedQuestion = await Question.deleteOne({ _id: id })
        if (!deletedQuestion) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: {} })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    default:
      res.status(400).json({ success: false })
      break
  }
}
