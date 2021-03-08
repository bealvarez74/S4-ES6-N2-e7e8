
//Exercici 8
 
 // variables
 var num1 = document.getElementById('num1');
 var num2 = document.getElementById('num2');

 generaTaula=" ";
 
const form = document.getElementById('myFormId');

function validate_mult() {
	var acumErrores = 0;
	
	form.classList.remove('is-invalid');

  if(num1.value == "") {
		num1.classList.add("is-invalid");
		document.getElementById("errornum1").textContent = "el camp esta buit";
		acumErrores ++;}
  
    else if(!validar_numero(num1.value)){
      num1.classList.add("is-invalid");
      document.getElementById("errornum1").textContent = "ha de ser un numero";
      acumErrores ++;
    }
	
  if(num1.value == "") {
		num2.classList.add("is-invalid");
		document.getElementById("errornum2").textContent = "el camp esta buit";
		acumErrores ++;
	}
  else if(!validar_numero(num2.value)){
    num2.classList.add("is-invalid");
    document.getElementById("errornum2").textContent = "Ha de ser un numero";
    acumErrores ++;
  }
  if (acumErrores > 0){
    return false;
  }else{
    MultiplicarDos();
}

}
form.addEventListener('blur', (event) => {
	if(event.target.value!='') event.target.classList.remove('is-invalid');
}, true);


function validar_numero(numero) {
	var regex = /^[0-9]$/;
	return regex.test(numero) ? true : false;
}

function MultiplicarDos(){
  // generar taula
  let generaTaula = "<TR><TH>Multiplicació</TH><TH>Resultat</TH></TR>";
  for(i=0;i<=num2.value;i++){
    resultat=i*num1.value;
    generaTaula+=`<tr><td>${num1.value} x ${i} </td><td> ${resultat} </td></tr>`;
    //munta la taula a pantalla
    document.getElementById('tabla').innerHTML = generaTaula;
  }
}

