$(document).ready(function(){
    $('#contactForm').on('submit', function(evt){
        evt.preventDefault();
        alert("Thank you! " + this.name.value + " For you feedback");
    });
});