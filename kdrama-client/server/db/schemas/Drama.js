const mongoose = require("mongoose")

const DramaSchema = new mongoose.Schema({
    name: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    year: {
        type: mongoose.SchemaTypes.Number,
        required: true,
    },
    createdAt: {
        type: mongoose.SchemaTypes.Date,
        required: true,
        default: new Date(),
    }
})

module.exports = mongoose.model('kdramas', DramaSchema)