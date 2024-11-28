const UsuarioModel = require("../Models/UsuarioModel")

class UsuarioController {

    async create(req, res){
        try {
            const usuario = await UsuarioModel.create(req.body);
            console.log("usuario criado")
            const { senha, ...newUsuario } = usuario.toObject();

            res.status(200).json(newUsuario);
        } catch (error) {
            res.status(500).json({message: "Deu ruim", error: error.message})
        } 
    }

    async read(req, res){
        try {
            const usuarios = await UsuarioModel.find();
        
            return res.status(200).json(usuarios);
        } catch (error) {
            res.status(500).json({message: "Deu ruim", error: error.message})
        }
        
    }

    async update(req, res){
        try {
            const {id} = req.params;
            const usuarioEncontrado = await UsuarioModel.findById(id);
            console.log("cheguei no back update 1")
            if (!usuarioEncontrado) return res.status(404).json({message: "Usuario não encontrado"});
            console.log(req.body)
            const usuario = await usuarioEncontrado.set(req.body).save()
            console.log("cheguei no back update save")

            return res.status(200).json(usuario);
        } catch (error) {
            res.status(500).json({message: "Deu ruim", error: error.message})
        }
        
    }

    async delete(req, res){
        try {
            const {id} = req.params;
            console.log("cheguei no back update delete 1")
            const usuarioEncontrado = await UsuarioModel.findById(id);

            if (!usuarioEncontrado) return res.status(404).json({message: "Usuario não encontrado"});
            
            await usuarioEncontrado.deleteOne();
            console.log("cheguei no back update delete")
            return res.status(200).json({"mensagem" : "Usuario deletado com sucesso"})
        } catch (error) {
            res.status(500).json({message: "Deu ruim", error: error.message})
        }
    }
}

module.exports = new UsuarioController();