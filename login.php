<?php
include('dbconfig.php'); ?>



	<?php 
		if (isset($_POST['submit'])) {
		$eId=$_POST['email'];
		$password=$_POST['psw'];
		echo"Hello";
		$result=mysqli_query($con,"SELECT * FROM signup WHERE email='$eId' AND psw='$password'")or die (mysqli_error());
		 if(!$result){
		 	header('location:index.html');
		 }else{
		 	$data=mysqli_fetch_assoc($result);				
				session_start();
				$_SESSION['user_fname']=$data['firstName'];
				$_SESSION['balance']=$data['balance'];
				header('location:filePage.php');
		 }		
		
		}
	?>

