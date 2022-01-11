
// ●	add rows to the grid
const rowParent = document.querySelector('div.mt-5')
const newRow = document.createElement("div")
$(".add-row").click(function () {

  console.log("add row button clicked");

  $("div.row:last-child").clone().appendTo(".mt-5");
});

// ●	select a color from a dropdown menu of colors
// ●	click on a single cell, changing its color to the currently selected color
// ●	fill all uncolored cells with the currently selected color
// ●	fill all cells with the currently selected color
// ●	clear all cells/restore all cells to their original/initial color
// ●	click and hold (mouseover) from a single cell (start) to a different cell (end) such that all affected/hovered-over cells from start to end change to the currently selected color
