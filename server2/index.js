require('dotenv').config();

const express = require('express');
const router = require('./routes/index')
const sequelize = require('./db');
const cors = require('cors');
const http = require('http');
const {Server} = require('socket.io');
const path = require('path');

const fileUpload = require('express-fileupload');

const app = express();

app.use(cors({origin: '*'}))
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));

app.use('/api', router);

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: '*',
    }
})

const start = async () => {
    try{
        await sequelize.authenticate();
        await sequelize.sync();
        server.listen(process.env.PORT, () => {
            console.log(`server is running on port ${process.env.PORT}`);
        })
    } catch (e) {
        console.log(e);
    }
}

start();
