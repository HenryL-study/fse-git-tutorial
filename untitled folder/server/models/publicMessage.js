const mongoose = require('./db.js');

const publicMessageSchema = new mongoose.Schema({
    user: {type: String, required: true},
    time: {type: String, required: true},
    content: {type: String, required: true},
});

const PublicMessageModel = mongoose.model('publicMessage', publicMessageSchema);
module.exports = PublicMessageModel;

