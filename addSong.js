function addSong() {
    var name = $('#name_song').val();
    var album = $('#albums').val();
    var band = $('#bands').val();
    var genre = $('#genres').val();

    $.ajax({
        type: "POST",
        url: 'song/add',
        data: {
            name_song: name,
            id_album: album,
            id_band: band,
            id_genre: genre
        },
        success: function (response) {
            window.location.href = 'song.php';
        },
        error: function (error) {
            alert("Error: " + error);
        }
    });
}

function getGenres() {
    $.ajax({
        type: "GET",
        url: 'genre/all',
        dataType: 'json',
        success: function (response) {
            if(response == null || response.length == 0) {
                $('#genres').append('<option value=""> There are no genres available.</option>');
            }
            else {
                var genres = response;
                $('#genres').append('<option value=" ">Select genre</option>');
                for(var i = 0; i < genres.length; i++) {
                    $('#genres').append("<option value=" + genres[i].id + ">" + genres[i].name_genre + "</option>");
                }
            }
        },
        error: function (error) {
            alert("Error: " + error.status);
        }
    });
}

function getBands() {
    $.ajax({
        type: "GET",
        url: 'band/all',
        dataType: 'json',
        success: function (response) {
            if(response == null || response.length == 0) {
                $('#bands').append('<option value=""> There are no bands available.</option>');
            }
            else {
                var bands = response;
                $('#bands').append('<option value=" ">Select band</option>');
                for(var i = 0; i < bands.length; i++) {
                    $('#bands').append("<option value=" + bands[i].id + ">" + bands[i].name_band + "</option>");
                }
            }
        },
        error: function (error) {
            alert("Error: " + error.status);
        }
    });
}

function getAlbums() {
    $.ajax({
        type: "GET",
        url: 'album/all',
        dataType: 'json',
        success: function (response) {
            if(response == null || response.length == 0) {
                $('#albums').append('<option value=""> There are no albums available.</option>');
            }
            else {
                var albums = response;
                $('#albums').append('<option value=" ">Select album</option>');
                for(var i = 0; i < albums.length; i++) {
                    $('#albums').append("<option value=" + albums[i].id + ">" + albums[i].name_album + "</option>");
                }
            }
        },
        error: function (error) {
            alert("Error: " + error.status);
        }
    });
}