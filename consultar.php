<?php

	header("Access-Control-Allow-Origin: *");
	include("conexion.php");

	$tipo = $_POST["tipo"];			

		$sql = "SELECT * FROM equipo WHERE tipo = '" . $tipo . "'";
		$query = mysqli_query($conexion, $sql);
	
	$cantidadRegistros = mysqli_num_rows($query);
	
	if($cantidadRegistros > 0)
	{
		$tabla = "<table class='table table-striped'>";
		$tabla = $tabla . "<tr><th>ID</th><th>TIPO</th><th>MARCA</th><th>MEMORIA</th><th>CAPACIDAD</th></tr>";
		while($row = mysqli_fetch_array($query))
		{
			$tabla = $tabla . "<tr><td>" . $row["id"] . "</td>";
			$tabla = $tabla . "<td>". $row["tipo"] ."</td>";
			$tabla = $tabla . "<td>" . $row["marca"] . "</td>";
			$tabla = $tabla . "<td>" . $row["memoria"] . "</td>";
			$tabla = $tabla . "<td>" . $row["capacidad"] . "</td></tr>";			
		}		

		$tabla = $tabla . "</table>";
		echo $tabla;
	}
	else
	{
		echo "No hay registros";	
	}
	

	mysqli_close($conexion);
?>