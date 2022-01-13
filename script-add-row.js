// const newRow = $(".row").clone()
// $(".add-row").click(function () {

//   console.log("add row button clicked");

//   $(newRow).appendTo(".mt-5");
// });


// $(".add-row").click(function () {

//   console.log("add row button clicked");
// const newRow=$("div.row:last-child").clone()
// newRow.removeClass()
//   newRow.appendTo(".mt-5");
// });

$(".add-row").click(function () {

  console.log("add row button clicked");

  $("div.row:last-child").clone().appendTo(".mt-5");
});