var num = "1"



Template.press.rendered = function ()
{

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;

  console.log('Your current position is:');
  console.log('Latitude : ' + crd.latitude);
  console.log('Longitude: ' + crd.longitude);
  console.log('More or less ' + crd.accuracy + ' meters.');
  var latitude=crd.latitude
  var longitude=crd.longitude
  Session.set("lat",latitude )
 Session.set("long",longitude)

 console.log("lat" + Session.get("lat"))
};

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
};
 navigator.geolocation.getCurrentPosition(success, error, options);
 setInterval(function(){ console.log("outside lat" + Session.get("lat"))}, 3000);
 
}
Template.press.events({
"submit .workcenterSelection": function(event){
event.defaultPrevented;
console.log(event);
var center = $( "#name" ).val();
console.log("you chose this center" + center)


      Meteor.call('tutorsRemove', center)


//Here is the logic to determine the page to go to based on the time of day


	Router.go('press');


return false;
},
"submit .workcenteradd": function(event){
event.defaultPrevented;
console.log(event);
var text = $( "#someId" ).val();
// "CellNum": "22",
//       "CellID": "3100Q"

console.log("this is the name" + $( "#name" ).val())
console.log("this is the subject"+ $( "#subject" ).val())
console.log("this is the location" + Geolocation.latLng())
var post = {
      Name: $( "#name" ).val(),
       Subject: $( "#subject" ).val(),
       Distance: $( "#distance" ).val()
        
        
     };

      Meteor.call('tutorsInsert', post)


//Here is the logic to determine the page to go to based on the time of day


	Router.go('press');


return false;
}
});
Workcenters.allow({
  remove: function (userId, doc) {
    return true;
  }
})

Template.press.helpers({

/*location: function ()

{

  return Geolocation.latLng()
} */

})
