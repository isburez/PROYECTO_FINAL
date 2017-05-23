<?php

	header("Access-Control-Allow-Origin: *");
	include("conexion.php");

	$tipo = $_POST["tipo"];

	if($tipo == 'Consultar')
	{
		$id = $_POST["id"];

		$sql = "SELECT * FROM equipo WHERE id = '" . $id . "'";

		$query = mysqli_query($conexion, $sql);

		$cantidadRegistros = mysqli_num_rows($query);

		if($cantidadRegistros > 0)
		{
			$datos = "";
			while($row = mysqli_fetch_array($query))
			{
				$datos = $row["id"] . "#" . $row["tipo"] . "#" . $row["marca"] . "#" . $row["memoria"] . "#" .  $row["capacidad"];
			}
			echo $datos;
		}
		else
		{
			echo "Datos No Validos";
		}

		mysqli_close($conexion);
	}
	else
	{
		$id = $_POST["id"];
		$tipo = $_POST["tipoEq"];
		$marca = $_POST["marca"];
		$memoria = $_POST["memoria"];
		$capacidad = $_POST["capacidad"];

		$sql = "UPDATE equipo SET tipo = '" . $tipo . "', marca = '" . $marca . "', memoria = '" . $memoria . "', capacidad = '" . $capacidad . "' WHERE id = '" . $id . "'";

		$query = mysqli_query($conexion, $sql);

		if($query)
		{
			echo "Equipo modificado con exito!";
		}
		else
		{
			echo "Error al modificar el equipo.";
		}

		mysqli_close($conexion);
	}
?>