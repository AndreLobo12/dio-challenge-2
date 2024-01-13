// Função para calcular o nível do jogador
function calcularNivel(vitorias, derrotas) {
    // Cálculo do saldo de vitórias
    let saldoVitorias = vitorias - derrotas;

    // Estrutura de decisão para determinar o nível do jogador
    let nivel;
    if (saldoVitorias < 10) {
        nivel = "Ferro";
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        nivel = "Bronze";
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        nivel = "Prata";
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        nivel = "Ouro";
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        nivel = "Diamante";
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        nivel = "Lendário";
    } else if (saldoVitorias >= 101) {
        nivel = "Imortal";
    }

    // Retorno do resultado
    return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
}

// Teste da função
let resultado = calcularNivel(120, 10); // Substitua 120 e 10 pelos valores reais de vitórias e derrotas
console.log(resultado);
