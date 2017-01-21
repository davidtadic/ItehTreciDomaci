$(document).ready(function () {
    getAlbums();
});

function getAlbums() {
    $.ajax({
        type: "GET",
        url: 'album/all',
        dataType: 'json',
        success: function (response) {
            console.log('uspesno');
            if(response == null || response.length == 0) {
                $('#album-data').append('<h2><strong>Currently, there are no albums.</strong></h2>');
                $('#album').hide();
            }
            else {
                var albums = response;
                for(var i = 0; i < albums.length; i++) {
                    $('#album-data').append("<tr><td>" + albums[i].id + "</td><td>" + albums[i].name_album + "</td><td>" + albums[i].year_published + "</td><td>" + albums[i].id_band + "</td><td>" + albums[i].id_genre + "</td><td><button id='edit-album' onclick='editAlbum(" + albums[i].id +")' class='btn btn-default btn-sm'><span class=\"glyphicon glyphicon-edit\" aria-hidden=\"true\"></span></button><button id='delete-album' onclick='deleteAlbum(" + albums[i].id +")' class='btn btn-danger btn-sm'><span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span></button></td></tr>");
                }
            }


        },
        error: function (error) {
            alert("Error: " + error.status);
        }
    });
}

function getGenre(id){
    $.ajax({
        type: "GET",
        dataType: 'json',
        url: 'genre/get/' + id,
        success: function (response) {
            console.log(response.name_genre);

        },
        error: function (error) {
            alert("Error: " + error.status);
        }
    });
}

function deleteAlbum(id){
    $.ajax({
        type: "DELETE",
        url: 'album/delete/' + id ,
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
            alert("Error deleting album: " + error.status);
        }
    });
}

function editAlbum(id) {
    window.location.href = 'editAlbum.php?id=' + id;
}