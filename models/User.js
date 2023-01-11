import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name for this user.'],
    maxlength: [20, 'Name cannot be more than 60 characters'],
  },
  
  token: {
    type: String,
    required: [true, "Please provide the user's token"],
  },
})

export default mongoose.models.User || mongoose.model('User', UserSchema)
