const { json } = require('body-parser');
const db = require('../db');

module.exports = {
    buscarTodos: () =>{
        return new Promise((accepted,rejected)=>{
            db.query('SELECT * FROM pessoa',(error,results)=>{
                if(error) {rejected(error);return;}
                accepted(results);
                
            });
        });
    },
    buscarUm: (cpf)=>{
        return new Promise((accepted,rejected)=>{
            db.query(`SELECT * FROM pessoa p WHERE p.cpf = ?`,[cpf],(error,results)=>{
                if(error){rejected(error);return;}
                accepted(results);
                return results;
            });
        });
    },

    inserirPessoa: (nome,cpf,email,telefone,sexo,dataNascimento)=>{
        return new Promise((accepted,rejected)=>{
            db.query(`INSERT INTO pessoa (nome,cpf,email,telefone,sexo,dataNascimento) VALUES(?,?,?,?,?,STR_TO_DATE(?,'%d/%m/%Y %H:%i:%s'))`,[nome,cpf,email,telefone,sexo,dataNascimento],(error,results)=>{
                if(error){rejected(error);return;}
                accepted(results.insertId);
            });

        })
    },

    alterarPessoa: (nome,cpf,email,telefone,sexo,dataNascimento)=>{
        return new Promise((accepted,rejected)=>{
            db.query(`UPDATE pessoa p SET nome = ?,email = ?,telefone = ?,sexo = ?, dataNascimento = STR_TO_DATE(?,'%d/%m/%Y %H:%i:%s') WHERE p.cpf = ? `,[nome,email,telefone,sexo,dataNascimento,cpf],(error,results)=>{
                if(error){rejected(error);return;}
                accepted(results);
            });

        })
    },

    deletarPessoa: (cpf)=>{
        return new Promise((accepted,rejected)=>{
            db.query(`DELETE FROM pessoa p WHERE p.cpf = ? `,[cpf],(error,results)=>{
                if(error){rejected(error);return;}
                accepted(results);
            });

        })
    }
};