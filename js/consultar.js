window.onload = function()
{
 $("#consultarTipo").click(consultarTipo);
 $("#consultarMarca").click(consultarMarca);
 $("#consultarMemoria").click(consultarMemoria);
 $("#consultarDisco").click(consultarDisco);
}

function consultarTipo()
{
  var tipo = $("#tipo").val();
  
  $.ajax({
  async:true,
  type: "POST",
  dataType: "html", contentType: "application/x-www-form-urlencoded",
  url:"https://isaiasbustamante.000webhostapp.com/eps/consultar.php",
  data:"tipo="+tipo, beforeSend:inicioEnvio, success:llegadaDatos,
  timeout:4000,
  error:problemas });
  return false;
}

function consultarMarca()
{
  var marca = $("#marca").val();
  
  $.ajax({
  async:true,
  type: "POST",
  dataType: "html", contentType: "application/x-www-form-urlencoded",
  url:"https://isaiasbustamante.000webhostapp.com/eps/consultarMarca.php",
  data:"marca="+marca, beforeSend:inicioEnvio, success:llegadaDatos,
  timeout:4000,
  error:problemas });
  return false;
}

function consultarMemoria()
{
  var memoria = $("#memoria").val();
  
  $.ajax({
  async:true,
  type: "POST",
  dataType: "html", contentType: "application/x-www-form-urlencoded",
  url:"https://isaiasbustamante.000webhostapp.com/eps/consultarMemoria.php",
  data:"memoria="+memoria, beforeSend:inicioEnvio, success:llegadaDatos,
  timeout:4000,
  error:problemas });
  return false;
}

function consultarDisco()
{
  var capacidad = $("#capacidad").val();
  
  $.ajax({
  async:true,
  type: "POST",
  dataType: "html", contentType: "application/x-www-form-urlencoded",
  url:"https://isaiasbustamante.000webhostapp.com/eps/consultarDisco.php",
  data:"capacidad="+capacidad, beforeSend:inicioEnvio, success:llegadaDatos,
  timeout:4000,
  error:problemas });
  return false;
}

 function inicioEnvio(datos)
{
 
}

function llegadaDatos(datos)
{

 $("#consulta").html(datos);
}

function problemas()
{
 alert("Error");
}