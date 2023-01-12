import connectMongo from '../connect'
import Admin from '../../../models/Admin'
import User from '../../../models/User'
const bcrypt = require("bcrypt")

export default async function handler(req, res) {
  const { method } = req

  await connectMongo()

  switch (method) {
    case 'POST':
      try {
        const admin = await Admin.findOne({ name: req.body.name })
        if (!admin) {
            res.status(400).json({ success: false, data: "user not found" })
        } else {
            bcrypt.compare(req.body.password, admin.password, function(err, result) {
                console.log("result", admin)
            });
            res.status(201).json({ success: true, data: "user connected" })
        }
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
