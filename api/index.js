const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const User = require('./models/User.js');

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
}));

mongoose.connect(process.env.MONGO_URL);

const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = '7sxm3g#gyj6%$yw0jwsxwo';


app.get('/test', (req, res) => {
    res.json('server up and running');
});

app.post('/signup', async (req, res) => {
    const { firstName, lastName, mobile, email, username, password } = req.body;
    try {
        const userDoc = await User.create({
            firstName,
            lastName,
            mobile,
            email,
            username,
            password: bcrypt.hashSync(password, bcryptSalt)
        });
        res.json(userDoc);
    } catch (error) {
        res.status(422).json(error);
    }
});

app.post('/signin', async (req, res) => {
    const { username, password } = req.body;
    const userDoc = await User.findOne({ username });
    if (userDoc) {
        const passwordOk = bcrypt.compareSync(password, userDoc.password);
        if (passwordOk) {
            jwt.sign({ username: userDoc.username, id: userDoc._id }, jwtSecret, {}, (err, token) => {
                if (err) throw err;
                res.cookie('token', token).json(userDoc);
            })
        } else {
            res.status(422).json('Incorrect password')
        }
    } else {
        res.json('User not found');
    }
});

app.get('/profile', (req, res) => {
    const {token} = req.cookies;
    if (token) {
        jwt.verify(token, jwtSecret, {}, async (err, userData) => {
            if (err) throw err;
            const {firstName, lastName, mobile, email, username, password, _id} = await User.findById(userData.id);
            res.json({firstName, lastName, mobile, email, username, password, _id});
        })
    } else {
        res.json(null);
    }
});

app.post('/signout', (req, res) => {
    res.cookie('token', '').json(true);
})

app.listen(4000);