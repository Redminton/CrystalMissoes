<?php

use Darkterminal\LibSQL\LibSQL;
use Darkterminal\LibSQL\Types\HttpStatement;
use Darkterminal\LibSQL\Types\LibSQLResult;

require_once 'vendor/autoload.php';

$config = [
  'url' => getenv('TURSO_DATABASE_URL'),
  'authToken' => getenv('TURSO_AUTH_TOKEN'),
  'tls' => false
];

$db = new LibSQL($config);

$query = HttpStatement::create(sql: 'CREATE TABLE users (id INTEGER);');

$results = $db->execute(query: $query);

?>



<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Crystal Missões</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  <style>

  </style>
  <link href="css/cssindex.css" rel="stylesheet">
</head>




<body>

  <p id="teste"></p>





  
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous">
    </script>

</body>

</html>