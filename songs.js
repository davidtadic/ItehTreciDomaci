$(document).ready(function () {
    getSongs();
});

function getSongs() {
    $.ajax({
        type: "GET",
        url: 'song/all',
        dataType: 'json',
        success: function (response) {
            console.log('uspesno');
            if(response == null || response.length == 0) {
                $('#song-data').append('<h2><strong>Currently, there are no albums.</strong></h2>');
                $('#song').hide();
            }
            else {
                var songs = response;
                for(var i = 0; i < songs.length; i++) {
                    $('#song-data').append("<tr><td>" + songs[i].id + "</td><td>" + songs[i].name_song + "</td><td>" + songs[i].id_album + "</td><td>" + songs[i].id_band + "</td><td>" + songs[i].id_genre + "</td><td><button id='edit-song' onclick='editSong(" + songs[i].id +")' class='btn btn-default btn-sm'><span class=\"glyphicon glyphicon-edit\" aria-hidden=\"true\"></span></button><button id='delete-song' onclick='deleteSong(" + songs[i].id +")' class='btn btn-danger btn-sm'><span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span></button></td></tr>");
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

function deleteSong(id){
    $.ajax({
        type: "DELETE",
        url: 'song/delete/' + id ,
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

function editSong(id) {
    window.location.href = 'editSong.php?id=' + id;
}