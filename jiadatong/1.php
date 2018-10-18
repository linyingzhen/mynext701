<?php

$data = $_POST;
$url = 'http://erpapi.mcc1998.com/appsub.php';
//
$post = curl($url,$data);



/*POST数据到接口*/
	function curl($url,$data){
		$ch = curl_init();
		curl_setopt($ch,CURLOPT_URL,$url);
		curl_setopt($ch,CURLOPT_POST,1);
		curl_setopt($ch,CURLOPT_HEADER,0);
		curl_setopt($ch,CURLOPT_RETURNTRANSFER,1);
		curl_setopt($ch,CURLOPT_POSTFIELDS,$data);
		$return = curl_exec($ch);
		curl_close($ch);
		print_r($return);
    }
?>