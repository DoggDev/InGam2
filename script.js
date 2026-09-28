
$(".milked").hide();
$(".eyes").hide();


$( "h1" ).on( "click", function() {
  $("h2").fadeIn("slow");
  $("h1").hide("slow");
} );

$( ".milk, .hand" ).draggable();
    $( ".itemOne" ).droppable({
      drop: function( event, ui ) {
        $( this )
        $(".milk").hide(function(){
            $(".milked").fadeIn();
            $("p").text("My belly is so full now...")
            $( ".itemOne" ).droppable({
            drop: function( event, ui ) {
            $( this )
            $(".hand").hide();
            $(".eyes").fadeIn();
            $("p").text("I can now sleep...")

      }
    });
        });

      }
    });
//$().on("click", function() {});