import connectMongo from '../connect'
import Question from '../../../models/Question'

export default async function handler(req, res) {
  const { method } = req

  await connectMongo()

  switch (method) {
    case 'GET':
      try {
        const question = await Question.find({}).populate('answers') /* find all the data in our database */
        res.status(200).json({ success: true, data: question })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const question = await Question.create(
          req.body
        ) /* create a new model in the database */
        res.status(201).json({ success: true, data: question })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
