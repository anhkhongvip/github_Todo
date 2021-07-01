const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    title:{
        type : String,
        required : true
    },

    description : {
        type : String
    },
})

module.exports = mongoose.model('todo', TodoSchema);