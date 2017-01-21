$(document).ready(function () {
    getGenres();
});

function updateBand() {
    var id = $('#id').val();
    var name_band = $('#name_band').val();
    var years_active = $('#year_from').val() + ' - ' + $('#year_now').val();
    var country = $('#country').val();
    var id_genre = $('#genres').val();

    $.ajax({
        type: "PUT",
        url: 'band/edit/' + id + '/' + name_band + '/' + years_active + '/' + country + '/' + id_genre ,
        dataType: 'json',
        success: function () {
            window.location.href = 'bands.php';
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
