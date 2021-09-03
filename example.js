$(document).ready(function(){
    
    $("#base-div").inputPicture("input-picture-element");
    
    $base_div = $("#base-div")
    $base_div.inputPicture().OnChange(function (temp_path) {

        //temp_path is a temporary path to the uploaded image

        //if you want to upload the image to your server:
        $base_div.inputPicture().Upload({
            url: "",
            success: function(){
                //Do something
            }
        })

        //You can change some properties:
        $base_div.inputPicture().SetWidth("200px");
        $base_div.inputPicture().SetHeight("200px");
        $base_div.inputPicture().SetSquare();

        $base_div.inputPicture().SetImage("image.png")
        
        //You need to access RemoveImage() to see the new default image
        $base_div.inputPicture().SetDefaultImage("new_default_image.png")
        $base_div.inputPicture().RemoveImage();

        $base_div.inputPicture().SetText("New Text");
        $base_div.inputPicture().SetFontSize("32px");
    })
})
