<?php
header('Content-Type: application/json');
require 'ServiceInfo.php';

function ping($ip, $port)
{
    $fp = @fsockopen($ip, $port, $errCode, $errStr, 1);
        return $fp ? true : false;
}

$domainAddress = 'ranstar74.bizml.ru';
$hosts = array(
    'ASP.Net' => ['128.75.146.65' => 25565],
    'MSSQL' => ['128.75.146.65' => 1433],
    'ESP' => ['128.75.146.65' => 8266],
    'File Server' => ['128.75.146.65' => 80],
);

$resultArray = [];
foreach ($hosts as $service => $ipPort) {
    foreach ($ipPort as $ip => $port) {
        $resultArray[] = new ServiceInfo($service, $ip, $port, ping($ip, $port), $domainAddress);
    }
}
// var_dump($resultArray);

$resultArray = json_encode($resultArray, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
echo $resultArray;
