window.onload = function()
{
 $("#registrar").click(enviar);
 $("#buscar").click(buscar);
}

function buscar()
{
	var id = $("#id").val();

	$.ajax({
	  async:true,
	  type: "POST",
	  dataType: "html", contentType: "application/x-www-form-urlencoded",
	  url:"https://isaiasbustamante.000webhostapp.com/eps/actualizar.php",
	  data:"tipo=Consultar&id="+id, beforeSend:inicioEnvio, success:llegadaDatosEquipo,
	  timeout:4000,
	  error:problemas });
}

function enviar()
{
  var id = $("#id").val();
  var tipo = $("#tipo").val();
  var marca = $("#marca").val();
  var memoria = $("#memoria").val();
  var capacidad = $("#capacidad").val();
  
  $.ajax({
  async:true,
  type: "POST",
  dataType: "html", contentType: "application/x-www-form-urlencoded",
  url:"actualizar.php",
  data:"tipo=Actualizar&id="+id+"&tipoEq="+tipo+"&marca="+marca+"&memoria="+memoria+"&capacidad="+capacidad, beforeSend:inicioEnvio, success:llegadaDatos,
  timeout:4000,
  error:problemas });
  return false;
}

 function inicioEnvio(datos)
{
 
}

function llegadaDatos(datos)
{
 alert(datos);
}

function llegadaDatosEquipo(datos)
{

	
	var datosEquipo = datos.split('#');

	var id = datosEquipo[0];
	var tipo = datosEquipo[1];
	var marca = datosEquipo[2];
	var memoria = datosEquipo[3];
	var capacidad = datosEquipo[4];


	$("#tipo").val(tipo);
	$("#marca").val(marca);
	$("#memoria").val(memoria);
	$("#capacidad").val(capacidad);
}

function problemas()
{
 alert("Error");
}