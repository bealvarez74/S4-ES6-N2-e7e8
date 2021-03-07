
// versio 1 funciona
let num1 = prompt("Introdueix el primer número");
let num2 = prompt("Introdueix el segon número");
let i

function Multiplicar(){
    for(i=0;i<=num2;i++)
    {
      resultat=i*num1;
      document.write(`${num1} x ${i} = ${resultat}<br>`);
    }
  }
  Multiplicar();
