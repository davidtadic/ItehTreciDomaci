$(document).ready(function(){
   getBands();
    getGenres();
});


function addAlbum() {
    var name = $('#name_album').val();
    var year = $('#year_published').val();
    var band = $('#bands').val();
    var genre = $('#genres').val();

    $.ajax({
        type: "POST",
        url: 'album/add',
        data: {
            name_album: name,
            year_published: year,
            id_band: band,
            id_genre: genre
        },
        success: function (response) {
            window.location.href = 'albums.php';
        },
        error: function (error) {
            alert("Error: " + error);
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