const express = require('express');
const signale = require('signale');
const dotenv = require('dotenv');
const freejobalert = require('./routes/freejobalert/route');

const app = express();
dotenv.config();

var log = signale.scope("server:global");
app.use(express.json());

app.get('/',(req,res)=>{
    res.status(200).json({mssg:"In Root"})
});


app.use('/freejobalert', freejobalert);












app.all('*', (req, res) => {
    log.error("Invalid URL");
    res.status(404).json({ err: "404 Invalid URL" })
})


app.listen(process.env.PORT || 3000, () => {
    log.watch("listening to port: " + process.env.PORT || 3000);
})

module.exports = app;