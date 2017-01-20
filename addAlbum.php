<?php
include ('layout.php');

?>

<script src="addAlbum.js"></script>
<div class="container">
    <form class="well form-horizontal" action=" " method="get" id="album_form">
        <fieldset>

            <legend>Add New Album</legend>

            <div class="form-group">
                <label class="col-md-4 control-label">Name</label>
                <div class="col-md-4">
                    <input name="name_album" id="name_album" placeholder="Album" class="form-control" type="text" required minlength="2">
                </div>
            </div>

            <div class="form-group">
                <label class="col-md-4 control-label">Year Published</label>
                <div class="col-md-4">
                    <input name="year_published" id="year_published" placeholder="Year" class="form-control" type="text" required minlength="4" maxlength="4">
                </div>

            </div>

            <div class="form-group">
                <label class="col-md-4 control-label">Choose Band</label>
                <div class="col-md-4 form-inline">
                    <select name="band" id="bands" class="form-control right" required>
                    </select>
                </div>
            </div>



            <div class="form-group">
                <label class="col-md-4 control-label">Choose Genre</label>
                <div class="col-md-4 form-inline">
                    <select name="genre" id="genres" class="form-control right" required>
                    </select>
                </div>
                <div class="col-md-4 form-inline">
                    <button type="submit" name="save" class="btn btn-primary" onclick="addAlbum()">Enter</button>
                </div>
            </div>

        </fieldset>
    </form>
</div>
