import mongoose from 'mongoose'

const RoomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name for this room.'],
    maxlength: [20, 'Name cannot be more than 60 characters'],
  },
  
  code: {
    type: String,
    required: [true, "Please provide the room's code"],
    maxlength: [5, ""],
    minlength: [5, ""],
  },

  users: [
    {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
  ],

  closed: {
    type: Boolean,
    default: false,
  },

  question: [
    {type: mongoose.Schema.Types.ObjectId, ref: 'Question'}
  ],
})

export default mongoose.models.Room || mongoose.model('Room', RoomSchema)

