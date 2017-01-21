<?php
require 'GenreClass.php';
require  'BandClass.php';
require  'AlbumClass.php';
require  'SongClass.php';

class Controller{

    //add
    static function addGenre($name){
        $genre = new Genre($name);
        $result = $genre->addNewGenre();
        return $result;
    }

    static function addBand($name, $years, $country, $genre){
        $band = new Band($name, $years, $country, $genre);
        $result = $band->addNewBand();
        return $result;
    }

    static function addAlbum($name, $year, $band, $genre){
        $album = new Album($name, $year, $band, $genre);
        $result = $album->addNewAlbum();
        return $result;
    }

    static function addSong($name, $album, $band, $genre){
        $song = new Song($name, $album, $band, $genre);
        $result = $song->addNewSong();
        return $result;
    }


    //delete
    static function deleteGenre($id){
        $genre = Genre::getById($id);
        $genre->deleteById();
    }

    static function deleteBand($id){
        $band = Band::getById($id);
        $band->deleteById();
    }

    static function deleteAlbum($id){
        $album = Album::getById($id);
        $album->deleteById();
    }

    static function deleteSong($id){
        $song = Song::getById($id);
        $song->deleteById();
    }

    //get
    static function getGenres(){
        $genres = Genre::getAllGenres();
        return $genres;
    }

    static function getBands(){
        $bands = Band::getAllBands();
        return $bands;
    }

    static function getAlbums(){
        $albums = Album::getAllAlbums();
        return $albums;
    }

    static function getSongs(){
        $songs = Song::getAllSongs();
        return $songs;
    }

    static function getGenreById($id){
        $genre = Genre::getById($id);
        return $genre;
    }

    static function getBandById($id){
        $band = Band::getById($id);
        return $band;
    }

    static function editBand($id,$name_band,$years_active,$country,$id_genre) {
        $band = Band::getById($id);
        $band->name_band = $name_band;
        $band->years_active = $years_active;
        $band->country = $country;
        $band->id_genre = $id_genre;
        $result = $band->editBand();
        return $result;
    }

    static function editAlbum($id,$name_album,$year_published,$id_band,$id_genre) {
        $album = Album::getById($id);
        $album->name_album = $name_album;
        $album->year_published = $year_published;
        $album->id_band = $id_band;
        $album->id_genre = $id_genre;
        $result = $album->editAlbum();
        return $result;
    }

    static function editSong($id,$name_song,$id_album,$id_band,$id_genre) {
        $song = Song::getById($id);
        $song->name_song = $name_song;
        $song->id_album = $id_album;
        $song->id_band = $id_band;
        $song->id_genre = $id_genre;
        $result = $song->editSong();
        return $result;
    }


}
