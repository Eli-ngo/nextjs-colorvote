import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {};

if (!process.env.MONGODB_URI) {
    throw new Error("Please add your Mongo URI to env.local");
}

export default async function handler(request, response) {
    try {
        const mongoClient = await (new MongoClient(uri, options)).connect();

        const db = mongoClient.db("Colorvote");
        const collection = db.collection("Questions");
        const results = await collection.find({}).toArray();

        response.status(200).json(results[0].name);
    } catch(e) {
        response.status(500).json(e);
    }
}