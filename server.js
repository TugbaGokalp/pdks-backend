const express = require('express');
const cors = require('cors');
const app = express();
const http = require('http');
require('dotenv').config();
// const stripe = require('stripe')(process.env.STRIPE_SECRET);
require('./connection');
const server = http.createServer(app);
const {Server} = require('socket.io');
const io = new Server(server, {
  cors: '*',
  methods: '*'
})


const User = require('./models/User.js');
const userRoutes = require('./routes/userRoute.js');


app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/users', userRoutes);






server.listen(3000, ()=> {
  console.log('server running at port', 3000)
})

app.set('socketio', io);