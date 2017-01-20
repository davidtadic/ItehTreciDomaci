<?php
require 'GenreClass.php';
require  'BandClass.php';
require  'AlbumClass.php';
require  'SongClass.php';

class Controller{

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

}
