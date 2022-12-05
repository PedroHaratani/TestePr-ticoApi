const cadastroPessoaInterface =require('../intefaces/cadastroPessoaInterface');
const PessoaController = require ('../controllers/PessoaController');
const {buscarUm} = require('../controllers/PessoaController');

class Pessoa extends cadastroPessoaInterface {
    constructor (nome,cpf,email,telefone,sexo,dataNascimento) {
        super();
        
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.telefone = telefone;
        this.sexo = sexo;
        this.dataNascimento = dataNascimento;
    }
    get cadastro(){
        var pessoa = JSON.parse(PessoaController.inserirPessoa);

        try {
            this.nome = pessoa.nome;
            this.cpf = pessoa.cpf;
            this.email = pessoa.email;
            this.telefone = pessoa.telefone;
            this.sexo = pessoa.sexo;
            this.dataNascimento = pessoa.dataNascimento;
        }catch (Exception)
        {
            throw new Exception;
        }
    }
    get update(){
        var pessoa = JSON.parse(PessoaController.alterarPessoa);

        try {
            this.nome = pessoa.nome;
            this.cpf = pessoa.cpf;
            this.email = pessoa.email;
            this.telefone = pessoa.telefone;
            this.sexo = pessoa.sexo;
            this.dataNascimento = pessoa.dataNascimento;
        }catch (Exception)
        {
            throw new Exception;
        }
    }
    get delete(){
        var pessoa = JSON.parse(PessoaController.deletarPessoa);
        
        try {
            this.nome = pessoa.nome;
            this.cpf = pessoa.cpf;
            this.email = pessoa.email;
            this.telefone = pessoa.telefone;
            this.sexo = pessoa.sexo;
            this.dataNascimento = pessoa.dataNascimento;
        }catch (Exception)
        {
            throw new Exception;
        }
    }
    get buscar(){

        var pessoa =JSON.parse(buscarUm);
        console.log(pessoa);
        

        try {
            this.nome = pessoa.nome;
            this.cpf = pessoa.cpf;
            this.email = pessoa.email;
            this.telefone = pessoa.telefone;
            this.sexo = pessoa.sexo;
            this.dataNascimento = pessoa.dataNascimento;
        }catch (Exception)
        {
            throw console.log("Deu erro");
        }
    }

}
module.exports =Pessoa;
