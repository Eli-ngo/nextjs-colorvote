import connectMongo from '../connect';
import Room from '../../../models/Room';

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req

  await connectMongo()

  switch (method) {
    case 'GET' /* Get a model by its ID */:
      try {
        const room = await Room.findById(id)
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
        const room = await Room.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        })
        if (!pet) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: room })
      } catch (error) {
        res.status(400).json({ success: false })
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
