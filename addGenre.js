function addGenre() {
    var name = $('#genre').val();

    $.ajax({
        type: "POST",
        url: 'genre',
        data: {
            name_genre: name
        },
        success: function (response) {

        },
        error: function (error) {
            console.log(name);
            console.log("Error: " + error.message);
        }
    });
}