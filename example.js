$(document).ready(function(){
    $base_div = $("#base-div")

    $base_div.inputPicture("input-picture-element");

    $base_div.inputPicture().OnChange(function (temp_path) {
        $base_div.inputPicture().SetWidth("500px");
    })
})