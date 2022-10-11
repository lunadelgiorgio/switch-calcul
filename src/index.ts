import "./styles.css";

// Tomamos el primer titulo y los guardamos en la variable "rotulo1".
let rotulo1 = document.getElementById("rotulo1");
// Tomamos el segundo titulo y los guardamos en la variable "rotulo2".
let rotulo2 = document.getElementById("rotulo2");
// Tomamos el tercer titulo y los guardamos en la variable "rotulo3".
let rotulo3 = document.getElementById("rotulo3");
// Tomamos el parrafo vacio de id "resultado" y los guardamos en la variable "resultado".
let resultado = document.getElementById("resultado");

// Tomamos el "rotulo1" y le asignamos un valor de tipo "string".
rotulo1.innerHTML = "Ingrese una operacion";
// Tomamos el "rotulo2" y le asignamos un valor de tipo "string".
rotulo2.innerHTML = "Ingrese un numero";
// Tomamos el "rotulo3" y le asignamos un valor de tipo "string".
rotulo3.innerHTML = "Ingrese otro numero";
// Estos rotulos si no van a cambiar su valor, se los puede asignar en la etiqyeta del html y omitir los 3 pasos anteriores.

// Traemos el Boton y los asignamos a la variable "btnEnv".
let btnEnv = document.getElementById("btnEnv");

//Le asignamos un Escuchador de eventos "click" al Boton.
btnEnv.addEventListener("click", () => {
  //Capturamos los valores de los datos
  let operacion: string = document.getElementById("operacion").value;
  let dato1: number = Number(document.getElementById("dato1").value);
  let dato2: number = Number(document.getElementById("dato2").value);

  // Iniciamos los condicionales switch:
  switch (
    operacion // Evalua la variable operacion (Las opciones dentro del primero input).
  ) {
    case "suma": // Si el caso es "suma".
      let resultadoCalculo = dato1 + dato2; // Se declara la variable resultadoCalculo y se le asigna valor: las suma de los valores.
      resultado.innerHTML = "El resultado es " + resultadoCalculo; // Se imprime en la pantalla, mas precisamente en la etiqueta "p" que se encontraba vacia, el resultado obtenido.
      console.log(resultadoCalculo); // Se imprime en consola el resultadoCalculado.
      break; // Detiene la evaluacion de condicionales.

    case "resta": // Si el caso es "resta".
      resultadoCalculo = dato1 - dato2; // Se declara la variable resultadoCalculo y se le asigna valor: las resta de los valores.
      resultado.innerHTML = "El resultado es " + resultadoCalculo; // Se imprime en la pantalla, mas precisamente en la etiqueta "p" que se encontraba vacia, el resultado obtenido.
      console.log(resultadoCalculo); // Se imprime en consola el resultadoCalculado.
      break; // Detiene la evaluacion de condicionales.

    case "multiplicacion": // Si el caso es "multiplicacion".
      resultadoCalculo = dato1 * dato2; // Se declara la variable resultadoCalculo y se le asigna valor: las multiplicacion de los valores.
      resultado.innerHTML = "El resultado es " + resultadoCalculo; // Se imprime en la pantalla, mas precisamente en la etiqueta "p" que se encontraba vacia, el resultado obtenido.
      console.log(resultadoCalculo); // Se imprime en consola el resultadoCalculado.
      break; // Detiene la evaluacion de condicionales.

    case "division": // Si el caso es "division".
      resultadoCalculo = dato1 / dato2; // Se declara la variable resultadoCalculo y se le asigna valor: las division de los valores.
      resultado.innerHTML = "El resultado es " + resultadoCalculo; // Se imprime en la pantalla, mas precisamente en la etiqueta "p" que se encontraba vacia, el resultado obtenido.
      console.log(resultadoCalculo); // Se imprime en consola el resultadoCalculado.
      break; // Detiene la evaluacion de condicionales.

    default:
      // Si el caso no es ninguna de los anteriores, (funciona como un else).
      console.log("Ingrese datos para operar"); //Imprime en Consola el mensaje.
      break; // Detiene la evaluacion de condicionales.
  }
});
