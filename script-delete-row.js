// ●	remove rows from the grid
const rowParent=document.querySelector('div.mt-5')
$( ".del-row" ).click(function() {
    
   console.log("delete row button clicked");
    rowParent.removeChild(rowParent.lastElementChild) 
  });


    // $('div.mt-5').removeChild($('div.mt-5') .firstChild)