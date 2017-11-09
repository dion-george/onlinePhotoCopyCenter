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

    $result=mysqli_query($con,"INSERT INTO signup (firstName,lastName,email,psw,psw_repeat) VALUES ('$fname', '$lname','$eId','$password','$cPassword')")or die (mysqli_error($con));
    
     if($result){
     ?>

      <script>
      alert('Signed in');
      window.location.href='start.php';
      </script>
    <?php }
    else if (!$result) {
      
      ?>
      <script>
         alert('An account already exists with this username');
      window.location.href='start.php';
      </script>
      <?php
       }   
    
    }
  ?>







<!DOCTYPE html>
<html >
<head>
  <meta charset="UTF-8">
  <title>Sign-Up/Login Form</title>
  <link href='https://fonts.googleapis.com/css?family=Titillium+Web:400,300,600' rel='stylesheet' type='text/css'>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">

      <link rel="stylesheet" type="text/css" href="css/login.css">
      <link rel="stylesheet" href="css/bootstrap.min.css">
<link rel="stylesheet" href="css/style.css" type="text/css" />

  
</head>

<body>



<div id="custom-bootstrap-menu" class="navbar navbar-default " role="navigation">
    <div class="container-fluid">
        <div class="navbar-header"><a class="navbar-brand" href="#">smartCopy</a>
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-menubuilder"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span>
            </button>
        </div>
        <div class="collapse navbar-collapse navbar-menubuilder">
            <ul class="nav navbar-nav navbar-left">
        
    </ul>


            <ul class="nav navbar-nav navbar-right">


            </ul>
        </div>
    </div>
</div>



  <div class="form" style="margin-top:0px">
      
      <ul class="tab-group">
        <li class="tab active"><a href="#signup">Sign Up</a></li>
        <li class="tab"><a href="#login">Log In</a></li>
      </ul>
      
      <div class="tab-content">
        <div id="signup">   
          
          <form action="start.php" method="post" id="frmLogin">
          
          <div class="top-row">
            <div class="field-wrap">
              <label for="#{label}">
                First Name
              </label>
              <input type="text" name="firstName" required>
            </div>
        
            <div class="field-wrap">
              <label for="#{label}">
                Last Name
              </label>
              <input type="text"  name="lastName" required>
            </div>
          </div>

          <div class="field-wrap">
            <label for="#{label}">
              Email Address
            </label>
            <input type="email"  name="email"  required>
          </div>
          
          <div class="field-wrap">
            <label for="#{label}">
              Set A Password
            </label>
            <input type="password" name="psw" required>
          </div>
          
          <div class="field-wrap">
            <label for="#{label}">
              Confirm Password
            </label>
            <input type="password" name="psw_repeat" required>
          </div>

          <button type="submit" name="submit" class="button button-block">Signup</button>
          
          </form>

        </div>
        
        <div id="login">   
           
          <form method="post" action="login.php">
          
            <div class="field-wrap">
            <label for="#{label}">
              Email Address<span class="req">*</span>
            </label>
            <input type="email" name="email" required autocomplete="off"/>
          </div>
          
          <div class="field-wrap">
            <label for="#{label}">
              Password<span class="req">*</span>
            </label>
            <input type="password" name="psw" required autocomplete="off"/>
          </div>
          

          
          <button class="button button-block" type="submit" name="submit">Log In</button>
          
          </form>

        </div>
        
      </div><!-- tab-content -->
      
</div> <!-- /form -->
  <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>

    <script  src="js/index.js"></script>

</body>
</html>
