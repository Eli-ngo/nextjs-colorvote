import connectMongo from '../connect';
import Room from '../../../models/Room';
import Question from '../../../models/Question';
import User from '../../../models/User';

export default async function handler(req, res) {
  const {
    query: { id, questionId, userId },
    method,
  } = req

  await connectMongo()

  switch (method) {
    case 'GET' /* Get a model by its ID */:
      try {
        const room = await Room.findById(id).populate('question users')
        
        if (!room) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: room })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    case 'PUT' /* Edit a model by its ID */:
      try {
        if (questionId) {
            const question = await Question.findById(questionId)
            var room = await Room.findByIdAndUpdate(id, {
                $push: { question: question }
            }, {
                new: true,
                runValidators: true,
            })
            res.status(200).json({ success: true, data: room, message: "La question a été ajoutée" })
        } else {
            var room = await Room.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true,
            })
            res.status(200).json({ success: true, data: room, message: "La room a été modifiée" })
        }
        if (!room) {
          return res.status(400).json({ success: false, message: "La room n'a pas été modifiée"})
        }
      } catch (error) {
        res.status(400).json({ success: false, message: "Une erreur est survenue" })
      }
      break

    case 'DELETE' /* Delete a model by its ID */:
      try {
        const deletedRoom = await Room.deleteOne({ _id: id })
        if (!deletedRoom) {
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
