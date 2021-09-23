$(document).ready(function(){
    $('#contactForm').on('submit', function(evt){
        evt.preventDefault();
        alert("Thank you! " + this.name.value + " For you feedback");
        
    });
});
function resetForm() {
    document.getElementById("contactForm").reset();
  }
