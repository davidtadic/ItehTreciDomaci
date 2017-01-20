function addGenre() {
    var name = $('#genre').val();

    $.ajax({
        type: "POST",
        url: 'genre/add',
        data: {
            name_genre: name
        },
        success: function (response) {
            console.log(response);
            //ovde uradi reload stranice ili redirekciju ili tako nesto
        },
        error: function (error) {
            console.log("Error: " + error.message);
        }
    });
}