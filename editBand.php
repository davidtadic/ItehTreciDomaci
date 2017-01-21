<?php
include ('layout.php');

?>

<script src="editBand.js"></script>
<div class="container">
    <form class="well form-horizontal" action="editBand.php" method="post" id="band_form">
        <fieldset>

            <legend>Edit Band</legend>
            <input name="id" placeholder="id" id="id" value="<?php echo $_GET['id'] ?>" class="form-control" type="hidden">

            <div class="form-group">
                <label class="col-md-4 control-label">Name</label>
                <div class="col-md-4">
                    <input name="name_band" id="name_band" placeholder="Band" class="form-control" type="text" required minlength="2">
                </div>
            </div>

            <div class="form-group">
                <label class="col-md-4 control-label">Years Active</label>
                <div class="col-md-4 form-inline" style="width: 100px; margin-right: 25px">
                    <input name="year_from" id="year_from" placeholder="From" class="form-control" type="text" required minlength="4" maxlength="4" style="width: 100px">
                </div>
                <div class="col-md-4 form-inline" style="width: 100px">
                    <input name="year_now" id="year_now" placeholder="Till" class="form-control" type="text" required minlength="3" maxlength="4" style="width: 100px">
                </div>
            </div>

            <div class="form-group">
                <label class="col-md-4 control-label">Country</label>
                <div class="col-md-4">
                    <input name="country" id="country" placeholder="Country" class="form-control" type="text" required minlength="3">
                </div>
            </div>



            <div class="form-group">
                <label class="col-md-4 control-label">Choose Genre</label>
                <div class="col-md-4 form-inline">
                    <select name="genres" id="genres" class="form-control right" required>
                    </select>
                </div>
                <div class="col-md-4 form-inline">
                    <input type="button" name="save" value="Update" onclick="updateBand()" class="btn btn-primary">
                </div>
            </div>

        </fieldset>
    </form>
</div>
