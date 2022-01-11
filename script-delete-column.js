// ●	remove columns from the grid
$(".del-col").click(function () {

  console.log("delete column button clicked");

  $("div.row div.col-sm:last-child").remove()

})
