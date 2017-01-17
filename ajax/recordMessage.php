<?php

session_start();

if($_POST){
    $message = $_POST['message'];
    $pseudo = $_SESSION['pseudo'];
    $mysqlRequete = "INSERT INTO message (message, pseudo) VALUES ('$message', '$pseudo')";
    //echo $mysqlRequete;
    $bdd = new PDO("mysql:host=localhost;dbname=chat;charset=utf8", "root", "");
    $reponse = $bdd->query($mysqlRequete);
    unset($bdd);
    
    include_once 'findMessage.php';
}

?>