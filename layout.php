<!DOCTYPE HTML>
<html>
<header>
    <script src="js/jquery-3.1.1.min.js"></script>
    <!-- Bootstrap -->

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
          integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css"
          integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"
            integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
            crossorigin="anonymous"></script>
    <script src="jquery.tablesorter.min.js"></script>

    <link href="style.css" type="text/css" rel="stylesheet">

</header>

<body>
<nav class="navbar navbar-inverse">
    <div class="container-fluid">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="home.php">Hard Rock Music</a>
        </div>

        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
                <li><a href="genres.php">Genre <span class="sr-only">(current)</span></a></li>
                <li><a href="bands.php">Bands</a></li>
                <li><a href="albums.php">Albums</a></li>
                <li><a href="songs.php">Songs</a></li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">More options <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li><a href="addGenre.php">Add Genre</a></li>
                        <li><a href="addBand.php">Add Band</a></li>
                        <li><a href="addAlbum.php">Add Album</a></li>
                        <li><a href="addSong.php">Add Song</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</nav>
</body>

</html>

