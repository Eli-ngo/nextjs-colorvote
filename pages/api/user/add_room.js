import connectMongo from '../connect'
import User from '../../../models/User'
import Room from '../../../models/Room'

export default async function handler(req, res) {
  const { method } = req

  await connectMongo()

  switch (method) {
    case 'POST':
      const body = JSON.parse(req.body)
      try {
        const targetRoom = await Room.findOne({ code: body.code })

        if (targetRoom) {
          const user = await User.findById(body.userId)
          var room = await Room.findByIdAndUpdate(targetRoom._id, {
            $push: {
              users: user
            }
          })
          res.status(200).json({ success: true, data: room, message: "Vous avez rejoint la room" })
        } else {
          return res.status(400).json({ success: false, message: "Le code est incorrect" })
        }
      } catch (error) {
        res.status(400).json({ success: false, message: "Erreur 2" })
      }
      break
    default:
      res.status(400).json({ success: false, message: "Erreur" })
      break
  }
}
