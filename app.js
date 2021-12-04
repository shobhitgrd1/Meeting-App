require('dotenv').config();
const express = require('express');
const app = express();
const authRouther = require('./routes/auth')
const meetRouther = require('./routes/meeting')
const authenticationUser =require('./middleware/authentication')


//deta base
const connectDB = require('./db/connect')

// error handler
const notFoundMiddleware = require('./middleware/not-found');

app.use(express.json());
// extra packages

// routes
app.get('/', (req, res) => {
  res.send('jobs api');
});

app.use('/api/v1/auth', authRouther)
app.use('/api/v1/meeting',authenticationUser,meetRouther)

app.use(notFoundMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
