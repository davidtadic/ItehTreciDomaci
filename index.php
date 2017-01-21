<?php
require 'flight/Flight.php';
require 'controller.php';

Flight::route('/', function (){
   Flight::render('../home.php');
});

Flight::route('POST /genre/add', function (){
    $data = Flight::request()->data;
   echo json_encode(Controller::addGenre($data->name_genre));
});

Flight::route('POST /band/add', function (){
    $data = Flight::request()->data;
    echo json_encode(Controller::addBand($data->name_band, $data->years_active, $data->id_band, $data->id_genre));
});

Flight::route('POST /album/add', function (){
    $data = Flight::request()->data;
    echo json_encode(Controller::addAlbum($data->name_album, $data->year_published, $data->id_band, $data->id_genre));
});

Flight::route('POST /song/add', function (){
    $data = Flight::request()->data;
    echo json_encode(Controller::addSong($data->name_song, $data->id_album, $data->id_band, $data->id_genre));
});

Flight::route('GET /genre/all', function (){
    echo json_encode(Controller::getGenres());
});

Flight::route('GET /band/all', function (){
    echo json_encode(Controller::getBands());
});

Flight::route('GET /album/all', function (){
    echo json_encode(Controller::getAlbums());
});

Flight::route('GET /song/all', function (){
    echo json_encode(Controller::getSongs());
});

Flight::route('GET /genre/get/@id', function ($id){
    echo json_encode(Controller::getGenreById($id));
});

Flight::route('GET /band/get/@id', function ($id){
    echo json_encode(Controller::getGenreById($id));
});

Flight::route('DELETE /genre/delete/@id', function ($id){
    Controller::deleteGenre($id);
});

Flight::route('DELETE /band/delete/@id', function ($id){
    Controller::deleteBand($id);
});

Flight::route('DELETE /album/delete/@id', function ($id){
    Controller::deleteAlbum($id);
});

Flight::route('DELETE /song/delete/@id', function ($id){
    Controller::deleteSong($id);
});

Flight::route('PUT /band/edit/@id/@name_band/@years_active/@country/@id_genre', function ($id,$name_band,$years_active,$country,$id_genre) {
    echo json_encode(Controller::editBand($id,$name_band,$years_active,$country,$id_genre));
});

Flight::route('PUT /album/edit/@id/@name_album/@year_published/@id_band/@id_genre', function ($id,$name_album,$year_published,$id_band,$id_genre) {
    echo json_encode(Controller::editAlbum($id,$name_album,$year_published,$id_band,$id_genre));
});

Flight::route('PUT /song/edit/@id/@name_song/@id_album/@id_band/@id_genre', function ($id,$name_song,$id_album,$id_band,$id_genre) {
    echo json_encode(Controller::editSong($id,$name_song,$id_album,$id_band,$id_genre));
});


Flight::start();