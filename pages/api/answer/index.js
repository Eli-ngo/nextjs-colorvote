import connectMongo from '../connect'
import Answer from '../../../models/Answer'

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
      try {
        const answer = await Answer.create(
          req.body
        ) /* create a new model in the database */
        res.status(201).json({ success: true, data: answer })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
