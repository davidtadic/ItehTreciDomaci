function addGenre() {
    var name = $('#genre').val();

    $.ajax({
        type: "POST",
        url: 'genre/add',
        data: {
            name_genre: name
        },
        success: function (response) {
            window.location.href = 'genres.php';
        },
        error: function (error) {
            console.log("Error: " + error.message);
        }
    });
}