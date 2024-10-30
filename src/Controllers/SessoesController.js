const SessoesModel = require("../Models/SessoesModel")

class SessoesController {

    async create(req, res){
        try {
            const Sessoes = await SessoesModel.create(req.body);

            return res.status(200).json(Sessoes);
        } catch (error) {
            res.status(500).json({message: "Deu ruim", error: error.message})
        }
        
    }

    async read(req, res){
        try {
            const Sessoess = await SessoesModel.find().populate('id_usuarios', "-senha");
        
            return res.status(200).json(Sessoess);
        } catch (error) {
            res.status(500).json({message: "Deu ruim", error: error.message})
        }
        
    }

    update(req, res){
        
    }

    async delete(req, res){
        try {
            const {id} = req.params
            const sessaoEncontrada = await SessoesModel.findById(id);

            if (!sessaoEncontrada) return res.status(404).json({message: "Sessão não encontrada"});
            await sessaoEncontrada.deleteOne();

            return res.status(200).json({"mensagem" : "Sessão deletada com sucesso"})
        } catch (error) {
            res.status(500).json({message: "Deu ruim", error: error.message})
        }
        

    }

}

module.exports = new SessoesController();