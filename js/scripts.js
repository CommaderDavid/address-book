$(document).ready(function() {
  $("form#book").submit(function(event) {
    var nameInput = $("input#name").val();
    var phoneInput = $("input#phone").val();
    var addressInput = $("input#address").val();
    var emailInput = $("input#email").val();


    $("ul#contact").prepend(`<div class="contacts"><li>${nameInput}</li></div><div class="details"><li>${phoneInput}</li><li>${addressInput}</li><li>${emailInput}</li></div>`);
    // this creates and uses the variable with the nameInput. Remember (``)


    $("div.contacts").click(function() {
      $(".details").toggle();
    });
    // have almost everything. not sure where im stuck

    event.preventDefault();
  });
});
