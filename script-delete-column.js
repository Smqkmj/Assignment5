// ●	remove columns from the grid
// const colParent=document.querySelectorAll('.row')

$(".del-col").click(function () {

  console.log("delete column button clicked");

  $("div.row div.col-sm:last-child").remove()

})
