

const express = require('express');
const server = express();
const bodyParser = require('body-parser')
require('dotenv').config()

const startServer = async () => {
    await require('./db').connect();  

    server.use(bodyParser.json())
    server.use('/api/v1/portfolios', require('./routes/portfolios'))
    server.use('/api/v1/blogs', require('./routes/blogs'))

    const PORT = parseInt(process.env.PORT, 10) || 3030;
    server.listen(PORT, (err) => {
        if(err) console.error(err);
        console.log('Server ready on port', PORT);
    })
}
startServer();


