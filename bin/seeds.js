const mongoose = require('mongoose');
const Post = require('../models/Post.model');
const data = require('../posts.json');

require('../config/db.config');

mongoose.connection.once('connected', () => {
  mongoose.connection.db.dropDatabase()
    .then(() => {
      console.log('Database cleared');

      return Post.insertMany(data)
    })
    .then((postsCreated) => console.log(`${postsCreated.length} posts have been created`))
    .catch(e => console.error(e))
    .finally(() => {
      mongoose.connection.close()
        .then(() => console.log('Finish seeds.js'))
        .catch(e => console.error(e))
        .finally(() => {
          process.exit(0)
        })
    })
})