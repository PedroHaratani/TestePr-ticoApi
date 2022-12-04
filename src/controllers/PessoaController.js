const PessoaService = require('../services/PessoaService');

formatar = (data)=>{
    let dataFormatada = new Date(Date.parse(data));
    return dataFormatada.getDate()+"/0"+dataFormatada.getMonth()+"/"+dataFormatada.getFullYear();
}

module.exports ={
    buscarTodos: async(req, res)=> {
        let json = {error:'',result:[]};

        let pessoas = await PessoaService.buscarTodos();

        for(let i in pessoas){
            json.result.push({
                id: pessoas[i].id,
                nome: pessoas[i].nome,
                cpf: pessoas[i].cpf,
                email: pessoas[i].email,
                telefone: pessoas[i].telefone,
                sexo: pessoas[i].sexo,
                dataNascimento: formatar (pessoas[i].dataNascimento)
            });
        }
        res.json(json);
    },
    buscarUm: async(req, res) =>{
        let json = {error:'',result:{}};
        let cpf = req.params.codigo;

        let pessoa = await PessoaService.buscarUm(cpf);
        if(pessoa){
        json.result=pessoa;
        }  
        res.json(json);
    },

    inserirPessoa: async(req, res) =>{
        let json = {error:'',result:{}};

        var Pessoa = {nome:req.body.nome,cpf:req.body.cpf,email:req.body.email,telefone:req.body.telefone,sexo:req.body.sexo,dataNascimento:req.body.dataNascimento};

        
        if(Pessoa){
            let pessoa = await PessoaService.inserirPessoa(Pessoa);
            json.result=pessoa;
        }  
        res.json(json);
    },

    alterarPessoa: async(req, res) =>{
        let json = {error:'',result:{}};

        let nome=req.body.nome;
        let cpf=req.params.cpf;
        let email=req.body.email;
        let telefone=req.body.telefone;
        let sexo=req.body.sexo;
        let dataNascimento=req.body.dataNascimento;

        
        if(cpf){
            var pessoa = await PessoaService.alterarPessoa(nome,cpf,email,telefone,sexo,dataNascimento);
            json.result=pessoa;
        }  
        res.json(json);
    },

    deletarPessoa: async(req, res) =>{
        let json = {error:'',result:{}};

        
        let cpf=req.params.cpf;

        
        if(cpf){
            var pessoa = await PessoaService.deletarPessoa(cpf);
            json.result=pessoa;
        }  
        res.json(json);
    }
}