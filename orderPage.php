<?php
    session_start();

    function getPDFPages($document)
    {
        // $cmd = "/path/to/pdfinfo";           // Linux
        // $cmd = "C:\\path\\to\\pdfinfo.exe";  // Windows
        $cmd = "cd tools && pdfinfo ";  // Windows

        // Parse entire output
        // Surround with double quotes if file name has spaces
        $path = '"../uploads/'.$document.'"';

        exec($cmd.$path, $output);

        // Iterate through lines
        $pagecount = 0;
        foreach($output as $op)
        {
            // Extract the number
            if(preg_match("/Pages:\s*(\d+)/i", $op, $matches) === 1)
            {
                $pagecount = intval($matches[1]);
                break;
            }
        }

        return $pagecount;
    }

    function getPDFPages_py($document)
    {
        $cmd = "cd tools && python pdf.py ";  // Windows
        $path = '"../uploads/'.$document.'"';
        exec($cmd.$path, $pagecount);
        return $pagecount[0];
    }

    $ncopies = $_SESSION["ncopies"];
    $type = $_SESSION["type"];
    // Use the function
    $pages = getPDFPages_py($_SESSION['filename']);  // Output: 2
    $totalpgs = $ncopies*$pages;
    if($type == "color")
        $price = $pages*$ncopies*10;
    else
        $price = $pages*$ncopies;

    $_SESSION["cbalance"] = $_SESSION["balance"] - $price;
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
 <form action="checkout.php" method="post">

<div class="col-md-6 AddedPadding" >
<div class="well well-lg" style="background-color: rgb(255,255,255)">


<h4  style="margin-left:10px">No. of Pages in pdf</h4>
<input id="pgs" style="margin:10px; width:100px; height:30px" readonly>
</input>

<h4 style="margin-left:10px">Total Pages to be printed</h4>
<input id="tpgs" style="margin:10px; width:100px; height:30px" readonly>
</input>
</div>
</div>




<div class="col-md-6 AddedPadding" >
<div class="well well-lg" style="background-color: rgb(255,255,255)">


Type Selected:<h4 id="type" style="margin-left:10px"></h4>

</div>
</div>




<button class="button button-block" type="submit" name="submit" style="margin:10px">ORDER</button>


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
<br>
<h2>Total Cost:</h2><h3 id="cost"></h3>
<br>
<h2>Balance after ordering:</h2><h3 id="bal"></h3>

<script>
    var pgs = Number(<?php echo $pages; ?>);
    var tpgs = Number(<?php echo $totalpgs; ?>);
    var price = Number(<?php echo $price; ?>);
    var ebalance = Number(<?php echo $_SESSION["balance"]; ?>);
    var cbalance = Number(ebalance - price);
    var type = "<?php echo $type; ?>";
    document.getElementById("pgs").value=pgs;
    document.getElementById("tpgs").value=tpgs;
    document.getElementById("cost").innerHTML=price;
    document.getElementById("bal").innerHTML=cbalance;
    document.getElementById("type").innerHTML=type;


</script>


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
