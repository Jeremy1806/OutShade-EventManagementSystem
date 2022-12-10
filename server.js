const express = require("express");
const {db }= require('./models/db')
const app = express();
const dotenv = require('dotenv')
app.use(express.json({ extended: false }));


dotenv.config();

const port = 3000
const firstTime = process.env.FIRST_TIME;


//db connection check


if (firstTime) {
  db.sync({ force: true })
    .then(() => {
      app.listen(port, async () => {
        console.log(`Backend server running on port ${port} `);
      });
    })
    .catch((err) => console.error(err));
} else {
  db.sync()
    .then(() => {
      app.listen(port, () => {
        console.log(`Backend server running on port ${port} `);
      });
    })
    .catch((err) => console.error(err));
}


//routes 

const authRoutes = require('./routes/user');

app.use('/api/user',authRoutes);



