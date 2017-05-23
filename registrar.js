window.onload = function()
{
 $("#registrar").click(enviar);
}

function enviar()
{
  var tipo = $("#tipo").val();
  var marca = $("#marca").val();
  var memoria = $("#memoria").val();
  var capacidad = $("#capacidad").val();
  
  $.ajax({
  async:true,
  type: "POST",
  dataType: "html", contentType: "application/x-www-form-urlencoded",
  url:"https://isaiasbustamante.000webhostapp.com/eps/registrar.php",
  data:"tipo="+tipo+"&marca="+marca+"&memoria="+memoria+"&capacidad="+capacidad, beforeSend:inicioEnvio, success:llegadaDatos,
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

function problemas()
{
 alert("Error");
}