$(document).ready(function () {
    getTopArtists();
    getTopTracks();
});

function getTopArtists() {

    $.ajax({
        type: "GET",
        url: 'http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=110a6d1ad05132ed935ed2647439a5b8&format=json',
        dataType: 'json',
        success: function (response) {
            console.log('uspesno');
            console.log(response);
            var artists = response.artists;
            var artist = artists.artist;
            console.log(artist);
            for(var i = 0; i < 15; i++) {
                var band = artist[i];
                $('#home-body1').append('<tr><td>'+ band.name +'</td><td>'+ band.listeners +'</td><td>'+ band.playcount +'</td></tr>');
            }
        },
        error: function (error) {
            console.log('greska');

            alert("Error: " + error);
        }
    });

}

function getTopTracks() {

    $.ajax({
        type: "GET",
        url: 'http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=110a6d1ad05132ed935ed2647439a5b8&format=json',
        dataType: 'json',
        success: function (response) {
            console.log('uspesno');
            console.log(response);
            var tracks = response.tracks;
            var track = tracks.track;
            console.log(track);
            for(var i = 0; i < 15; i++) {
                var song = track[i];
                $('#home-body2').append('<tr><td>'+ song.name +'</td><td>'+ song.listeners +'</td><td>'+ song.playcount +'</td></tr>');
            }
        },
        error: function (error) {
            console.log('greska');

            alert("Error: " + error);
        }
    });
}