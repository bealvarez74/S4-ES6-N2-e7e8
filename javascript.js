
// Exercici 7
let nums1 = prompt("Introdueix el primer número");
let nums2 = prompt("Introdueix el segon número");
let i

function Multiplicar(){
    for(i=0;i<=nums2;i++)
    {
      res=i*num1;
      document.getElementById('multiplication').innerHTML+=`${nums1} x ${i} = ${res}<br>`;
    }
  }
  Multiplicar();
