<?php
include ('layout.php');
?>
<script src="editSong.js"></script>
<div class="container">
    <form class="well form-horizontal">
        <fieldset>

            <legend>Edit Song</legend>
            <input name="id" placeholder="id" id="id" value="<?php echo $_GET['id'] ?>" class="form-control" type="hidden">

            <div class="form-group">
                <label class="col-md-4 control-label">Name</label>
                <div class="col-md-4">
                    <input name="name_song" id="name_song" placeholder="Song" class="form-control" type="text" required minlength="2">
                </div>
            </div>



            <div class="form-group">
                <label class="col-md-4 control-label">Album</label>
                <div class="col-md-4 form-inline">
                    <select name="albums" id="albums" class="form-control right" required>
                    </select>
                </div>
            </div>

            <div class="form-group">
                <label class="col-md-4 control-label">Band/Artist</label>
                <div class="col-md-4 form-inline">
                    <select name="bands" id="bands" class="form-control right" required>
                    </select>
                </div>
            </div>



            <div class="form-group">
                <label class="col-md-4 control-label">Choose Genre</label>
                <div class="col-md-4 form-inline">
                    <select name="genres" id="genres" class="form-control right" required>
                    </select>
                </div>
                <div class="col-md-4 form-inline">
                    <input type="button" name="save" value="Update" onclick="updateSong()" class="btn btn-primary">
                </div>
            </div>

        </fieldset>
    </form>
</div>
