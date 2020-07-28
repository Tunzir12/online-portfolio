$(document).ready(function() {

    //sticky navbar

    $(".js-stick").waypoint(function(direction)
        {
            if ( direction == "down" ) {
                $("nav").addClass("sticky");
            } else {
                $("nav").removeClass("sticky");
            }
        }
    );
});