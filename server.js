import express from 'express'
import router from './router'
import accRouter from './router'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
const app = express();
const db= mongoose.connect('mongodb://admin:admin11@ds021915.mlab.com:21915/eturist',{useNewUrlParser: true})



const port = process.env.PORT || 5656;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// routes go here


app.use('/api/tourists',router)
app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})