const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./router/mainRouter');
const petRouter = require('./router/petRouter');
const userRouter = require('./router/userRouter');

app.listen(process.env.PORT || 3030, () => console.log('Server running'));

app.use(cors());
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

app.use('/', router);
app.use('/pet', petRouter);
app.use('/user', userRouter);