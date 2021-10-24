<?php
   
   $dbhost = "localhost";
   $dbuser = "root";
   $dbpass = "123456";
   $dbname = "ajax";
   
   //Conectamos la db
   $conn= mysqli_connect($dbhost, $dbuser, $dbpass,$dbname);
   
   $json = file_get_contents('php://input');
   $datos = json_decode($json);

   $nombre = $datos->nombre;
   $apellido = $datos->apellido;
   $correo = $datos->correo;
   $telefono = $datos->telefono;
   $documento = $datos->dui;

   //Para prevenoir SQL Injections
   $nombre = mysqli_real_escape_string($conn,$nombre);
   $apellido = mysqli_real_escape_string($conn,$apellido);
   $correo = mysqli_real_escape_string($conn,$correo);
   $telefono = mysqli_real_escape_string($conn,$telefono);
   $documento = mysqli_real_escape_string($conn,$documento);

   $query = "";
   $query .= "INSERT INTO usuario(nombre,apellido,correo,telefono,dui)";
   $query .= "VALUES ('$nombre','$apellido','$correo','$telefono','$documento')";


   if(mysqli_query($conn,$query)){
      echo "Usuario agregado";
   }
   else{
      echo "error: ". mysqli_error($conn);
   }
   
?>