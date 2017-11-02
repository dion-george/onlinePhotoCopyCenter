<?php
include_once 'dbconfig.php';
if(isset($_POST['btn-upload']))
{
  session_start();

  $_SESSION["ncopies"] = $_POST['ncopies'];
  $_SESSION["type"] = $_POST['print_type'];

 $file = rand(1000,100000)."-".$_FILES['file']['name'];
 $file_loc = $_FILES['file']['tmp_name'];
 $file_size = $_FILES['file']['size'];
 $file_type = $_FILES['file']['type'];
 $folder="uploads/";

 // new file size in KB
 $new_size = $file_size/1024;
 // new file size in KB

 // make file name in lower case
 $new_file_name = strtolower($file);
 // make file name in lower case

 $final_file=str_replace(' ','-',$new_file_name);

 $_SESSION['filename'] = $final_file;
 if(move_uploaded_file($file_loc,$folder.$final_file))
 {

  $sql=mysqli_query($con,"INSERT INTO files(file,type,size) VALUES('$final_file','$file_type','$new_size')")or die(mysqli_error($con));


  ?>
  <script>
          alert('File successfully uploaded');
        // window.location.href='admin.php';
        window.location.href='orderPage.php';
  </script>
  <?php
 }
 else
 {
  ?>
  <script>
      alert('error while uploading file');
        window.location.href='filePage.php?fail';
  </script>
  <?php
 }
}
?>
