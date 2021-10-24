<?php
   
   $dbhost = "localhost";
   $dbuser = "root";
   $dbpass = "123456";
   $dbname = "ajax";
   
   //Conectamos la db
   $conn= mysqli_connect($dbhost, $dbuser, $dbpass,$dbname);
   
   $query = "SELECT * FROM usuario";

   $result = mysqli_query($conn,$query);

   $persona = mysqli_fetch_all($result,MYSQLI_ASSOC);

   echo json_encode($persona);
  
?>