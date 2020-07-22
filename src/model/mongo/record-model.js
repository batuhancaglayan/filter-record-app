/**
 * Configure records schema with the help of mongoose.
 */

const mongoose = require("../../db/mongo-connection");

const collectionName = "records";

const recordSchema = mongoose.Schema({
    key: { type: mongoose.SchemaTypes.String, required: true },
    value: { type: mongoose.SchemaTypes.String, required: true },
    createdAt : { type : Date, default: Date.now },
    counts: []
}, {autoCreate: false});

const Record = mongoose.model(collectionName, recordSchema);

module.exports = Record;