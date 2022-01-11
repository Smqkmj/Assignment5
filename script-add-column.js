
// ●	add columns to the grid
const firstColChild=document.querySelector('div.col-sm')
$( ".add-col" ).click(function() {
    
    console.log("add column button clicked");
    $(firstColChild).clone().appendTo("div.row");
  //  console.log($('.row'))
   // rowParent.removeChild(rowParent.lastElementChild) 
   // $("div.row div.col-sm:last-child").remove()
  });
// ●	remove rows from the grid
// ●	remove columns from the grid
// ●	select a color from a dropdown menu of colors
// ●	click on a single cell, changing its color to the currently selected color
// ●	fill all uncolored cells with the currently selected color
// ●	fill all cells with the currently selected color
// ●	clear all cells/restore all cells to their original/initial color
// ●	click and hold (mouseover) from a single cell (start) to a different cell (end) such that all affected/hovered-over cells from start to end change to the currently selected color
