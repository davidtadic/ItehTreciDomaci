$(document).ready(function () {
    getBands();
});

function getBands() {
    $.ajax({
        type: "GET",
        url: 'band/all',
        dataType: 'json',
        success: function (response) {
            console.log('uspesno');
            if(response == null || response.length == 0) {
                $('#band-data').append('<h2><strong>Currently, there are no bands.</strong></h2>');
                $('#band').hide();
            }
            else {
                var bands = response;
                for(var i = 0; i < bands.length; i++) {
                    $('#band-data').append("<tr><td>" + bands[i].id + "</td><td>" + bands[i].name_band + "</td><td>" + bands[i].years_active + "</td><td>" + bands[i].country + "</td><td>" + getGenre(bands[i].id_genre) + "</td><td><button id='edit-band' onclick='editBand(" + bands[i].id +")' class='btn btn-default btn-sm'><span class=\"glyphicon glyphicon-edit\" aria-hidden=\"true\"></span></button><button id='delete-band' onclick='deleteBand(" + bands[i].id +")' class='btn btn-danger btn-sm'><span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span></button></td></tr>");
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

function deleteBand(id){
    $.ajax({
        type: "DELETE",
        url: 'band/delete/' + id ,
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

function editBand(id) {
    window.location.href = 'editBand.php?id=' + id;
}