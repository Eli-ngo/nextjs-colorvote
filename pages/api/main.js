import connectMongo from './connect';
import User from '../../models/User';
import Question from '../../models/Question';
import Answer from '../../models/Answer';
import Room from '../../models/Room';

export default async function addTest(req, res) {
  try {
    console.log('CONNECTING TO MONGO');
    await connectMongo();
    console.log('CONNECTED TO MONGO');

    User.createCollection().then(function (collection) {
      console.log('User is created!');
    });

    Question.createCollection().then(function (collection) {
      console.log('Question is created!');
    });

    Answer.createCollection().then(function (collection) {
      console.log('Answer is created!');
    });

    Room.createCollection().then(function (collection) {
      console.log('Room is created!');
    });

    user.validate().then

  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
