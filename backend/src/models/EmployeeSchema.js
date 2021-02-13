const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    nacionalID: {
        type: String,
        required: true
    },
    birthDate: {
        type: Date,
        required: true
    },
    admissionDate: {
        type: Date,
        required: true
    },
    journeyLength: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    coordinator: {
        type: String,
        required: true
    },
    useJourneyControl: {
        type: Boolean,
        required: true
    },
    journeys: {
        type: [Date]
    }
    
})

module.exports = mongoose.model('Employee', EmployeeSchema)