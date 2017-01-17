<?php

if($_GET){
    $start = $_GET['start'];
    $end = $_GET['end'];
}
    
$mysqlRequete = "SELECT * FROM message ORDER BY date ASC";
    
$bdd = new PDO("mysql:host=localhost;dbname=chat;charset=utf8", "root", "");
$reponse = $bdd->query($mysqlRequete);
unset($bdd);
    
echo json_encode($reponse->fetchAll());

?>