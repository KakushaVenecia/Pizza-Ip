//business logic 
function Contact(first, last) {
    this.firstName = first;
    this.lastName = last;
    
  }
function Address(street,city,state){
  this.streetName = street;
  this.cityName = city;
  this.stateName = state;
}

  Contact.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
  }

  Address.prototype.fullAddress= function (){
    return this.streetName + "," + this.cityName + "Country:" + this.stateName;
    }

// user interface logic
$(document).ready(function(){
    $("form#new-contact").submit(function(event) {
      event.preventDefault();
      var inputtedFirstName = $("input#new-first-name").val();
      var inputtedLastName = $("input#new-last-name").val();
      var inputtedStreetName= $("input#new-street-name").val();
      var inputtedCityName= $("input#new-city-name").val();
      var inputtedStateName= $("input#new-state-name").val();
      var newContact = new Contact(inputtedFirstName, inputtedLastName);
      var newAddress = new Address(inputtedStreetName,inputtedCityName,inputtedStateName);
      $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");
      $("input#new-first-name").val("");
      $("input#new-last-name").val("");
    });
      $("ul#address").append("<li><span class='address'>" + newAddress.fullAddress() + "</span></li>");
      $("input#new-street-name").val("");
      $("input#new-city-name").val("");
      $("input#new-state-name").val("");
    });
  $(".contact").last().click(function() {
    $("#show-contact").show();
    $("#show-contact h2").text(newContact.firstName);
    $(".first-name").text(newContact.firstName);
    $(".last-name").text(newContact.lastName);
  });
    $(".address").last().click(function() {
    $("#show-address").show();
    $("#show-address h2").text(newAddress.streetName);
    $(".street-name").text(newAddress.streetName);
    $(".city-name").text(newAddress.cityName);
    $(".state-name").text(newAddress.stateName);
  });