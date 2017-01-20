<?php
    include ('layout.php');
?>
<script src="addGenre.js"></script>
<div class="container">
    <form class="well form-inline" action=" " method="get" id="genre_form">
        <fieldset>

            <legend>Add New Genre</legend>

            <div class="form-group">
                <label class="col-md-4 control-label">New Genre</label>
                <div class="col-md-4">
                    <input name="name_genre" id="genre" placeholder="Genre" class="form-control" type="text" required minlength="3">
                </div>

            </div>

            <div class="form-group">
                <div class="col-md-4">
                    <button type="submit" name="save" onclick="addGenre()" class="btn btn-primary">Enter</button>
                </div>
            </div>

        </fieldset>
    </form>
    </div>