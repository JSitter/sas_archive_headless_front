<?php
$slug = $_SERVER['REQUEST_URI'];

?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <!-- Compiled and minified CSS for Materialize -->
  <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"> -->
  <!-- Compiled and minified JavaScript for Materialize -->
  <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script> -->

  <title>Saint Anthony's Seminary Archive</title>
</head>
<body style="background-color:#dddddd;padding:0px;margin:0px;">
  <?php
    require_once('preload.php');
  ?>
<script src="http://localhost:8084/app.bundle.js"></script></body>
</html>