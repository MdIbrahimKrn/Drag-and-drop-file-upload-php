<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>File Upload</title>
        <link rel="stylesheet" href="style.css" />
    </head>

    <body>
        <form id="submit_form">
            <input type="file" name="file" id="file_upload" hidden />
            <div id="drag-area">
                <p id="promp">Drag & Drop Upload File</p>
                <span>OR</span>
                <button id="browse_btn">Browse File</button>
            </div>
            <input type="submit" id="submit" name="submit" value="Save Photo" />
        </form>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="main.js"></script>
    </body>

</html>
