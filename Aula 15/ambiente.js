let numero = [5, 8, 4, 3];
numero[4] = 7; // para acrescentar um número na variavel
console.log(`O nosso vetor é ${numero}`);
console.log(`Nosso vetor tem ${numero.length} posições`);
console.log(`O primeiro valor é ${numero[0]}`);
let procurar = numero.indexOf(3);
if (procurar == -1) {
  console.log("O valor não foi encontrado");
} else {
  console.log(`O valor 3 está localizado no vetor ${procurar}`);
}

// numero.push(8); para não ter que ficar preocupado com a ultima posição.
//numero.length; para saber quantos elementos tem, comprimento
//numero.sort(); // colocar os elementos em ordem crescente
// num.indexOf(4) para procurar no vetor onde esta o valor ()
