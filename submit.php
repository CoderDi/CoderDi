<?php

if( isset( $_POST['my_file_upload'] ) ){  
	// ВАЖНО! тут должны быть все проверки безопасности передавемых файлов и вывести ошибки если нужно

	$max_size = 20 * 1024 * 1024;
	$valid_types 	=  array('jpg', 'doc', 'rar', 'docx', 'pdf', 'jpeg', 'png', 'bmp', 'tiff', 'tif', 'webp', 'gif', 'mp4', 'avi', '3gp', 'flv', 'mkv', 'mov', 'wmv', 'webm');

	$uploaddir = './uploads'; // . - текущая папка где находится submit.php

	// cоздадим папку если её нет
	if( ! is_dir( $uploaddir ) ) mkdir( $uploaddir, 0777 );

	$files      = $_FILES; // полученные файлы
	$done_files = array();

	// переместим файлы из временной директории в указанную
	foreach( $files as $file ){
		$file_name = $file['name'];
		$ext = substr($file_name, 1 + strrpos($file_name, "."));

		if ($file['size'] > $max_size) {
			// die(json_encode('Error: File size > 20Mb.'));
		} elseif (!in_array($ext, $valid_types)) {
			// die(json_encode('Error: Invalid file type.'));
		} elseif( move_uploaded_file( $file['tmp_name'], "$uploaddir/$file_name" ) ) {
      $done_files[] = 'http://' . $_SERVER['HTTP_HOST'] . '/uploads/' . $file_name;
		}	
	}

	$data = $done_files ? array('files' => $done_files ) : array('error' => 'Ошибка загрузки файлов.');

	die( json_encode( $data ) );
}