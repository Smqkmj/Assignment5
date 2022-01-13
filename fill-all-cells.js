$("select#fillAllId").append("<option value=blue>Blue</option>");
$("select#fillAllId").append("<option value=black>Black</option>");
$("select#fillAllId").append("<option value=green>Green</option>");
$("select#fillAllId").append("<option value=yellow>Yellow</option>");
$("select#fillAllId").append("<option value=orange>Orange</option>");
$("select#fillAllId").append("<option value=pink>Pink</option>");
$("select#fillAllId").append("<option value=purple>Purple</option>");

$( ".fillAll" ).click(function() {
    console.log("fill all has been pressed");
    $( "div.col-sm" ).css( "background-color", $("select#fillAllId").val())
  });
