const express = require('express');
const router = express.Router();

const PessoaController = require('./controllers/PessoaController');


router.get('/pessoas',PessoaController.buscarTodos);
router.get('/pessoa/:cpf',PessoaController.buscarUm);
router.post('/insert/',PessoaController.inserirPessoa);
router.put('/update/:cpf',PessoaController.alterarPessoa);
router.delete('/delete/:cpf',PessoaController.deletarPessoa);


module.exports =router