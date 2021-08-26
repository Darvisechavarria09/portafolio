//Función calcular

function Ventas() {

//Declarar variables
  var venta = 0;
  var salario = 0;
  var valorComision = 0;
  var total = 0;

  //Cancelar eventos
  event.preventDefault();

  //llamar los elementos 

  nombre = document.getElementById("formName").value;
  sbm = document.getElementById("formSbm").value;
  fecha = document.getElementById("formDate").value;
  valorVenta = document.getElementById("formVv").value;
  zona = document.getElementById("formZone").value;

// Validaciones

//Nombre 

  if (nombre === "") {
    document.getElementById("error1").innerHTML = "Debe ingresar un nombre";
  } else {
    document.getElementById("error1").innerHTML = "";
  }

  if (sbm >= 1000000 && sbm <= 2000000) {
    document.getElementById("error2").innerHTML = "";
  } else {
    document.getElementById("error2").innerHTML =
      "El salario básico mensual debe estar entre $1.000.000 y $2.000.000";
  }

//Fecha

  if (fecha === "") {
    document.getElementById("error3").innerHTML = "Debe Ingresar una fecha";
  } else {
    document.getElementById("error3").innerHTML = "";
  }

//Valor venta

  if (valorVenta >= 15000000) {
    document.getElementById("error4").innerHTML = "";
  } else {
    document.getElementById("error4").innerHTML = "El valor de la venta debe ser mayor o igual a $15.000.000";
  }

//Zona

  if (zona === "Sur") {
    document.getElementById("error5").innerHTML = "";
  } else if (zona === "Norte") {
    document.getElementById("error5").innerHTML = "";
  } else {
    document.getElementById("error5").innerHTML = "Debe escoger una zona";
  }

//Valor Venta

  if (
    zona === "Sur" &&
    nombre !== "" &&
    fecha !== "" &&
    valorVenta >= 15000000 &&
    sbm >= 1000000 &&
    sbm <= 2000000
  ) {

    venta = parseFloat(valorVenta);
    salario = parseFloat(sbm);

    valorComision = (venta * 3) / 100;
    total = valorComision + salario;

    console.log(valorComision);
    console.log(total);

  } else if (
    zona === "Norte" &&
    nombre !== "" &&
    fecha !== "" &&
    valorVenta >= 15000000 &&
    sbm >= 1000000 &&
    sbm <= 2000000
  ) {

    venta = parseFloat(valorVenta);
    salario = parseFloat(sbm);

    valorComision = (valorVenta * 5) / 100;
    total = valorComision + salario;

    console.log(valorComision);
    console.log(total);

  }

//Para mostrar los resultados en la página

  document.getElementById("formVc").value = valorComision;
  document.getElementById("formTp").value = total;
}

//Función limpiar

function limpiar() {
  document.getElementById("formName").value = "";
  document.getElementById("formSbm").value = "";
  document.getElementById("formDate").value = "";
  document.getElementById("formVv").value = "";
  document.getElementById("formZone").value = "";
  document.getElementById("formVc").value = "";
  document.getElementById("formTp").value = "";
}
