let valores = [5, 8, 4, 6, 9, 8];

/*console.log(valores); // jeito burro, cru
for (let v = 0; v < valores.length; v++) {
  // enquanto v for menor que o tamanho do vetor, o v vai receber v+1
  console.log(`A posição ${v} tem o valor ${valores[v]}`);
}
*/

for (let v in valores) {
  console.log(`A posição ${v} tem o valor ${valores[v]}`);
} //jeito simplificado
