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
$table = $_GET['table'];

//get Specifications from table
$specifications = '';
preg_match_all('#<tr>\s+?<td>(.*?)</td>\s+?<td>(.*?)</td>\s+?</tr>#', $table, $matches);
for($i=0;$i<count($matches[1]);$i++){
    $specifications .= " ".$matches[1][$i].": ".$matches[2][$i]."\n";
}

//check whether have session
if(@$session != ''){
    echo "Order Processed:\n".strtoupper($productName)."\n".strtoupper($specifications);
    echo date("d/m/Y H:i");
}else{
    echo "no session!";
}
