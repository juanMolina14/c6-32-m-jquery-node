const express = require('express');
const app = express();
const router = require('./router/mainRouter');
const petRouter = require('./router/petRouter');
const cors = require('cors');

app.listen(process.env.PORT || 3030, () => console.log('Server running'));

app.use(cors());
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

app.use('/', router);
app.use('/pet', petRouter);
app.use('/test', (req , res)=>{res.send('test url working')});