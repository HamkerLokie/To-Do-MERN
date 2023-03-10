const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ItemSchema = new Schema ({
    user:{
    type: Schema.Types.ObjectId,
    ref: 'User'
    },
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    isDone: {
      type: Boolean,
      default: false,
    }
});



module.exports = Item = mongoose.model('item', ItemSchema);