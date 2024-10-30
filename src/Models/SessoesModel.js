const { MongoOIDCError } = require("mongodb");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SessoesSchema = new Schema({
    id_usuarios: {
        type: Schema.Types.ObjectId,
        ref: "usuarios",
        unique: true,
    }
}, {
    timestamps: true
})

const SessoesModel = mongoose.model('sessoes', SessoesSchema);

module.exports = SessoesModel;