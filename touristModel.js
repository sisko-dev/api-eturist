import mongoose from 'mongoose'
const Schema = mongoose.Schema
const touristModel=new Schema({
    name: {type: String},
    surname: {type: String},
    checkindate: {type: Date},
    checkoutdate: {type: Date},
    doctype: {type: String},
    accommodation: {type: String},
    docnum:{type: String},
    checkedin:{type: Boolean},
    


})

export default mongoose.model('tourists',touristModel)