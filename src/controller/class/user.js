const MachineOptions = require("./machine")
const inquirer = require("inquirer");
const options = require("../../data");
const Choices = require("inquirer/lib/objects/choices");

class User extends MachineOptions {
    constructor({opt, name, selected}){
        super({opt});
        this._name = name;
        this._selected = selected;
        this._sort = this.sort()
    }

    set name(string){
        this._name = string
    }

    get name(){
        return this._name
    }

    set selected(string){
        this._selected = string
    }

    get selected(){
        return this._selected
    }

    logic(){
        if (this._selected === this._sort){
            return `${this._name}, você empatou! - usuário: ${this._selected} | máquina: ${this._sort}`
        } else if ((this._selected === "Pedra" && this._sort === "Tesoura") || (this._selected === "Papel" && this._sort === "Pedra") || (this._selected === "Tesoura" && this._sort === "Papel")){
            return `${this._name}, você ganhou! - usuário: ${this._selected} | máquina: ${this._sort}`
        } else { //if ((this._selected === "Tesoura" && this._sort === "Pedra") || (this._selected === "Papel" && this._sort === "Tesoura") || (this._selected === "Pedra" && this._sort === "Papel"))
            return `${this._name}, você perdeu! - usuário: ${this._selected} | máquina: ${this._sort}`
        }
    }

    game(){
        return inquirer //para método precisamos retornar o resultado
            .prompt([
                {
                    name: "name",
                    message: "Qual o seu nome? ",
                    default: "Jogador(a)"
                },
                {
                    type: "list",
                    name: "jokenpo",
                    message: "Selecione uma das opções: ",
                    choices: options
                }
            ]).then((anwers) => {
                this._name = anwers.name
                this._selected = anwers.jokenpo
                console.info(`${this.logic()}`)
            })
    }
}

// Utilizamos npm i inquirer para instalar node_modules

module.exports = User