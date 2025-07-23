let XP = 9864
let nome = "ThiaGo"
let nivel

for( let i = 0; i < 1; i++){
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