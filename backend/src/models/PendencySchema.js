const mongoose = require('mongoose');

const PendencySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    nacionalID: {
        type: String,
        required: true
    },
    pendencyDate: {
        type: Date,
        required: true
    },
    coordinator: {
        type: String,
        required: true
    },
    solved: {
        type: Boolean
    },
    daysJourney: {
        type: [Date]
        required: true,
    }
    
})

module.exports = mongoose.model('Pendency', PendencySchema)