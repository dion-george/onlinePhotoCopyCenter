<?php
include_once 'dbconfig.php';
session_start();
$usern = $_SESSION['user_fname'];
if (isset($_POST['submit'])) {
    echo "<script>alert('here');</script>";
    $fbalance = $_SESSION["cbalance"];
    $result=mysqli_query($con,"UPDATE signup SET balance='$fbalance' WHERE firstName='$usern'")or die (mysqli_error());
    $_SESSION["balance"] = $fbalance;
    header('location:filePage.php');
     
     }    
    
  ?>
