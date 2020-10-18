<?php

$x_arr = [-2, -1.5, -1, -0.5, 0, 0.5, 1, 1.5, 2];
$r_arr = [1, 1.5, 2, 2.5, 3];


@session_start();

if($_SERVER['REQUEST_METHOD'] != 'POST'){
    http_response_code(400);
    exit;
}

$start = microtime(true);
if(!isset($_SESSION['arr'])) $_SESSION['arr'] = array();
date_default_timezone_set('Europe/Moscow');

if (!is_numeric(str_replace(",",".", $_POST["X"])) ||
    !is_numeric(str_replace(",",".", $_POST["Y"])) ||
    !is_numeric(str_replace(",",".", $_POST["R"])) ||
    (strlen($_POST["R"])>9) &&
     strlen($_POST["Y"])>9) &&
     strlen($_POST["X"])>9))
{
    http_response_code(400);
    exit;
}

$y = (double) str_replace(",",".", $_POST["Y"]);
$r = (double) str_replace(",",".", $_POST["R"]);
$x = (double) str_replace(",",".", $_POST["X"]);
$check="";
$currentTime = date("H:i:s");


if(!in_array($x, $x_arr) || $y <= -3 || $y >= 5 || !in_array($r, $r_arr)){
    http_response_code(400);
    exit;
}

echo "<table id='resultTable'>
            <tr>
                <td>X</td>
                <td>Y</td>
                <td>R</td>
                <td>Результат</td>
                <td>t сейчас</td>
                <td>t выполнения</td>
            </tr>";

if(
    ($x >= 0 && $y >= 0 && $x <= ($r/2) && $y <=$r ) ||
    ($x <=0 && $y <=0 && ($x * $x + $y * $y) <= ($r / 2) * ($r / 2)) ||
    ($x >=0 && $y <= 0 && $y >= ($x - $r/2)*2)
) $check = "TRUE";
else
    $check = "FALSE";
$time = microtime(true) - $start;

array_push ($_SESSION['arr'], "<tr> <td>$x</td> <td>$y</td> <td>$r</td>
                    <td><b>$check</b></td> <td>$currentTime</td> <td>$time</td> </tr>");

foreach ($_SESSION['arr'] as $item) echo $item;

echo "</table>";