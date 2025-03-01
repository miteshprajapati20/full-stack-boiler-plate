const express = require('express');
const app = express();
const userRoutes = require('./routes/users')
// console.log('userRoutes: ', userRoutes);
const cors = require('cors');
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: 'http://localhost:5173',
}));

// user routes
app.use(userRoutes);

app.listen(process.env.PORT,(err) => {
    if(err){
        process.exit(1);
    }
    console.log(`App started on http://${process.env.HOST}:${process.env.PORT}`);
})