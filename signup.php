<?php
include('dbconfig.php'); ?>



	<?php 
		if (isset($_POST['submit']))
		 {
		$fname=$_POST['firstName'];
		$lname=$_POST['lastName'];
		$eId=$_POST['email'];
		$password=$_POST['psw'];
		$cPassword=$_POST['psw_repeat'];
		echo "hello";
		$result=mysqli_query($con,"INSERT INTO signup (firstName,lastName,email,psw,psw_repeat) VALUES ('$fname', '$lname','$eId','$password','$cPassword')")or die (mysqli_error());
		
		 if($result){
		 	echo "Successfully Registered! You can now "?> <a href="start.html">Log In</a>
		<?php }		
		
		}
	?>