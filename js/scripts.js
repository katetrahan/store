$(document).ready(function() {
  $("form#form1").submit(function(event) {
    $("#return").show();
    event.preventDefault();
    var namePatient = $("input#nameEntry").val();
    $(".name").text(namePatient);
  });
});
