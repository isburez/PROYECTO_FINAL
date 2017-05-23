<?php

    header("Access-Control-Allow-Origin: *");
    include("conexion.php");
    
 
 $tipo = $_POST["tipo"];
 $marca = $_POST["marca"];
 $memoria = $_POST["memoria"];
 $capacidad = $_POST["capacidad"];
 
 $sql = "INSERT INTO equipo(tipo, marca, memoria, capacidad) VALUES ('" . $tipo. "','" . $marca . "','" . $memoria . "','" . $capacidad . "')";

 $query = mysqli_query($conexion, $sql);
 
 if($query)
 {
  echo "Se ingreso el equipo";
 }
 else
 {
  echo "error al ingresar el equipo";
 }
 
 mysqli_close($conexion);
?>"
