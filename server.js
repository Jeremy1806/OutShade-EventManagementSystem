const express = require("express");

const app = express();

app.use(express.json({ extended: false }));

const authRoutes = require('./routes/user');

app.use('/api/user',authRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on Port : ${PORT}`);
});
