const mongoose = require('mongoose')

const Schema = mongoose.Schema

const marineSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        affliation: {
            type: String,
            enum: ['Loyalist', 'Traitor', 'None'],
            required: true
        },
        legion: {
            type: String,
            enum: ['Ultramarines', 'Space Wolves', 'Sons of Horus', 'Blood Angels', 'World Eaters']
        }
    },
    {
        timestamps: true,
    }
)

const Marine = mongoose.model('marine', marineSchema)

module.exports = Marine