class MachineOptions{
    constructor({opt}){
        this._opt = opt 
    }

    sort(){
        const sortOpt = Math.floor(Math.random() * 3 - 0) //máximo e mínimo do random
        return this._opt[sortOpt].name
    }

    //para a máquina retornar aleatoriamente uma das 3 opções no data
    set opt(option){ //para atribuir valor
        this._opt = option
    }

    get opt(){ //para retornar o valor; não precisa passar parâmetro para o get
        return this._opt
    }
}

module.exports = MachineOptions