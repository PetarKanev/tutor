 Meteor.subscribe('cycles-recent', moment().subtract(1, 'hours').format("YYYY-MM-DD HH:mm:ss.SSS"))
Meteor.subscribe('machines');
 Meteor.subscribe('parts');
 Template.jobstatus.helpers({

statusgreen: function(){
     num= Machines.find().fetch().pop().cellnum;
     
    month=moment().format("MM")
   
      timestamp= moment().format("YYYY-MM-DD 08:59:00.000")
   num= Machines.find().fetch().pop().cellnum;
     //figure out cycle time
        start =Cycles.find({PressNumber: num, AutoStatus:'1', CycleTimeStamp: {$gte: moment(Parts.find({press:num, month:month}).fetch().pop().timestamp.toString()).subtract(75,'seconds').format("YYYY-MM-DD HH:mm:ss.SSS")}}).fetch().pop().CycleTimeStamp
       
        prev =Cycles.find({PressNumber: num, AutoStatus:'1',CycleTimeStamp: {$gt: moment(Parts.find({press:num, month:month}).fetch().pop().timestamp.toString()).subtract(100,'seconds').format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(start.toString()).format("YYYY-MM-DD HH:mm:ss.SSS")}}).fetch().pop().CycleTimeStamp
        
        //I should always compare with the most recently submitted job
        
            cycletimeH=Parts.find({press:num, month:month}).fetch().pop().cycletimeH
            cycletimeP=Parts.find({press:num, month:month}).fetch().pop().cycletimeP
            cycletimeQ=Parts.find({press:num, month:month}).fetch().pop().cycletimeQ
           
            if (cycletimeH>0 )
            {
              cycletime=cycletimeH
             
            }

            if ((cycletimeH<=0 || cycletimeH=="") && cycletimeP> 0)
            {
              cycletime=cycletimeP
              
            }
            if ((cycletimeH<=0 || cycletimeH=="") && (cycletimeP<=0 || cycletimeP=="") && cycletimeQ!=0)
            {
              cycletime=cycletimeQ
              
            }
           


startseconds=moment(start).format("ss.SSS")
startminutes=moment(start).format("mm")
startseconds=Number(startseconds)+ Number(startminutes)*60
prevseconds=moment(prev).format("ss.SSS")
prevminutes=moment(prev).format("mm")
prevseconds=Number(prevseconds) + Number(prevminutes)*60
cycletimeNow= startseconds-prevseconds
// console.log("This is the cycletime" + cycletime)
 
 if (cycletimeNow>=cycletime)
     {
     return true
   }
   else
   {
    return false
   }

// // }, 1000);
   
 },


 statusyellow: function(){
   month=moment().format("MM")
   
      timestamp= moment().format("YYYY-MM-DD 08:59:00.000")
   num= Machines.find().fetch().pop().cellnum;
     //figure out cycle time
        start =Cycles.find({PressNumber: num, AutoStatus:'1', CycleTimeStamp: {$gte: moment(Parts.find({press:num, month:month}).fetch().pop().timestamp.toString()).subtract(75,'seconds').format("YYYY-MM-DD HH:mm:ss.SSS")}}).fetch().pop().CycleTimeStamp
       
        prev =Cycles.find({PressNumber: num, AutoStatus:'1',CycleTimeStamp: {$gt: moment(Parts.find({press:num, month:month}).fetch().pop().timestamp.toString()).subtract(100,'seconds').format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(start.toString()).format("YYYY-MM-DD HH:mm:ss.SSS")}}).fetch().pop().CycleTimeStamp
        
        //I should always compare with the most recently submitted job
        
            cycletimeH=Parts.find({press:num, month:month}).fetch().pop().cycletimeH
            cycletimeP=Parts.find({press:num, month:month}).fetch().pop().cycletimeP
            cycletimeQ=Parts.find({press:num, month:month}).fetch().pop().cycletimeQ
           
            if (cycletimeH>0 )
            {
              cycletime=cycletimeH
              
            }

            if ((cycletimeH<=0 || cycletimeH=="") && cycletimeP> 0)
            {
              cycletime=cycletimeP
             
            }
            if ((cycletimeH<=0 || cycletimeH=="") && (cycletimeP<=0 || cycletimeP=="") && cycletimeQ!=0)
            {
              cycletime=cycletimeQ
              
            }
            

startseconds=moment(start).format("ss.SSS")
startminutes=moment(start).format("mm")
startseconds=Number(startseconds)+ Number(startminutes)*60
prevseconds=moment(prev).format("ss.SSS")
prevminutes=moment(prev).format("mm")
prevseconds=Number(prevseconds) + Number(prevminutes)*60
cycletimeNow= startseconds-prevseconds
// console.log("This is the cycletime" + cycletime)
stdcycletime= Number(10.5)
 if (cycletimeNow<cycletime )
     {
     return true
   }
   else
   {
    return false
   }
   // }, 1000);
 },
   statuswhite: function(){
     // setInterval(function(){ 
    month=moment().format("MM")
   
      timestamp= moment().format("YYYY-MM-DD 08:59:00.000")
   num= Machines.find().fetch().pop().cellnum;
      //figure out cycle time
        start =Cycles.find({PressNumber: num, AutoStatus:'1', CycleTimeStamp: {$gte: moment(Parts.find({press:num, month:month}).fetch().pop().timestamp.toString()).subtract(75,'seconds').format("YYYY-MM-DD HH:mm:ss.SSS")}}).fetch().pop().CycleTimeStamp
       
        prev =Cycles.find({PressNumber: num, AutoStatus:'1',CycleTimeStamp: {$gt: moment(Parts.find({press:num, month:month}).fetch().pop().timestamp.toString()).subtract(100,'seconds').format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(start.toString()).format("YYYY-MM-DD HH:mm:ss.SSS")}}).fetch().pop().CycleTimeStamp
        
        //I should always compare with the most recently submitted job
        
            cycletimeH=Parts.find({press:num, month:month}).fetch().pop().cycletimeH
            cycletimeP=Parts.find({press:num, month:month}).fetch().pop().cycletimeP
            cycletimeQ=Parts.find({press:num, month:month}).fetch().pop().cycletimeQ
           
            if (cycletimeH>0 )
            {
              cycletime=cycletimeH
              
            }

            if ((cycletimeH<=0 || cycletimeH=="") && cycletimeP> 0)
            {
              cycletime=cycletimeP
              
            }
            if ((cycletimeH<=0 || cycletimeH=="") && (cycletimeP<=0 || cycletimeP=="") && cycletimeQ!=0)
            {
              cycletime=cycletimeQ
              
            }

startseconds=moment(start).format("ss.SSS")
startminutes=moment(start).format("mm")
startseconds=Number(startseconds)+ Number(startminutes)*60
prevseconds=moment(prev).format("ss.SSS")
prevminutes=moment(prev).format("mm")
prevseconds=Number(prevseconds) + Number(prevminutes)*60
cycletimeNow= startseconds-prevseconds
// console.log("This is the cycletime" + cycletime)


      if (!(cycletimeNow>=cycletime) && !(cycletimeNow<cycletime))
     {
     return true
   }
   else
   {
    return false
   }
//   // }, 1000);


 }})










