const mongoose = require('mongoose');

const schema = new mongoose.Schema(
    {
        list_id: {type: mongoose.Schema.Types.ObjectId, ref: "List"},
        name: String,
        description: String
    }
);

module.exports = mongoose.model('Task', schema);