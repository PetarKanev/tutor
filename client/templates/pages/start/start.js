 

 Template.start.events({
"submit .workcenterSelection": function(event){
event.defaultPrevented;
console.log(event);
var text = $( "#someId" ).val();
var post = {
      machinenumber: $( "#someId" ).val()
     };


console.log("example test for machines" + post);
console.log(text);
Meteor.subscribe('machines');
     Meteor.call('machinesInsert', post)
console.log("second hi");
Router.go('main'); 
return false;

}
});