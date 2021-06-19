require("dotenv").config();
const mongoose = require('mongoose');

const DB_NAME = 'mongoose-read-example';
const URI = process.env.MONGODB_URI || 'mongodb://localhost:27017';

mongoose
  .connect(`${URI}/${DB_NAME}`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log(`Succesfully connected to ${DB_NAME}`))
  .catch((error) => console.error('Error connecting to DB', error))

process.on('SIGINT', () => {
  mongoose.connection
    .close()
    .then(() => console.log('Successfully disconnected from DB'))
    .catch((e) => console.error('Error disconnecting from DB', e))
    .finally(() => process.exit())
})