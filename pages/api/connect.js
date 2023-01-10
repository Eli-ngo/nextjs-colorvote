import mongoose from 'mongoose';

const connectMongo = async () => mongoose.connect("mongodb+srv://richine:richine123@cluster0.3jrtdhw.mongodb.net/?retryWrites=true&w=majority");

export default connectMongo;