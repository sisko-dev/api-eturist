import mongoose from 'mongoose'
const Schema = mongoose.Schema
const touristModel=new Schema({
    name: {type: String},
    surname: {type: String},
    checkindate: {type: Date},
    checkoutdate: {type: Date},
    doctype: {type: String}
})

export default mongoose.model('turistis',touristModel)