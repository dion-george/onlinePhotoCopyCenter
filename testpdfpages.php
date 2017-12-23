<?php

function getPDFPages($document)
{
    // $cmd = "/path/to/pdfinfo";           // Linux
    // $cmd = "C:\\path\\to\\pdfinfo.exe";  // Windows
    $cmd = "cd tools && pdfinfo";  // Windows

    // Parse entire output
    // Surround with double quotes if file name has spaces
    $path = "../uploads/".$document;

    exec("$cmd ".$path, $output);
    $pagecount = 0;
    // Iterate through lines
    foreach($output as $op)
    {
        // Extract the number
        if(preg_match("/Pages:\s*(\d+)/i", $op, $matches) === 1)
        {
            $pagecount = intval($matches[1]);
            break;
        }
    }

    echo $pagecount;
}

function getPDFPages_py($document)
    {
        $cmd = "cd tools && python pdf.py ";  // Windows
        $path = "../uploads/".$document;
        exec($cmd.$path,$pagecount);
        // echo $cmd.$path;
        print_r($pagecount);
    }

$pages = getPDFPages_py("60727-t.e-&-b.e-syllabus.pdf");

?>