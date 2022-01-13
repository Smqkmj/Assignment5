
// ●	add columns to the grid
const newColChild=document.createElement('div')
newColChild.classList.add('col-sm')
newColChild.classList.add('border')
newColChild.classList.add('border-dark')
newColChild.classList.add('box')
newColChild.classList.add('white')

$( ".add-col" ).click(function() {
    
    console.log("add column button clicked");
    $(newColChild).clone().appendTo("div.row");

  });

