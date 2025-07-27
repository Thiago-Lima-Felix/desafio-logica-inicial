/*
let XP = 6765
let nome = "ThiaGo"
let nivel

for( let i = 0; i <= XP ; i++){
    XP += 4
    if(XP <= 1000){
        nivel = "ferro"
    }
    else if(XP >= 1001 && XP <= 2000){
        nivel = "bronze"
    }
    else if(XP >= 2001 && XP <= 5000){
        nivel = "prata"
    }
    else if(XP >= 5001 && XP <= 7000){
        nivel = "ouro"    
    }
    else if(XP >= 7001 && XP <= 8000){
        nivel = "platina"
    }
    else if(XP >= 8001 && XP <= 9000){
        nivel = "ascendente"
    }
    else if(XP >= 9001 && XP <= 10000){
        nivel = "imortal"
    }
    else if(XP >= 10001){
        nivel = "radiante"
    }else {
        nivel = "XP inválida"
    }
}
console.log("O Herói de nome " + nome + " está no nível " + nivel + ".")

*/
let XP = 100010
let nome = "ThiaGo"
let nivel = "XP inválida"

for (let i = 0; i <= 10001; i++) {
    if (XP <= 1000) {
        nivel = "ferro"
        break
    } else if (XP <= 2000) {
        nivel = "bronze"
        break
    } else if (XP <= 5000) {
        nivel = "prata"
        break
    } else if (XP <= 7000) {
        nivel = "ouro"
        break
    } else if (XP <= 8000) {
        nivel = "platina"
        break
    } else if (XP <= 9000) {
        nivel = "ascendente"
        break
    } else if (XP <= 10000) {
        nivel = "imortal"
        break
    } else if (XP > 10000) {
        nivel = "radiante"
        break
    }
}

console.log("O Herói de nome " + nome + " está no nível " + nivel + ".")