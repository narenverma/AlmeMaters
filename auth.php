<?php
header('Access-Control-Allow-Origin: *');
header("Content-Type: application/json; charset=utf-8");
header("Access-Control-Allow-Methods: GET,POST,PUT,DELETE,OPTIONS");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: *");
header('Access-Control-Allow-Credentials: *');

//###### check Authorization Api data ######//
function checkAuthorization()
{
    $user = 'admin';
    $password = 'admin';

    if(isset($_SERVER['PHP_AUTH_USER']) && $_SERVER['PHP_AUTH_USER']==$user && isset($_SERVER['PHP_AUTH_PW']) && $_SERVER['PHP_AUTH_PW']==$password) 
    {
        $response = 200; 
    } 
    else 
    {
        $response = array(
            'Status Code' => '401',
            'msg' => 'Authorization error'
        );
    }
    return $response;
}

//###### method Not allowed data ######//
function methodNotallowed()
{
	header("HTTP/1.0 405 Method Not Allowed");
		$response = array(
			'Status Code' => '405',
			'msg' => ' Method Not Allowed'
		);
	echo json_encode(array('data' => $response));
}
?>