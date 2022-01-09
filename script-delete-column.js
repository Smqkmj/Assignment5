// ●	remove columns from the grid
// const colParent=document.querySelectorAll('.row')
const colParent=document.querySelector('.row')
$( ".del-col" ).click(function() {
    
    console.log("delete column button clicked");
 console.log(colParent)
     colParent.removeChild(colParent.lastElementChild) 
    // $( ".mt-5" ).find( colParent.lastElementChild).removeChild();
  })
