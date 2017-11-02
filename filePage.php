<?php
    session_start();
 ?>
<!DOCTYPE html>
<html >
<head>
<title>File Uploading With PHP and MySql</title>
<link rel="stylesheet" href="css/style.css" type="text/css" />
<link rel="stylesheet" href="css/bootstrap.min.css">
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
        <li ><a class="temp2" href="#" >History</a></li>
    </ul>


            <ul class="nav navbar-nav navbar-right">


                <?php

  echo ' <li class="temp1"> Welcome '.$_SESSION['user_fname'].'</li>
     <li><form method="POST" action="logout.php"><button type="submit" name="logout" class="temp">Logout</button></form></li>
            ';
              ?>

            </ul>
        </div>
    </div>
</div>



<div class="container colorBG" style="padding-top: 40px">
<div class="col-md-8 AddedPadding" >
<div class="well well-lg" style="background-color: rgb(255,255,255)">


<div id="body">
 <form action="upload.php" method="post" enctype="multipart/form-data">
 <input type="file" name="file" accept="application/pdf" style="margin:10px" />



<div class="col-md-6 AddedPadding" >
<div class="well well-lg" style="background-color: rgb(255,255,255)">


<h4 style="margin-left:10px">No. of Copies</h4>
<input name="ncopies" type="text" onkeypress='return event.charCode >= 48 && event.charCode <= 57' maxlength = 3 style="margin:10px; width:60px" value =1>
</input>
</div>
</div>


<div class="col-md-6 AddedPadding" >
<div class="well well-lg" style="background-color: rgb(255,255,255)">
<pre><input style="width:10px;height:10px;" type="radio" name="print_type" value="black and white">BW</pre>
<pre><input style="width:10px;height:10px;" type="radio" name="print_type" value="color">color</pre>

</div>
</div>
<!-- <div class="row"> -->
    <!-- <div class="col-md-5"> -->

<!-- </div> -->

<!-- </div> -->






<button class="button button-block" type="submit" name="btn-upload" style="margin:10px">UPLOAD</button>


 </form>
    <br /><br />

</div>
</div>
</div>


<div class="col-md-4 AddedPadding">
 <div class="well well-lg" style="background-color: rgb(255,255,255)">

<h2>Current balance:</h2>
<?php

echo '<h3 id="finalp" style="color:black">'.$_SESSION["balance"].'</h3>';

?>



<script>
  // function cutBalance(){
  //   alert("here");
  //   var bal = <?php>echo $_SESSION["balance"]; ?>
  //   var pgs = document.getElementbyId("pgs").value;
  //   var res = bal-pgs;
  //   document.getElementbyId("finalp").innerHTML=res;
  // }

</script>




</div>
</body>
</html>
