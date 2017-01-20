<?php
include ('layout.php');
?>
<script src="addSong.js"></script>
<div class="container">
    <form class="well form-horizontal" action=" " method="get" id="album_form">
        <fieldset>

            <legend>Add New Song</legend>

            <div class="form-group">
                <label class="col-md-4 control-label">Name</label>
                <div class="col-md-4">
                    <input name="name_song" id="name_song" placeholder="Song" class="form-control" type="text" required minlength="2">
                </div>
            </div>



            <div class="form-group">
                <label class="col-md-4 control-label">Album</label>
                <div class="col-md-4 form-inline">
                    <select name="album" id="albums" class="form-control right" required>
                    </select>
                </div>
            </div>

            <div class="form-group">
                <label class="col-md-4 control-label">Band/Artist</label>
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
                    <button type="submit" name="save" onclick="addSong()" class="btn btn-primary">Enter</button>
                </div>
            </div>

        </fieldset>
    </form>
</div>
