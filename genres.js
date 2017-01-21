$(document).ready(function () {
    getGenre();

});

function getGenre() {
    $.ajax({
        type: "GET",
        url: 'genre/all',
        dataType: 'json',
        success: function (response) {
            if(response == null || response.length == 0) {
                $('#genre-data').append('<h2><strong>Currently, there are no clubs.</strong></h2>');
                $('#genre').hide();
            }
            else {
                var genres = response;
                for(var i = 0; i < genres.length; i++) {
                    $('#genre-data').append("<tr><td>" + genres[i].id + "</td><td>" + genres[i].name_genre + "</td><td><button id='delete-genre' onclick='deleteGenre(" + genres[i].id +")' class='btn btn-danger btn-sm'><span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span></button></td></tr>");
                }
            }


        },
        error: function (error) {
            alert("Error: " + error.status);
        }
    });
}

function deleteGenre(id){
    $.ajax({
        type: "DELETE",
        url: 'genre/delete/' + id ,
        success: function (response) {
            response = JSON.parse(response);
            if (response.status == 1) {
                alert(response.message);
                location.reload();
            }
            else {
                alert(response.message);
            }
        },
        error: function (error) {
            alert("Error deleting clubs: " + error.status);
        }
    });
}