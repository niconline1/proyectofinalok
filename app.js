
fetch("./Integrantes.json")
    .then(response => response.json())
    .then(data => {

for(const Integrantes of data){
    integrante.innerHTML += `
<div class="card">
<div class="card-info">
    <h3>${Integrantes.nombre}</h2>
    <p>${Integrantes.ocupacion}</p>
    <p>${Integrantes.tarea}</p>
</div>
    <img src=${Integrantes.img}
</div>`
}
})

// Codigo de escritura progresiva titulo
function escribir1(){
const texto = "TEMID"+`-`

let index = 0;
const intervalo = setInterval(() => {
  if (index < texto.length) {
    document.getElementById("temid").innerHTML += texto.charAt(index);
    index++;
  } else {
    clearInterval(intervalo);
  }
}, 500);}
escribir1();

// codigo de escritura progresiva cursos

function escribir2(){
const texto = "Stage Manager"

let index = 0;
const intervalo = setInterval(() => {
  if (index < texto.length) {
    document.getElementById("stagemanager").innerHTML += texto.charAt(index);
    index++;
  } else {
    clearInterval(intervalo);
  }
}, 200)}
escribir2();


function escribir3(){
  const texto = "Iluminación"
  
  let index = 0;
  const intervalo = setInterval(() => {
    if (index < texto.length) {
      document.getElementById("Iluminación").innerHTML += texto.charAt(index);
      index++;
    } else {
      clearInterval(intervalo);
    }
  }, 250);}
  escribir3();

  function escribir4(){
    const texto = "Sonido en Vivo"
    
    let index = 0;
    const intervalo = setInterval(() => {
      if (index < texto.length) {
        document.getElementById("Sonido en Vivo").innerHTML += texto.charAt(index);
        index++;
      } else {
        clearInterval(intervalo);
      }
    }, 200);}
    escribir4();