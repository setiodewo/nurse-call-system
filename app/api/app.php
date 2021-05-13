<?php
// Author : Emanuel Setio Dewo
// Started 13/05/2021

$x = (isset($_REQUEST['x']))? filter_var($_REQUEST['x'], FILTER_SANITIZE_STRING) : 'intro';
$x();

// *** FUNCTIONS ***
function intro() {
    echo "NCS API";
}

function generate_device_id() {
    echo date("YmdHis");
}