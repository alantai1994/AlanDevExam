<?php
/**
 * Created by PhpStorm.
 * User: Alan Tai Siu Lun
 * Date: 13/03/2017
 * Time: 11:06 PM
 */

//get all data from page
$productName = $_GET['product'];
$session = $_GET['session'];
$specifications = $_GET['specifications'];

//get Specifications from table
$displaySpec = '';
$specifications = explode("||",$specifications);
for($i=0; $i<count($specifications); $i++){
    $i%2 == 0 ? $displaySpec .= " ".$specifications[$i].": " : $displaySpec .= $specifications[$i]."\n";
}

//check whether have session
if(@$session != ''){
    echo "Order Processed:\n".strtoupper($productName)."\n".strtoupper($displaySpec);
    echo date("d/m/Y H:i");
}else{
    echo "no session!";
}
