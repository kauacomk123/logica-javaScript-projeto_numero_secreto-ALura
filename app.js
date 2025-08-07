alert("Boas vindas ao jogo do número secreto");
let numeroMaximo = 1000;
let numeroSecreto =  parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;
console.log("valor do chute:", chute);

// enquanto o chute nao for igual ao numero secreto faça
while (chute != numeroSecreto) {
  chute = prompt(`Escolhar um número entre 1 e ${numeroMaximo}`);
  //se chute for igual ao número secreto
  console.log("Resultado da comparação:", chute == numeroSecreto);

  if (chute == numeroSecreto) {
    break;
  } else {
    if (chute > numeroSecreto) {
      alert(`O numero sécreto é menor que ${chute}`);
    } else {
      alert(`O numero sécreto é maior que ${chute}`);
    }
   // tentativas = tentativas + 1;
    tentativas++;
  }
}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa' ;
 alert(`isso ai! você descobriu o número secreto:  ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

// if (tentativas > 1) { 
// alert(`isso ai! você descobriu o número secreto:  ${numeroSecreto} com ${tentativas} tentativas`);
// } else{
//   alert(`isso ai! você descobriu o número secreto:  ${numeroSecreto} de primeira PARABÉNS`);
// }
<<<<<<< HEAD


=======
>>>>>>> 4b1a8bf2c12678770dcf74e23c6f84ebe3697331
