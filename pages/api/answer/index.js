import connectMongo from '../connect'
import Answer from '../../../models/Answer'
import Question from '../../../models/Question'

export default async function handler(req, res) {
  const { method } = req

  await connectMongo()

  switch (method) {
    case 'GET':
      try {
        const answer = await Answer.find({}) /* find all the data in our database */
        res.status(200).json({ success: true, data: answer })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      const body = JSON.parse(req.body)
      try {
        const answer = await Answer.create(
          body
        ) /* create a new model in the database */
        if (!answer) {
          return res.status(400).json({ success: false, message: "Erreur" })
        } else {
          var question = await Question.findByIdAndUpdate(body.id, {
            $push: { answers: answer }
          }, {
              new: true,
              runValidators: true,
          })
          res.status(201).json({ success: true, data: answer, question: question })
        }
      } catch (error) {
        res.status(400).json({ success: false, message: "Erreur" })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
