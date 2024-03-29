const mongoose = require('mongoose');
const HOST = 'localhost:27017';
const DB = 'project_manager';
const DB_URL = process.env.DATABASE_URL || `mongodb://${HOST}/${DB}`;

module.exports = {
  connect: async () => {
    try {
      const resp = await mongoose.connect(DB_URL, {useNewUrlParser: true});
      if (resp) {
        console.log('Database connection successful');
      }
    } catch (err) {
      console.error('Database connection error');
    }
  }
};
