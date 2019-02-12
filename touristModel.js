import mongoose from 'mongoose'
const Schema = mongoose.Schema
const touristModel=new Schema({
    name: {type: String},
    surname: {type: String}
})

export default mongoose.model('tourists',touristModel)