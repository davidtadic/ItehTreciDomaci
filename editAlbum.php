<?php
include ('layout.php');

?>

<script src="editAlbum.js"></script>
<div class="container">
    <form class="well form-horizontal" action="editAlbum.php.php" method="post" id="album_form">
        <fieldset>

            <legend>Edit Album</legend>
            <input name="id" placeholder="id" id="id" value="<?php echo $_GET['id'] ?>" class="form-control" type="hidden">

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
                    <input type="button" name="save" value="Update" onclick="updateAlbum()" class="btn btn-primary">
                </div>
            </div>

        </fieldset>
    </form>
</div>
