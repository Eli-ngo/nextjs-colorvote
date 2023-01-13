import connectMongo from '../connect'
import Room from '../../../models/Room'

export default async function handler(req, res) {
  const { method } = req

  await connectMongo()

  switch (method) {
    case 'GET':
      try {
        const rooms = await Room.find({}).populate('question') /* find all the data in our database */
        res.status(200).json({ success: true, data: rooms })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const room = await Room.create(
          JSON.parse(req.body)
        ) /* create a new model in the database */
        res.status(201).json({ success: true, data: room })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
