<?php
require 'flight/Flight.php';
require 'controller.php';



Flight::route('/', function (){
   Flight::render('../home.php');
});

Flight::route('/genre', function (){
    echo 'cao';
    $data = Flight::request()->data;
   echo json_encode(Controller::addGenre($data->name_genre));
});

Flight::start();