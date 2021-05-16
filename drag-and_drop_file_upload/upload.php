<?php

if ( isset( $_FILES["file"]["name"] ) ) {
    $new_name = fileUpload( "file", "upload" );
    if ( $new_name ) {
        echo "Your File {$new_name} is successful uploaded";
    } else {
        echo "file is not successful upload";

    }

} else {
    echo "file Not select";
}

function fileUpload( $photo, $target ) {
    $error = [];
    $file = $_FILES[$photo];
    $file_name = $file['name'];
    $target_dir = $target . '/';
    $new_name = time() . "-" . basename( $file_name );
    $target_file = $target_dir . $new_name;
    $tmp_name = $file['tmp_name'];
    $file_size = $file['size'];
    $img_type = strtolower( pathinfo( $file_name, PATHINFO_EXTENSION ) );
    $extension = ["jpg", "jpeg", "png"];

// check img fake or not
    $check = getimagesize( $tmp_name );
    if ( $check === false ) {
        $error[] = "Only image acceptable";
    }
// check extension
    if ( in_array( $img_type, $extension ) === false ) {
        $error[] = "This extension file not allowed, Please choose a JPG or PNG file.";
    }
// if everything is ok,try to upload file
    if ( empty( $error ) ) {
        move_uploaded_file( $tmp_name, $target_file );
        // echo "file upload succesful";
    } else {
        print_r( $error );
        die();
    }
    return $new_name;
}

?>
