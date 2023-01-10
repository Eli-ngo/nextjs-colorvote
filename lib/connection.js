import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const options = {};

let client = new MongoClient(uri, options);
let clientPromise;

if (!process.env.MONGODB_URI) {
    throw new Error('Ajouter votre Mongo URI au .env.local');
}

if (process.env.NODE_ENV !== 'production') {
    if (!global._mongoClientPromise) {
    global._mongoClientPromise = client.connect();
    }

    clientPromise = global._mongoClientPromise;
} else {
    clientPromise = client.connect();
}
export default clientPromise;