$(document).ready(function() {
  $("form#book").submit(function(event) {
    var nameInput = $("input#name").val();
    var phoneInput = $("input#phone").val();
    var addressInput = $("input#address").val();
    var emailInput = $("input#email").val();

    $("ul#contact").prepend(`<li>${nameInput}</li>`);
    // this creates and uses the variable with the nameInput. Remember (``)

    $("nameInput").click(function() {
      alert("this works");
    });
    // have almost everything. not sure where im stuck

    event.preventDefault();
  });
});
