// Atribui valores de vitórias e derrotas do Héroi
let saldoVitoriasHeroi = checkScoreHeroi(56, 22);

// Define em qual nível o Héroi está de acordo com o saldo final 
let nivel = saldoVitoriasHeroi;

//Função com resultado de número de vitórias - número de derrotas
function checkScoreHeroi(vitoriasHeroi, derrotasHeroi){
    let score = vitoriasHeroi - derrotasHeroi;
    return score;
}

//Condicionais para definir o nível do Héroi

if(saldoVitoriasHeroi < 10){
    nivel = "Ferro";
}
else if(saldoVitoriasHeroi >= 11 && saldoVitoriasHeroi <= 20){
    nivel = "Bronze";
}
else if(saldoVitoriasHeroi >= 21 && saldoVitoriasHeroi <= 50){
    nivel = "Prata";
}
else if(saldoVitoriasHeroi >= 51 && saldoVitoriasHeroi <= 80){
    nivel = "Ouro";
}
else if(saldoVitoriasHeroi >= 81 && saldoVitoriasHeroi <= 90){
    nivel = "Diamante";
}
else if(saldoVitoriasHeroi >= 91 && saldoVitoriasHeroi <= 100){
    nivel = "Lendário";
}
else if(saldoVitoriasHeroi >= 101){
    nivel = "Imortal";
}

console.log(`O Herói tem o saldo de ${saldoVitoriasHeroi} vitórias e está no nível de ${nivel}`);

//Se vitórias for menor do que 10 = Ferro
//Se vitórias for entre 11 e 20 = Bronze
//Se vitórias for entre 21 e 50 = Prata
//Se vitórias for entre 51 e 80 = Ouro
//Se vitórias for entre 81 e 90 = Diamante
//Se vitórias for entre 91 e 100= Lendário
//Se vitórias for maior ou igual a 101 = Imortal