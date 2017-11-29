$(document).ready(function() {
  $("form#form1").submit(function(event) {
    $("#response").show();
    event.preventDefault();
    var namePatient = $("input#nameEntry").val();
    var addressData = $("input#addressEntry").val();
    var item = $("#item").val();
    $(".name").text(namePatient);
    $(".address").text(addressData);
    $(".purchase").text(item);
  });
});
