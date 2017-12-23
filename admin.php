<?php
include_once 'dbconfig.php';
if (isset($_POST['submit'])) {
    $eId=$_POST['email'];
    $Cbalance=$_POST['balance'];
    $result=mysqli_query($con,"UPDATE signup SET balance='$Cbalance' WHERE email='$eId'")or die (mysqli_error());
     if(!$result){
      echo "not working";
     }else{
      header('location:admin.php');
     }    
    
    }
?>




<!DOCTYPE html>
<html >
<head>
<title>Admin</title>
<link rel="stylesheet" href="css/style.css" type="text/css" />
<link rel="stylesheet" href="css/bootstrap.min.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
<script type="text/javascript" src="js/print.min.js"></script>

<script type="text/javascript" src="js/index.js"></script>
</head>
<body class="colorBG">


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
                <li class="temp"> Welcome admin</li>


            </ul>
        </div>
    </div>
</div>


<div class="container colorBG" style="padding-top: 40px">
  <div class="col-md-12 AddedPadding" >
    <div class="well well-lg" style="background-color: rgb(255,255,255)">




  <h2>Details:</h2>
  <form action="admin.php" method="post">

  <div class="col-md-6 AddedPadding" >
    <div class="well well-lg" style="background-color: rgb(255,255,255)">

    <div class="form-group">

    <h4>Enter email id:</h4>
      <input type="email" class="form-control" id="email" placeholder="email" name="email" style="width:400px" required>
    </div>
    </div>
    </div>


<div class="col-md-6 AddedPadding" >
    <div class="well well-lg" style="background-color: rgb(255,255,255)">


    <div class="form-group">
    <h4>Enter amount:</h4>
      <input type="text" onkeypress='return event.charCode >= 48 && event.charCode <= 57' maxlength = 3 style="margin:10px; width:60px" value =1 name="balance" required>
    </div>
    </div>
    </div>
    <button class="temp" type="submit" name = "submit">Submit</button>
  </form>

    </div>
  </div>
</div>

<div class="container colorBG" style="padding-top: 40px">
    <div class="col-md-12 AddedPadding" >
        <div class="well well-lg" style="background-color: rgb(255,255,255)">
        <h3>Files to be Printed:-</h3><br>
            <div class="container-fluid">
                <div class="col-md-10" >
                    <ul class="list-group">
                    <?php
                        $conn = new mysqli("localhost","root","","photocopy");
                        $pdf_name_query = "SELECT file from files";
                        $q_res = $conn->query($pdf_name_query);
                        while($row = $q_res->fetch_assoc()) {
                            $file_name = $row["file"];
                            $pdf_path = "('uploads/".$file_name."')";
                            echo '<li class="list-group-item" style="padding-bottom: 20px"> <i class="fa fa-file-pdf-o" aria-hidden="true"></i> '.$file_name.'<button type="button" class="btn btn-primary pull-right" onclick="printJS'.$pdf_path.'"><i class="fa fa-print" aria-hidden="true"></i> Print</button></li>';
                        }
                        
                    ?>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
</body>
</html>