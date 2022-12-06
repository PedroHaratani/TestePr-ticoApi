const cadastroPessoaInterface =require('../intefaces/cadastroPessoaInterface');
//const PessoaController = require ('../controllers/PessoaController');
const PessoaService = require('../services/PessoaService');

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
    
    get cadastro() {

            return this.nome +"";            //PessoaService.inserirPessoa(this.nome,this.cpf,this.email,this.telefone,this.sexo,this.dataNascimento);
            this.nome = nome;
            this.cpf = cpf;
            this.email = email;
            this.telefone = telefone;
            this.sexo = sexo;
            this.dataNascimento = dataNascimento;
        
        
    }
    get update(){
       //var pessoa = JSON.parse(PessoaController.deletarPessoa);
       
       return this.cpf +""//PessoaService.inserirPessoa(this.nome,this.cpf,this.email,this.telefone,this.sexo,this.dataNascimento);
       this.nome = nome;
       this.cpf = cpf;
       this.email = email;
       this.telefone = telefone;
       this.sexo = sexo;
       this.dataNascimento = dataNascimento;
        
    }
    get delete(){
       // var pessoa = JSON.parse(PessoaController.deletarPessoa);
        
       return this.dataNascimento +""//PessoaService.inserirPessoa(this.nome,this.cpf,this.email,this.telefone,this.sexo,this.dataNascimento);
       this.nome = nome;
       this.cpf = cpf;
       this.email = email;
       this.telefone = telefone;
       this.sexo = sexo;
       this.dataNascimento = dataNascimento;
        
    }
    get buscar(){
        //var pessoa = JSON.parse(PessoaController.buscarUm);
        
        
        return this.email +"" //PessoaService.inserirPessoa(this.nome,this.cpf,this.email,this.telefone,this.sexo,this.dataNascimento);
            this.nome = nome;
            this.cpf = cpf;
            this.email = email;
            this.telefone = telefone;
            this.sexo = sexo;
            this.dataNascimento = dataNascimento;
        
    }

}
module.exports =Pessoa;
