# 🛠 Projeto Node.js - API de Sessões e Usuários

Este projeto é uma API RESTful desenvolvida em **Node.js**, utilizando **Express**, **MongoDB** e **JWT** para autenticação. 

## 📂 Estrutura do Projeto

O projeto segue a arquitetura **MVC (Model-View-Controller)** e está organizado da seguinte forma:

```
src/
│── Controllers/         # 📌 Controladores da API
│   ├── AuthController.js        # Controle de autenticação e login
│   ├── SessoesController.js     # Controle das sessões dos usuários
│   ├── UsuarioController.js     # Controle de operações com usuários
│
│── Loaders/             # 📌 Configuração da aplicação
│   ├── index.js        # Arquivo principal de inicialização
│   ├── mongodb.js      # Configuração da conexão com o banco MongoDB
│
│── Middlewares/        # 📌 Middlewares de segurança e validação
│   ├── verificarJwt.js        # Middleware para verificar JWT
│   ├── verificarUsuario.js    # Middleware para verificar dados do usuário
│
│── Models/             # 📌 Modelos do banco de dados (MongoDB)
│   ├── SessoesModel.js     # Modelo das sessões
│   ├── UsuarioModel.js     # Modelo dos usuários
│
│── Validators/         # 📌 Validação dos dados recebidos na API
│   ├── AuthValidator.js        # Validação de autenticação
│   ├── SessoesValidator.js     # Validação das sessões
│   ├── UsuarioValidator.js     # Validação dos usuários
│
│── App.js              # 📌 Arquivo principal da API
│── index.js            # 📌 Ponto de entrada do servidor
│── routes.js           # 📌 Definição das rotas da API
```

## 🚀 **Tecnologias Utilizadas**
- **Node.js**
- **Express.js**
- **MongoDB & Mongoose**
- **JWT (Json Web Token)**
- **Express Validator**

## 📌 **Como Rodar o Projeto**
1. Clone este repositório:
   ```bash
   git clone https://github.com/LucasOtsuAkatsuka/Cpe_backend.git
   ```
2. Instale as dependências:
   ```bash
   cd Cpe_backend
   npm install
   ```
3. Configure as variáveis de ambiente:
   Crie um arquivo `.env` e adicione:
   ```env
   MONGO_URI=sua_string_de_conexao
   JWT_SECRET=sua_chave_secreta
   JWT_EXPIRE_IN=1d
   ```
4. Inicie a aplicação:
   ```bash
   npm start
   ```


## 📄 **Licenca**
Este projeto esta sob a licenca **MIT**. Sinta-se livre para contribuir!

