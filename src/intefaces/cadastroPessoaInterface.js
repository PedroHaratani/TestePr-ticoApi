class cadastroPessoaInterface {
    constructor(){
        if(!this.cadastro){
            throw new Error("Precisa possuir o metodo cadastro");
        }
        if(!this.update){
            throw new Error("Precisa possuir o metodo cadastro");
        }
        if(!this.delete){
            throw new Error("Precisa possuir o metodo cadastro");
        }
        if(!this.buscar){
            throw new Error("Precisa possuir o metodo cadastro");
        }
    }
}

module.exports = cadastroPessoaInterface;