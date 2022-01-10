// ●	remove columns from the grid
// const colParent=document.querySelectorAll('.row')
const colParent = document.querySelectorAll('.row')
const rowParent = document.querySelector('.mt-5')
$(".del-col").click(function () {

  console.log("delete column button clicked");

  $("div.row div.col-sm:last-child").remove()

})
