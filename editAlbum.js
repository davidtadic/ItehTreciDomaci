$(document).ready(function () {
    getGenres();
    getBands();
});

function updateAlbum() {
    var id = $('#id').val();
    var name_album = $('#name_album').val();
    var year_published = $('#year_published').val();
    var id_band = $('#bands').val();
    var id_genre = $('#genres').val();

    $.ajax({
        type: "PUT",
        url: 'album/edit/' + id + '/' + name_album + '/' + year_published + '/' + id_band + '/' + id_genre ,
        dataType: 'json',
        success: function () {
            window.location.href = 'albums.php';
        },
        error: function (error) {
            alert("Error: " + JSON.parse(error));
        }
    });
}

function getGenres() {
    $.ajax({
        type: "GET",
        url: 'genre/all',
        dataType: 'json',
        success: function (response) {
            console.log('usepsnoooooo');
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
            console.log('greskaaaa');
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
