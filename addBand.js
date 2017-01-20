function addBand() {
    var name = $('#name_band').val();
    var yearsActive = ($('#year_from').val()).concat(' - ', ($('#year_now').val()));
    var country = $('#country').val();
    var genre = $('#genres').val();

    $.ajax({
        type: "POST",
        url: 'band/add',
        data: {
            name_band: name,
            year_published: yearsActive,
            id_band: country,
            id_genre: genre
        },
        success: function (response) {
            window.location.href = 'band.php';
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