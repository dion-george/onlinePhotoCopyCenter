<?php
include_once 'dbconfig.php';


function getPDFPages($document)
{

    $cmd = "C:\\Users\\dion\\Desktop\\pdfinfo.exe";  // Windows

    // Parse entire output
    // Surround with double quotes if file name has spaces
    exec("$cmd \"$document\"", $output);

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
// Use the function
echo getPDFPages("C:\\xampp\\htdocs\\onlinePhotoCopyCenter\\94916-temp.pdf");
?>