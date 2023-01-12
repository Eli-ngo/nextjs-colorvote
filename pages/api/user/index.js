import connectMongo from '../connect'
import User from '../../../models/User'

export default async function handler(req, res) {
  const { method } = req

  await connectMongo()

  switch (method) {
    case 'GET':
      try {
        const user = await User.find({}) /* find all the data in our database */
        res.status(200).json({ success: true, data: user })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        console.log(JSON.parse(req.body))
        const user = await User.create(
          JSON.parse(req.body)
        ) /* create a new model in the database */
        res.status(201).json({ success: true, data: user })
      } catch (error) {
        res.status(400).json({ success: false, message: "Erreur 1" })
      }
      break
    default:
      res.status(400).json({ success: false, message: "Erreur" })
      break
  }
}
