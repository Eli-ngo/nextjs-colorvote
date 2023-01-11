import connectMongo from '../connect';
import Answer from '../../../models/Answer';
import User from '../../../models/User';

export default async function handler(req, res) {
  const {
    query: { id, userId },
    method,
  } = req

  await connectMongo()

  switch (method) {
    case 'GET' /* Get a model by its ID */:
      try {
        const answer = await Answer.findById(id).populate('user')
        
        if (!answer) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: answer })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    case 'PUT' /* Edit a model by its ID */:
      try {
        var answer = await Answer.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true,
        })
        if (!answer) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: answer })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    case 'DELETE' /* Delete a model by its ID */:
      try {
        const deletedQuestion = await Answer.deleteOne({ _id: id })
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
