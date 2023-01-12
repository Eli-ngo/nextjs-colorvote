import mongoose from 'mongoose'

const AdminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name for this user.'],
    maxlength: [20, 'Name cannot be more than 60 characters'],
  },
  
  password: {
    type: String,
    required: [true, "Please provide the user's password"],
  },
})

export default mongoose.models.Admin || mongoose.model('Admin', AdminSchema)
