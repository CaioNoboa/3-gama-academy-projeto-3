// Iniciamos no terminal com " npm init -y " (criou package,json)
// Depois " code . " que fez abrir a pasta no VS

// const rl = require("./interface") - Não foi utilizada posteriormente, só para saber se estava funcionando

// rl.question("Você é legal?", resposta => {
//     console.log(`Sua resposta foi "${resposta}"`);
//     rl.close(); //para encerrar a interface
// })

// const MachineOptions = require("./controller/class/machine")

const options = require("./data")
const User = require("./controller/class/user") 
let jogar = new User({opt: options}).game()
jogar