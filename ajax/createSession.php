<?php

    if($_POST){
        session_start();
        $_SESSION['pseudo'] = $_POST['pseudo'];
        $oReponse = (object)['reponse' => true];
    }else{
        $oReponse = (object)['reponse' => false];
    }
    
    echo json_encode($oReponse);
    
?>