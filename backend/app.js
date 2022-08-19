const express = require('express');
const app = express();
const router = require('./router/mainRouter');

app.listen(process.env.PORT || 3000, () => console.log('Server running'));

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

app.use('/', router);