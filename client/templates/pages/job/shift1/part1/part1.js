
  Meteor.subscribe('cycles-recent', moment().subtract(1, 'days').format("YYYY-MM-DD 23:00:00.000"))
   Meteor.subscribe('parts');
Meteor.subscribe('machines');

 Meteor.subscribe('hours');


 Template.part1.helpers({

hour1p: function () {
      num= Machines.find().fetch().pop().cellnum;
    
     now="07"
     month=moment().format("MM")
    day=moment().format("DD")
      
     count= Parts.find({hour: now, month:month, day:day,press:num}).count()
     //change these to be based off of a count function
     if (count>1)
    {
     return "1"
   }
   },
   
   hour2p: function () {
    num= Machines.find().fetch().pop().cellnum;
     now="08"
    month=moment().format("MM")
    day=moment().format("DD")
      
     count= Parts.find({hour: now, month:month, day:day,press:num}).count()
     if (count>1)
    {
     return "2"
   }
   },
   hour3p: function () {
      num= Machines.find().fetch().pop().cellnum;
     now="09"
    month=moment().format("MM")
    day=moment().format("DD")
      
     count= Parts.find({hour: now, month:month, day:day,press:num}).count()
     if (count>1)
    {
     return "3"
   }
   },

planned1: function (){
          count= Parts.find({hour: now, month:month, day:day,press:num}).count()
          num= Machines.find().fetch().pop().cellnum;
          now="07"
          month=moment().format("MM")
          day=moment().format("DD")
         timestamp= moment().format("YYYY-MM-DD 07:59:00.000")
          if(typeof Parts.findOne({hour:now, month:month, day:day}) ==='object')
          {
          //I need if statements that determine what to set the cycletime equal time
            cycletimeH=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 1}).fetch().pop().cycletimeH
            cycletimeP=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 1}).fetch().pop().cycletimeP
            cycletimeQ=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 1}).fetch().pop().cycletimeQ
            if (cycletimeH>0)
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
                
   
                      planned=1000/Number(cycletime)
          
              
             return parseInt(planned)
           }
           //no job submitted this hour and the end job hasn't been clicked after the last just was submitted
           //I need to setup that logic.
           

     //part=Parts.find({timestamp: {$lt: timestamp}}).fetch().pop()
     
  
     	
            if(typeof Parts.findOne({hour:now, month:month, day:day,press:num}) ==='undefined' && moment().format("HH") >=now )
          {
            //I need to retrieve the cycle time for the job submitted prior to this hour
            //so find  $lte than the entire time stamp!
            //if (typeof Hours.find({timestamp: {$lt: timestamp}},{press:num}) === 'object')
     	
          cycletimeH=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cycletimeH
          cycletimeP=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cycletimeP
          cycletimeQ=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cycletimeQ
           if (cycletimeH>0)
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
                	
   					
					if (typeof Hours.find({timestamp: {$lt: timestamp}},{press:num}).timestamp === 'undefined')
					{
                      planned=1000/Number(cycletime)
					}
   					
          
              
             return parseInt(planned)
           
       }
          
           },
       planned1p: function (){
           
      
     
                num= Machines.find().fetch().pop().cellnum;
          now="07"
          month=moment().format("MM")
          day=moment().format("DD")
         timestamp= moment().format("YYYY-MM-DD 07:59:00.000")
         count= Parts.find({hour: now, month:month, day:day,press:num}).count()
         // console.log("THis is the count" + count)
         // console.log ( "This is the type of part" + typeof Parts.findOne({hour:now, month:month, day:day}))
          if(typeof Parts.findOne({hour:now, month:month, day:day}) ==='object' && count >=2)
          {
          //fetch cycle time of the 2nd submitted job
            cycletimeH=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 2}).fetch().pop().cycletimeH
            cycletimeP=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 2}).fetch().pop().cycletimeP
            cycletimeQ=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 2}).fetch().pop().cycletimeQ
            if (cycletimeH>0)
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
                
   
                      planned=1000/Number(cycletime)
          
              
             return parseInt(planned)
           }
          
          
           },    
       planned2: function(){
        num= Machines.find().fetch().pop().cellnum;
        now="08"
          month=moment().format("MM")
          day=moment().format("DD")
         timestamp= moment().format("YYYY-MM-DD 08:59:00.000")
          if(typeof Parts.findOne({hour:now, month:month, day:day,press:num}) ==='object')
          {
          //I need if statements that determine what to set the cycletime equal time
            cycletimeH=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 1}).fetch().pop().cycletimeH
            cycletimeP=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 1}).fetch().pop().cycletimeP
            cycletimeQ=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 1}).fetch().pop().cycletimeQ
           if (cycletimeH>0)
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
            
                      planned=1000/Number(cycletime)
          
              
             return parseInt(planned)
           }
           //no job submitted this hour and the end job hasn't been clicked after the last just was submitted
           //I need to setup that logic.
           timestamp= moment().format("YYYY-MM-DD 08:59:00.000")

     //part=Parts.find({timestamp: {$lt: timestamp}}).fetch().pop()
     
  

            if(typeof Parts.findOne({hour:now, month:month, day:day,press:num}) ==='undefined' && moment().format("HH") >=now)
          {
            //I need to retrieve the cycle time for the job submitted prior to this hour
            //so find  $lte than the entire time stamp!
           cycletimeH=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cycletimeH
          cycletimeP=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cycletimeP
          cycletimeQ=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cycletimeQ
          if (cycletimeH>0)
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
             if (typeof Hours.find({timestamp: {$lt: timestamp}},{press:num}).timestamp === 'undefined')
					{
                      planned=1000/Number(cycletime)
					}
          
              
             return parseInt(planned)
           }
          
},

planned2p: function (){
           
                num= Machines.find().fetch().pop().cellnum;
          now="08"
          month=moment().format("MM")
          day=moment().format("DD")
         timestamp= moment().format("YYYY-MM-DD 08:59:00.000")
         count= Parts.find({hour: now, month:month, day:day,press:num}).count()
         console.log("THis is the count" + count)
         console.log ( "This is the type of part" + typeof Parts.findOne({hour:now, month:month, day:day}))
          if(typeof Parts.findOne({hour:now, month:month, day:day}) ==='object' && count >=2)
          {
          //fetch cycle time of the 2nd submitted job
            cycletimeH=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 2}).fetch().pop().cycletimeH
            cycletimeP=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 2}).fetch().pop().cycletimeP
            cycletimeQ=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 2}).fetch().pop().cycletimeQ
            if (cycletimeH>0)
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
                
   
                      planned=1000/Number(cycletime)
          
              
             return parseInt(planned)
           }
          
          
           },    
planned3: function(){
   num= Machines.find().fetch().pop().cellnum;
   now="09"
          month=moment().format("MM")
          day=moment().format("DD")
         timestamp= moment().format("YYYY-MM-DD 09:59:00.000")
          if(typeof Parts.findOne({hour:now, month:month, day:day,press:num}) ==='object')
          {
          //I need if statements that determine what to set the cycletime equal time
            cycletimeH=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 1}).fetch().pop().cycletimeH
            cycletimeP=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 1}).fetch().pop().cycletimeP
            cycletimeQ=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 1}).fetch().pop().cycletimeQ
           if (cycletimeH>0)
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
             
                      planned=1000/Number(cycletime)
          
              
             return parseInt(planned)
           }
           //no job submitted this hour and the end job hasn't been clicked after the last just was submitted
           //I need to setup that logic.
           timestamp= moment().format("YYYY-MM-DD 09:59:00.000")

     //part=Parts.find({timestamp: {$lt: timestamp}}).fetch().pop()
     
  

            if(typeof Parts.findOne({hour:now, month:month, day:day,press:num}) ==='undefined' && moment().format("HH") >=now )
          {
            //I need to retrieve the cycle time for the job submitted prior to this hour
            //so find  $lte than the entire time stamp!
           cycletimeH=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cycletimeH
          cycletimeP=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cycletimeP
          cycletimeQ=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cycletimeQ
          if (cycletimeH>0)
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
             
                     if (typeof Hours.find({timestamp: {$lt: timestamp}},{press:num}).timestamp === 'undefined')
					{
                      planned=1000/Number(cycletime)
					}
          
              
             return parseInt(planned)
           }
          
},
planned3p: function (){
           
      
     
                num= Machines.find().fetch().pop().cellnum;
          now="09"
          month=moment().format("MM")
          day=moment().format("DD")
         timestamp= moment().format("YYYY-MM-DD 09:59:00.000")
         count= Parts.find({hour: now, month:month, day:day,press:num}).count()
         // console.log("THis is the count" + count)
         // console.log ( "This is the type of part" + typeof Parts.findOne({hour:now, month:month, day:day}))
          if(typeof Parts.findOne({hour:now, month:month, day:day}) ==='object' && count >=2)
          {
          //fetch cycle time of the 2nd submitted job
            cycletimeH=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 2}).fetch().pop().cycletimeH
            cycletimeP=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 2}).fetch().pop().cycletimeP
            cycletimeQ=Parts.find({hour:now, month:month, day:day,press:num},{sort: {minute: 1}, limit: 2}).fetch().pop().cycletimeQ
            if (cycletimeH>0)
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
                
   
                      planned=1000/Number(cycletime)
          
              
             return parseInt(planned)
           }
          
          
           },    

plannedc1: function (){
          //basically I need to multiply the earned hours by how many hours the job has gone for to get the planned 
          // so if the job started this hour then just return the EH
          //If the job started in a previous hour then count how many hours have passed?
          //so how do I count hours since job was submitted
          num= Machines.find().fetch().pop().cellnum;
          now="07"
          month=moment().format("MM")
          day=moment().format("DD")
         timestamp= moment().format("YYYY-MM-DD 07:59:00.000")

          if(typeof Parts.findOne({hour:now, month:month, day:day,press:num}) ==='object')
          {
          //I need if statements that determine what to set the cycletime equal time
            cycletimeH=Parts.find({hour:now, month:month, day:day,press:num}).fetch().pop().cycletimeH
            cycletimeP=Parts.find({hour:now, month:month, day:day,press:num}).fetch().pop().cycletimeP
            cycletimeQ=Parts.find({hour:now, month:month, day:day,press:num}).fetch().pop().cycletimeQ
            if (cycletimeH>0)
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
               
   
                      planned=1000/Number(cycletime)
          
              
             return parseInt(planned)
           }
           //no job submitted this hour and the end job hasn't been clicked after the last just was submitted
           //I need to setup that logic.
           

     //part=Parts.find({timestamp: {$lt: timestamp}}).fetch().pop()
     
  

            if(typeof Parts.findOne({hour:now, month:month, day:day,press:num}) ==='undefined' && moment().format("HH") >=now )
          {
            //I need to multiply the day of TS by 24 and multiply the day of now by 24
            //Then I need to add the hours of TS to 24 and add the hours of now to current day hours
            //Then subtract the two from each other then use this as the multiplier
              timeDays=Number(Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().day)
            timeHour=Number(Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().hour)  + (Number(timeDays)*24)
             nowDays=Number(moment().format("DD"))
             nowHours=Number(now) + (Number(nowDays)*24)
             
            multiplier=nowHours - timeHour
            multiplier = multiplier +1
          cycletimeH=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cycletimeH
          cycletimeP=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cycletimeP
          cycletimeQ=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cycletimeQ
           if (cycletimeH>0)
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
               
   if (typeof Hours.find({timestamp: {$lt: timestamp}},{press:num}).timestamp === 'undefined')
					{
                      planned=1000/Number(cycletime)
					}
          
              
             return parseInt(planned)*multiplier
           }
          
           },
 plannedc1p: function (){
          //basically I need to multiply the earned hours by how many hours the job has gone for to get the planned 
          // so if the job started this hour then just return the EH
          //If the job started in a previous hour then count how many hours have passed?
          //so how do I count hours since job was submitted
          num= Machines.find().fetch().pop().cellnum;
          now="07"
          month=moment().format("MM")
          day=moment().format("DD")
         timestamp= moment().format("YYYY-MM-DD 07:59:00.000")

          if(typeof Parts.findOne({hour:now, month:month, day:day,press:num}) ==='object')
          {
          //I need if statements that determine what to set the cycletime equal time
            cycletimeH=Parts.find({hour:now, month:month, day:day,press:num}).fetch().pop().cycletimeH
            cycletimeP=Parts.find({hour:now, month:month, day:day,press:num}).fetch().pop().cycletimeP
            cycletimeQ=Parts.find({hour:now, month:month, day:day,press:num}).fetch().pop().cycletimeQ
            if (cycletimeH>0)
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
               
   
                      planned=1000/Number(cycletime)
          
              
             return parseInt(planned)
           }
           //no job submitted this hour and the end job hasn't been clicked after the last just was submitted
           //I need to setup that logic.
           

     //part=Parts.find({timestamp: {$lt: timestamp}}).fetch().pop()
     
  

            
           },
       plannedc2: function(){
   num= Machines.find().fetch().pop().cellnum;
   now="08"
          month=moment().format("MM")
          day=moment().format("DD")
         timestamp= moment().format("YYYY-MM-DD 08:59:00.000")
          if(typeof Parts.findOne({hour:now, month:month, day:day,press:num}) ==='object')
          {
          //I need if statements that determine what to set the cycletime equal time
            cycletimeH=Parts.find({hour:now, month:month, day:day,press:num}).fetch().pop().cycletimeH
            cycletimeP=Parts.find({hour:now, month:month, day:day,press:num}).fetch().pop().cycletimeP
            cycletimeQ=Parts.find({hour:now, month:month, day:day,press:num}).fetch().pop().cycletimeQ
           if (cycletimeH>0)
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
             
                      planned=1000/Number(cycletime)
          
              
             return parseInt(planned)
           }
           //no job submitted this hour and the end job hasn't been clicked after the last just was submitted
           //I need to setup that logic.
           timestamp= moment().format("YYYY-MM-DD 08:59:00.000")

     //part=Parts.find({timestamp: {$lt: timestamp}}).fetch().pop()
     
  

            if(typeof Parts.findOne({hour:now, month:month, day:day,press:num}) ==='undefined' && moment().format("HH") >=now)
          {
              timeDays=Number(Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().day)
            timeHour=Number(Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().hour)  + (Number(timeDays)*24)
             nowDays=Number(moment().format("DD"))
             nowHours=Number(now) + (Number(nowDays)*24)
             
            multiplier=nowHours - timeHour
            multiplier = multiplier +1
           cycletimeH=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cycletimeH
          cycletimeP=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cycletimeP
          cycletimeQ=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cycletimeQ
          if (cycletimeH>0)
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
             if (typeof Hours.find({timestamp: {$lt: timestamp}},{press:num}).timestamp === 'undefined')
					{
                      planned=1000/Number(cycletime)
					}
          
              
             return parseInt(planned)*multiplier
           }
          
},

 plannedc2p: function (){
          //basically I need to multiply the earned hours by how many hours the job has gone for to get the planned 
          // so if the job started this hour then just return the EH
          //If the job started in a previous hour then count how many hours have passed?
          //so how do I count hours since job was submitted
          num= Machines.find().fetch().pop().cellnum;
          now="08"
          month=moment().format("MM")
          day=moment().format("DD")
         timestamp= moment().format("YYYY-MM-DD 07:59:00.000")

          if(typeof Parts.findOne({hour:now, month:month, day:day,press:num}) ==='object')
          {
          //I need if statements that determine what to set the cycletime equal time
            cycletimeH=Parts.find({hour:now, month:month, day:day,press:num}).fetch().pop().cycletimeH
            cycletimeP=Parts.find({hour:now, month:month, day:day,press:num}).fetch().pop().cycletimeP
            cycletimeQ=Parts.find({hour:now, month:month, day:day,press:num}).fetch().pop().cycletimeQ
            if (cycletimeH>0)
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
               
   
                      planned=1000/Number(cycletime)
          
              
             return parseInt(planned)
           }
           //no job submitted this hour and the end job hasn't been clicked after the last just was submitted
           //I need to setup that logic.
           

     //part=Parts.find({timestamp: {$lt: timestamp}}).fetch().pop()
     
  

            
           },
plannedc3: function(){
   num= Machines.find().fetch().pop().cellnum;
   now="09"
          month=moment().format("MM")
          day=moment().format("DD")
         timestamp= moment().format("YYYY-MM-DD 09:59:00.000")
          if(typeof Parts.findOne({hour:now, month:month, day:day,press:num}) ==='object')
          {
          //I need if statements that determine what to set the cycletime equal time
            cycletimeH=Parts.find({hour:now, month:month, day:day,press:num}).fetch().pop().cycletimeH
            cycletimeP=Parts.find({hour:now, month:month, day:day,press:num}).fetch().pop().cycletimeP
            cycletimeQ=Parts.find({hour:now, month:month, day:day,press:num}).fetch().pop().cycletimeQ
           if (cycletimeH>0)
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
              
                      planned=1000/Number(cycletime)
          
              
             return parseInt(planned)
           }
           //no job submitted this hour and the end job hasn't been clicked after the last just was submitted
           //I need to setup that logic.
           timestamp= moment().format("YYYY-MM-DD 09:59:00.000")

     //part=Parts.find({timestamp: {$lt: timestamp}}).fetch().pop()
     
  

            if(typeof Parts.findOne({hour:now, month:month, day:day,press:num}) ==='undefined' && moment().format("HH") >=now)
          {
             timeDays=Number(Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().day)
            timeHour=Number(Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().hour)  + (Number(timeDays)*24)
             nowDays=Number(moment().format("DD"))
             nowHours=Number(now) + (Number(nowDays)*24)
             
            multiplier=nowHours - timeHour
            multiplier = multiplier +1

           cycletimeH=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cycletimeH
          cycletimeP=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cycletimeP
          cycletimeQ=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cycletimeQ
          if (cycletimeH>0)
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
             if (typeof Hours.find({timestamp: {$lt: timestamp}},{press:num}).timestamp === 'undefined')
					{
                      planned=1000/Number(cycletime)
					}
          
              
             return parseInt(planned)*multiplier
           }
          
},
 plannedc3p: function (){
          //basically I need to multiply the earned hours by how many hours the job has gone for to get the planned 
          // so if the job started this hour then just return the EH
          //If the job started in a previous hour then count how many hours have passed?
          //so how do I count hours since job was submitted
          num= Machines.find().fetch().pop().cellnum;
          now="09"
          month=moment().format("MM")
          day=moment().format("DD")
         timestamp= moment().format("YYYY-MM-DD 07:59:00.000")

          if(typeof Parts.findOne({hour:now, month:month, day:day,press:num}) ==='object')
          {
          //I need if statements that determine what to set the cycletime equal time
            cycletimeH=Parts.find({hour:now, month:month, day:day,press:num}).fetch().pop().cycletimeH
            cycletimeP=Parts.find({hour:now, month:month, day:day,press:num}).fetch().pop().cycletimeP
            cycletimeQ=Parts.find({hour:now, month:month, day:day,press:num}).fetch().pop().cycletimeQ
            if (cycletimeH>0)
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
               
   
                      planned=1000/Number(cycletime)
          
              
             return parseInt(planned)
           }
           //no job submitted this hour and the end job hasn't been clicked after the last just was submitted
           //I need to setup that logic.
           

     //part=Parts.find({timestamp: {$lt: timestamp}}).fetch().pop()
     
  

            
           },
incomingcycles1: function () {
        //grab all cycles from today
      num= Machines.find().fetch().pop().cellnum;
    
      now="07"
    month=moment().format("MM")
    day=moment().format("DD")
      timestamp= moment().format("YYYY-MM-DD 07:59:00.000")
     count= Parts.find({hour: now, month:month, day:day,press:num}).count()
           
   //Basically I need code to be run if there was NOT a end job submitted this hour
if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'undefined')
{
//all this is activated whenever a job is submitted in this hour
 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count===1)
      {
    incomingcycles= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 08:00:00.000")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  else if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job

    incomingcycles= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
 


 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' && moment().format("HH") >=now)
{ 
  //multiply it by the cavitation of the the job less than the current hour
     incomingcycles=  Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 07:00:00.000"), $lt: moment().format("YYYY-MM-DD 08:00:00.000")}}).count() * Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cavitation;
  
    }
}
 if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'object')
 {
//run this code when there is an end job in this hour
 if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count===1)
      {
    incomingcycles= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  else if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job

    incomingcycles= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
 
//This find the last submitted part prior to this hour

 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'undefined'&& moment().format("HH") >=now && Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().timestamp >Hours.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().timestamp)
{
  //This needs to be setup to multiply the cycles by the last submitted Part so fetch().pop()
     incomingcycles= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 07:00:00.000"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cavitation;
  
    }
    }   
     return incomingcycles   
      },

     incomingcycles1p: function () {
        num= Machines.find().fetch().pop().cellnum;
     now="07"
    month=moment().format("MM")
    day=moment().format("DD")
      
     count= Parts.find({hour: now, month:month, day:day,press:num}).count()
      if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'undefined')
      {
      if (typeof Parts.findOne({hour:now, month: month, day: day,press:num})=== 'object'  && count ===2)
      {
              //I need the time stamp of the most recently submitted job
        //if there are 2 jobs submitted then this 2nd job will start at its time stamp and end at the end of the hour
       
        return Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop()).format("YYYY-MM-DD 07:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 08:00:00.000")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
         
      }
        else if (typeof Parts.findOne({hour: now, month:month, day:day})=== 'object'  && count >2)
      {

        //if there are three job submissions.  this should start from its time stamp and end and the most recent time stamp
        //at this point the second submission will be the second item in the collection or middle item
        return Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 07:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 3}).fetch().pop().timestamp).format("YYYY-MM-DD 07:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
       
      }
     

     }

     if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'object')
     {
     	//go until the job was submitted basically for all the if statements
		if (typeof Parts.findOne({hour:now, month: month, day: day,press:num})=== 'object'  && count ===2)
      {
               
        return Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop()).format("YYYY-MM-DD 07:mm:ss.SSS"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
         
       
      }
        else if (typeof Parts.findOne({hour: now, month:month, day:day})=== 'object'  && count >2)
      {

        //if there are three job submissions.  this should start from its time stamp and end and the most recent time stamp
        //at this point the second submission will be the second item in the collection or middle item
        return Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 07:mm:ss.SSS"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
       
      }
     
     }
      },
          
    
      incomingcycles2: function () {
        //grab all cycles from today
        num= Machines.find().fetch().pop().cellnum;
     now="08"
    month=moment().format("MM")
    day=moment().format("DD")
      timestamp= moment().format("YYYY-MM-DD 08:59:00.000")
     count= Parts.find({hour: now, month:month, day:day}).count()
     
 if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'undefined')
{
//all this is activated whenever a job is submitted in this hour
 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count===1)
      {
    incomingcycles= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 09:00:00.000")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  else if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job

    incomingcycles=  Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
 


 if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'undefined' &&  moment().format("HH") >=now)
{
  //This needs to be setup to multiply the cycles by the last submitted Part so fetch().pop()
     incomingcycles=  Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 08:00:00.000"), $lt: moment().format("YYYY-MM-DD 09:00:00.000")}}).count() * Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cavitation;
  
    }
    }
 if (typeof Hours.findOne({hour: now, month:month, day:day}) === 'object')
 {
//run this code when there is an end job in this hour
 if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count===1)
      {
    incomingcycles=  Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  else if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job

    incomingcycles=  Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
 


 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' && moment().format("HH") >=now && Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().timestamp >Hours.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().timestamp)
{
  //This needs to be setup to multiply the cycles by the last submitted Part so fetch().pop()
     incomingcycles=  Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 08:00:00.000"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD 08:mm:ss.SSS")}}).count() * Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cavitation;
  
    }
    }   
       return incomingcycles 
      },
      
     incomingcycles2p: function () {
        num= Machines.find().fetch().pop().cellnum;
     now="08"
    month=moment().format("MM")
    day=moment().format("DD")
      
     count= Parts.find({hour: now, month:month, day:day,press:num}).count()
      if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'undefined')
      {
      if (typeof Parts.findOne({hour:now, month: month, day: day,press:num})=== 'object'  && count ===2)
      {
        //Part = Parts.find({hour: '12'}).fetch().pop().timestamp
        //I need the time stamp of the most recently submitted job
        //if there are 2 jobs submitted then this 2nd job will start at its time stamp and end at the end of the hour
       
        return Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(part = Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop()).format("YYYY-MM-DD 08:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 09:00:00.000")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
         
       
      }
        else if (typeof Parts.findOne({hour: now, month:month, day:day})=== 'object'  && count >2)
      {

        //if there are three job submissions.  this should start from its time stamp and end and the most recent time stamp
        //at this point the second submission will be the second item in the collection or middle item
        return Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 08:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 3}).fetch().pop().timestamp).format("YYYY-MM-DD 08:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
       
      }
     

     }

     if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'object')
     {
     	//go until the job was submitted basically for all the if statements
		if (typeof Parts.findOne({hour:now, month: month, day: day,press:num})=== 'object'  && count ===2)
      {
               
        return Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop()).format("YYYY-MM-DD 08:mm:ss.SSS"),  $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
         
       
      }
        else if (typeof Parts.findOne({hour: now, month:month, day:day})=== 'object'  && count >2)
      {

        //if there are three job submissions.  this should start from its time stamp and end and the most recent time stamp
        //at this point the second submission will be the second item in the collection or middle item
        return Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 08:mm:ss.SSS"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
       
      }
     
     }
    
      },

    incomingcycles3: function () {
         //grab all cycles from today
       num= Machines.find().fetch().pop().cellnum;
     now="09";
    month=moment().format("MM")
    day=moment().format("DD")
      timestamp= moment().format("YYYY-MM-DD 08:59:00.000")
     count= Parts.find({hour: now, month:month, day:day}).count()
     if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'undefined')
{
//all this is activated whenever a job is submitted in this hour
 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count===1)
      {
    incomingcycles= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 10:00:00.000")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  else if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job

    incomingcycles= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
 


 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' && moment().format("HH") >=now)
{
  //This needs to be setup to multiply the cycles by the last submitted Part so fetch().pop()
     incomingcycles= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 09:00:00.000"), $lt: moment().format("YYYY-MM-DD 10:00:00.000")}}).count() * Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cavitation;
  
    }
    }
 if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'object')
 {
//run this code when there is an end job in this hour
 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count===1)
      {
    incomingcycles= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  else if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job

    incomingcycles= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
 

//This code won't work when there is a newer submitted job and there was not a job submitted this hour.
 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' && moment().format("HH") >=now&& Parts.find({timestamp: {$lt: timestamp}}).fetch().pop().timestamp >Hours.find({timestamp: {$lt: timestamp}}).fetch().pop().timestamp)
{
  //This needs to be setup to multiply the cycles by the last submitted Part so fetch().pop()
    incomingcycles= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 09:00:00.000"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD 09:mm:ss.SSS")}}).count() * Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cavitation;
  
    }
    }   
      return incomingcycles  
      },
      
      incomingcycles3p: function () {
          num= Machines.find().fetch().pop().cellnum;
     now="09"
    month=moment().format("MM")
    day=moment().format("DD")
      
     count= Parts.find({hour: now, month:month, day:day,press:num}).count()
      if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'undefined')
      {
      if (typeof Parts.findOne({hour:now, month: month, day: day,press:num})=== 'object'  && count ===2)
      {
        //Part = Parts.find({hour: '12'}).fetch().pop().timestamp
        //I need the time stamp of the most recently submitted job
        //if there are 2 jobs submitted then this 2nd job will start at its time stamp and end at the end of the hour
       
        return Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(part = Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop()).format("YYYY-MM-DD 09:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 10:00:00.000")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
         
       
      }
        else if (typeof Parts.findOne({hour: now, month:month, day:day})=== 'object'  && count >2)
      {

        //if there are three job submissions.  this should start from its time stamp and end and the most recent time stamp
        //at this point the second submission will be the second item in the collection or middle item
        return Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 09:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 3}).fetch().pop().timestamp).format("YYYY-MM-DD 09:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
       
      }
     

     }

     if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'object')
     {
     	//go until the job was submitted basically for all the if statements
		if (typeof Parts.findOne({hour:now, month: month, day: day,press:num})=== 'object'  && count ===2)
      {
               
        return Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop()).format("YYYY-MM-DD 09:mm:ss.SSS"),$lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
         
       
      }
        else if (typeof Parts.findOne({hour: now, month:month, day:day})=== 'object'  && count >2)
      {

        //if there are three job submissions.  this should start from its time stamp and end and the most recent time stamp
        //at this point the second submission will be the second item in the collection or middle item
        return Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 09:mm:ss.SSS"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
       
      }
     
     }
     
       },

        incomingc1:function(){

now="07"
//Hours.find({hour: now, month:month, day:day}).fetch().pop().timestamp //this will find the time stamp of when the latest job was ended

//basically show all the count since the job began this hour
num= Machines.find().fetch().pop().cellnum;
    
      now="07"
    month=moment().format("MM")
    day=moment().format("DD")
    timestamp= moment().format("YYYY-MM-DD 07:59:00.000")  
     count= Parts.find({hour: now, month:month, day:day,press:num}).count()
  //If ther was a job submitted this hour then
  if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'undefined')
 {
//all this is activated whenever a job is submitted in this hour
  if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count===1)
       {
    total= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 08:00:00.000")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
   }
   else if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count>=2)
       {
         //the start time is same.  The end time will be the most recent job

    total= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
   }
 

//This bit of code is different
//so there is no job this hour
  if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' && moment().format("mm") >=now)
 {
   //This needs to be setup to multiply the cycles by the last submitted Part so fetch().pop()
     total= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 08:00:00.000")}}).count() * Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cavitation;
  
     }
     }
//This code is run if there is an end job sent
if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'object')
 {
//run this code when there is a job started in this hour
 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count===1)
      {
    total= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  else if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job

    total= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
 

//if there is not a job submitted this hour
 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' && moment().format("mm")>now)
{
  //This needs to be setup to multiply the cycles by the last submitted Part so fetch().pop()
    total= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop()).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD 07:mm:ss.SSS")}}).count() * Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cavitation;
  
    }
    }  
  
return total
},
 incomingc2:function(){


num= Machines.find().fetch().pop().cellnum;
    
      now="08"
    month=moment().format("MM")
    day=moment().format("DD")
    timestamp= moment().format("YYYY-MM-DD 08:59:00.000")  
     count= Parts.find({hour: now, month:month, day:day,press:num}).count()
  //If ther was a job submitted this hour then
  if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'undefined')
 {
//all this is activated whenever a job is submitted in this hour
  if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count===1)
       {
    total= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 09:00:00.000")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
   }
   else if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count>=2)
       {
         //the start time is same.  The end time will be the most recent job

    total= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
   }
 

//This bit of code is different
//so there is no job this hour
  if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' && moment().format("mm") >=now)
 {
   //This needs to be setup to multiply the cycles by the last submitted Part so fetch().pop()
     total= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 09:00:00.000")}}).count() * Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cavitation;
  
     }
     }
//This code is run if there is an end job sent
if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'object')
 {
//run this code when there is a job started in this hour
 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count===1)
      {
    total= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  else if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job

    total= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
 

//if there is not a job submitted this hour
 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' && moment().format("mm")>now)
{
  //This needs to be setup to multiply the cycles by the last submitted Part so fetch().pop()
    total= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop()).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD 08:mm:ss.SSS")}}).count() * Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cavitation;
  
    }
    }  
  
return total

},
 incomingc3:function(){

now="09"
//Hours.find({hour: now, month:month, day:day}).fetch().pop().timestamp //this will find the time stamp of when the latest job was ended

//basically show all the count since the job began this hour
num= Machines.find().fetch().pop().cellnum;
    
      now="09"
    month=moment().format("MM")
    day=moment().format("DD")
    timestamp= moment().format("YYYY-MM-DD 09:59:00.000")  
     count= Parts.find({hour: now, month:month, day:day,press:num}).count()
  //If ther was a job submitted this hour then
  if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'undefined')
 {
//all this is activated whenever a job is submitted in this hour
  if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count===1)
       {
    total= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 10:00:00.000")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
   }
   else if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count>=2)
       {
         //the start time is same.  The end time will be the most recent job

    total= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
   }
 

//This bit of code is different
//so there is no job this hour
  if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' && moment().format("mm") >=now)
 {
   //This needs to be setup to multiply the cycles by the last submitted Part so fetch().pop()
     total= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 10:00:00.000")}}).count() * Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cavitation;
  
     }
     }
//This code is run if there is an end job sent
if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'object')
 {
//run this code when there is a job started in this hour
 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count===1)
      {
    total= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  else if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job

    total= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
 

//if there is not a job submitted this hour
 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' && moment().format("mm")>now)
{
  //This needs to be setup to multiply the cycles by the last submitted Part so fetch().pop()
    total= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop()).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD 09:mm:ss.SSS")}}).count() * Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cavitation;
  
    }
    }  
  
return total


  
},

earnedhours1: function() {
        //I will need to put planned in here and incoming cycles
        num= Machines.find().fetch().pop().cellnum;
 
       now="07"
          month=moment().format("MM")
          day=moment().format("DD")
         timestamp= moment().format("YYYY-MM-DD 07:59:00.000")
          if(typeof Parts.findOne({hour:now, month:month, day:day,press:num}) ==='object')
          {
          //I need if statements that determine what to set the cycletime equal time
            cycletimeH=Parts.find({hour:now, month:month, day:day,press:num}).fetch().pop().cycletimeH
            cycletimeP=Parts.find({hour:now, month:month, day:day,press:num}).fetch().pop().cycletimeP
            cycletimeQ=Parts.find({hour:now, month:month, day:day,press:num}).fetch().pop().cycletimeQ
            if (cycletimeH>0)
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
                
   
                      planned=parseInt(1000/Number(cycletime))
          
              
             
           }
           //no job submitted this hour and the end job hasn't been clicked after the last just was submitted
           //I need to setup that logic.
           

     //part=Parts.find({timestamp: {$lt: timestamp}}).fetch().pop()
     
  

            if(typeof Parts.findOne({hour:now, month:month, day:day,press:num}) ==='undefined' )
          {
            //I need to retrieve the cycle time for the job submitted prior to this hour
            //so find  $lte than the entire time stamp!
          cycletimeH=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cycletimeH
          cycletimeP=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cycletimeP
          cycletimeQ=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cycletimeQ
           if (cycletimeH>0)
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
                
   
                      planned=parseInt(1000/Number(cycletime))
          
              
             
           }
          //incoming cycles

 
           
     //grab all cycles from today
     
     count= Parts.find({hour: now, month:month, day:day,press:num}).count()
           
   //Basically I need code to be run if there was NOT a end job submitted this hour
if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'undefined')
{
//all this is activated whenever a job is submitted in this hour
 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count===1)
      {
   incomingcycles= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 08:00:00.000")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  else if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job

    incomingcycles= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
 


 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' && moment().format("mm") >=now)
{
  //multiply it by the cavitation of the the job less than the current hour
     incomingcycles= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 07:00:00.000"), $lt: moment().format("YYYY-MM-DD 08:00:00.000")}}).count() * Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cavitation;
  
    }
    }
 if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'object')
 {
//run this code when there is an end job in this hour
 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count===1)
      {
    incomingcycles= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  else if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job

    incomingcycles= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
 
//This find the last submitted part prior to this hour

 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' && moment().format("HH")>now &&Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().timestamp >Hours.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().timestamp)
{
  //This needs to be setup to multiply the cycles by the last submitted Part so fetch().pop()
     incomingcycles= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 07:00:00.000"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD 07:mm:ss.SSS")}}).count() * Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cavitation;
  
    }
    } 

           earnedhours = Number(incomingcycles)/planned
              
            return earnedhours
                
            },
earnedhours1p: function() {
     
         
            },


  earnedhours2: function(){
        num= Machines.find().fetch().pop().cellnum;

        now="08"
          month=moment().format("MM")
          day=moment().format("DD")
         timestamp= moment().format("YYYY-MM-DD 08:59:00.000")
          if(typeof Parts.findOne({hour:now, month:month, day:day,press:num}) ==='object')
          {
          //I need if statements that determine what to set the cycletime equal time
            cycletimeH=Parts.find({hour:now, month:month, day:day,press:num}).fetch().pop().cycletimeH
            cycletimeP=Parts.find({hour:now, month:month, day:day,press:num}).fetch().pop().cycletimeP
            cycletimeQ=Parts.find({hour:now, month:month, day:day,press:num}).fetch().pop().cycletimeQ
            if (cycletimeH>0)
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
                
   
                      planned=parseInt(1000/Number(cycletime))
          
              
             
           }
           //no job submitted this hour and the end job hasn't been clicked after the last just was submitted
           //I need to setup that logic.
           

     //part=Parts.find({timestamp: {$lt: timestamp}}).fetch().pop()
     
  

            if(typeof Parts.findOne({hour:now, month:month, day:day,press:num}) ==='undefined' )
          {
            //I need to retrieve the cycle time for the job submitted prior to this hour
            //so find  $lte than the entire time stamp!
          cycletimeH=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cycletimeH
          cycletimeP=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cycletimeP
          cycletimeQ=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cycletimeQ
           if (cycletimeH>0)
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
                
   
                      planned=parseInt(1000/Number(cycletime))
          
              
             
           }
          //incoming cycles

 
           
     //grab all cycles from today
     
     count= Parts.find({hour: now, month:month, day:day,press:num}).count()
           
   //Basically I need code to be run if there was NOT a end job submitted this hour
if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'undefined')
{
//all this is activated whenever a job is submitted in this hour
 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count===1)
      {
   incomingcycles= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 09:00:00.000")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  else if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job

    incomingcycles= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
 


 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' && moment().format("mm") >=now)
{
  //multiply it by the cavitation of the the job less than the current hour
     incomingcycles= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 08:00:00.000"), $lt: moment().format("YYYY-MM-DD 09:00:00.000")}}).count() * Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cavitation;
  
    }
    }
 if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'object')
 {
//run this code when there is an end job in this hour
 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count===1)
      {
    incomingcycles= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  else if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job

    incomingcycles= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
 
//This find the last submitted part prior to this hour

 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' && moment().format("HH")>now &&Parts.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().timestamp >Hours.find({timestamp: {$lt: timestamp},press:num}).fetch().pop().timestamp)
{
  //This needs to be setup to multiply the cycles by the last submitted Part so fetch().pop()
     incomingcycles= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 08:00:00.000"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD 08:mm:ss.SSS")}}).count() * Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cavitation;
  
    }
    } 

           earnedhours = Number(incomingcycles)/planned
              
            return earnedhours
},      
              
     
earnedhours2p: function() {
     
          
            },
earnedhours3: function() {
         num= Machines.find().fetch().pop().cellnum;
         now="09"
          month=moment().format("MM")
          day=moment().format("DD")
         timestamp= moment().format("YYYY-MM-DD 09:59:00.000")
          if(typeof Parts.findOne({hour:now, month:month, day:day,press:num}) ==='object')
          {
          //I need if statements that determine what to set the cycletime equal time
            cycletimeH=Parts.find({hour:now, month:month, day:day,press:num}).fetch().pop().cycletimeH
            cycletimeP=Parts.find({hour:now, month:month, day:day,press:num}).fetch().pop().cycletimeP
            cycletimeQ=Parts.find({hour:now, month:month, day:day,press:num}).fetch().pop().cycletimeQ
            if (cycletimeH>0)
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
                
   
                      planned=parseInt(1000/Number(cycletime))
          
              
             
           }
           //no job submitted this hour and the end job hasn't been clicked after the last just was submitted
           //I need to setup that logic.
           

     //part=Parts.find({timestamp: {$lt: timestamp}}).fetch().pop()
     
  

            if(typeof Parts.findOne({hour:now, month:month, day:day,press:num}) ==='undefined' )
          {
            //I need to retrieve the cycle time for the job submitted prior to this hour
            //so find  $lte than the entire time stamp!
          cycletimeH=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cycletimeH
          cycletimeP=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cycletimeP
          cycletimeQ=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cycletimeQ
           if (cycletimeH>0)
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
                
   
                      planned=parseInt(1000/Number(cycletime))
          
              
             
           }
        

     count= Parts.find({hour: now, month:month, day:day,press:num}).count()
  //If ther was a job submitted this hour then
  if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'undefined')
 {
//all this is activated whenever a job is submitted in this hour
  if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count===1)
       {
    incomingcycles= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 10:00:00.000")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
   }
   else if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count>=2)
       {
         //the start time is same.  The end time will be the most recent job

    incomingcycles= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
   }
 

//This bit of code is different
//so there is no job this hour
  if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' && moment().format("mm") >=now)
 {
   //This needs to be setup to multiply the cycles by the last submitted Part so fetch().pop()
     incomingcycles= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 10:00:00.000")}}).count() * Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cavitation;
  
     }
     }
//This code is run if there is an end job sent
if (typeof Hours.findOne({hour: now, month:month, day:day,press:num}) === 'object')
 {
//run this code when there is a job started in this hour
 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count===1)
      {
    incomingcycles= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  else if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job

    incomingcycles= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now,press:num}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
 

//if there is not a job submitted this hour
 if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' && moment().format("mm")>now)
{
  //This needs to be setup to multiply the cycles by the last submitted Part so fetch().pop()
    incomingcycles= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop()).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Hours.find({hour: now, month:month, day:day,press:num}).fetch().pop().timestamp).format("YYYY-MM-DD 09:mm:ss.SSS")}}).count() * Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop().cavitation;
  
    }
    }  

           earnedhours = Number(incomingcycles)/planned
              
            return earnedhours
          
           
            },
earnedhours3p: function() {
       planned=planned3p()
          earnedhours = Number(incomingcycles/planned)
         
            },

            changeStatus1: function() {
      
            
        if (earnedhours >=1)
       {
         return "Green"
      }
      else if (earnedhours <1)
       {

        return "Yellow"
       }



     },
//     changeStatus1p: function() {
     
       
//        if (earnedhours >=1 && count>1)
//       { 
         
//     return "Green"
    
//       }

//       else if (earnedhours <1&& count>1)
//   {
 
//     return "Yellow"
   
//  }
//       // }
//     },
    

//     changeStatus2: function() {
     
            
//        if (earnedhours >=1)
//       {
//         return "Green"
//       }

//       else if (earnedhours <1)
//       {

//         return "Yellow"
//       }




//     },
// changeStatus2p: function() {
 
     
       
//        if (earnedhours >=1 && count>1)
//       { 
         
//     return "Green"
    
//       }

//       else if (earnedhours2p() <1&& count>1)
//   {
 
//     return "Yellow"
   
//  }
//       // }
//     },
// changeStatus3: function() {
        
   
            
//        if (earnedhours >=1)
//       {
//         return "Green"
//       }

//       else if (earnedhours <1)
//       {

//         return "Yellow"
//       }




//     },
// changeStatus3p: function() {
   
       
//        if (earnedhours3>=1)
//       { 
         
//     return "Green"
    
//       }

//       else if (earnedhours3 <1)
//   {
 
//     return "Yellow"
   
//  }
//       // }
//     },

    part1: function ()
   {
   num= Machines.find().fetch().pop().cellnum;
     now = "07"
    month=moment().format("MM")
    day=moment().format("DD")
    timestamp= moment().format("YYYY-MM-DD 07:59:00.000")
 //find the current day
 
var part =Parts.findOne({hour: now, month:month, day:day,press:num})


 if(typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object')
 {
    return part.partnumber
 }
   //set this up to only list if there was not an end job submitted
   //after the job submitted before this hour 

if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' && moment().format("HH")>now)
{
  //so find  $lte than the entire time stamp!
  //basically find a Part with a timestamp $lt the  current month day and now

  if (typeof Hours.find({timestamp: {$lt: timestamp}},{press:num}).timestamp === 'undefined')
					{
                      part=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop()
					}
    
     
  return part.partnumber

   }
     },
   part1p: function ()
   {
   num= Machines.find().fetch().pop().cellnum;
     now= "07"
    month=moment().format("MM")
    day=moment().format("DD")

count= Parts.find({hour: now, month:month, day:day,press:num}).count()
 var part =Parts.find({hour: now, month:month, day:day,press:num}).fetch().pop()

if(typeof Parts.find({hour: now, month:month, day:day,press:num}).fetch().pop() === 'object' && count>=2) // this is the last entered item
 {
   part = Parts.find({hour: now, month:month, day:day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop()
    return part.partnumber
       
  }
},

    part2: function ()
   {
  num= Machines.find().fetch().pop().cellnum;
     now = "08"
    month=moment().format("MM")
    day=moment().format("DD")
    timestamp= moment().format("YYYY-MM-DD 08:59:00.000")
var part =Parts.findOne({hour: now, month:month, day:day})


 if(typeof Parts.findOne({hour: now, month:month, day:day}) === 'object')
 {
    return part.partnumber
 }
if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'undefined' && moment().format("HH")>now)
{
  //fetch the latest part from the job that happened before this month day and hour
  //CycleTimeStamp: {$gte: startTime}
  if (typeof Hours.find({timestamp: {$lt: timestamp}},{press:num}).timestamp === 'undefined')
					{
                      part=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop()
					}
    
     
     
  return part.partnumber

   }
   },
   part2p: function ()
   {
  num= Machines.find().fetch().pop().cellnum;
     now= "08"
     month=moment().format("MM")
    day=moment().format("DD")
    
      count= Parts.find({hour: now, month:month, day:day,press:num}).count()


 var part =Parts.find({hour: now, month:month, day:day,press:num}).fetch().pop()

// Parts.find({hour: now}).fetch().pop().timestamp.toString()).format("mm")

if(typeof Parts.find({hour: now, month:month, day:day,press:num}).fetch().pop() === 'object' && count>=2) // this is the last entered item
 {
   part = Parts.find({hour: now, month:month, day:day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop()
    return part.partnumber
       
  }

},
   
   
  part3: function ()
   {
      num= Machines.find().fetch().pop().cellnum;
     now = "09"
    month=moment().format("MM")
    day=moment().format("DD")
    timestamp= moment().format("YYYY-MM-DD 09:59:00.000")
var part =Parts.findOne({hour: now, month:month, day:day})


 if(typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'object')
 {
    return part.partnumber
 }
if (typeof Parts.findOne({hour: now, month:month, day:day,press:num}) === 'undefined' && moment().format("HH")>now)
{
  if (typeof Hours.find({timestamp: {$lt: timestamp}},{press:num}).timestamp === 'undefined')
					{
                      part=Parts.find({timestamp: {$lt: timestamp}},{press:num}).fetch().pop()
					}
    
     
  return part.partnumber

   }

   },
   part3p: function ()
   {
 num= Machines.find().fetch().pop().cellnum;
     now= "09"
     month=moment().format("MM")
    day=moment().format("DD")
    
      count= Parts.find({hour: now, month:month, day:day,press:num}).count()
 var part =Parts.find({hour: now, month:month, day:day,press:num}).fetch().pop()

// Parts.find({hour: now}).fetch().pop().timestamp.toString()).format("mm")

if(typeof Parts.find({hour: now, month:month, day:day,press:num}).fetch().pop() === 'object' && count>=2) // this is the last entered item
 {
   part = Parts.find({hour: now, month:month, day:day,press:num}, {sort: {minute: 1}, limit: 2}).fetch().pop()
    return part.partnumber
       
  }


   },

   hour1second: function()
 {//if the part count for this hour is <=2 then return true
   num= Machines.find().fetch().pop().cellnum;
   now="07"
    month=moment().format("MM")
    day=moment().format("DD")
  if (Parts.find({hour:now, month:month, day:day,press:num}).count() >=2)
  {
    return true
  }

 },
 hour2second: function()
 {num= Machines.find().fetch().pop().cellnum;
now="08"
    month=moment().format("MM")
    day=moment().format("DD")
  if (Parts.find({hour:now, month:month, day:day,press:num}).count() >=2)
  {
    return true
  }
 } , 
 hour3second: function()
 {num= Machines.find().fetch().pop().cellnum;
now="09"
    month=moment().format("MM")
    day=moment().format("DD")
  if (Parts.find({hour:now, month:month, day:day,press:num}).count() >=2)
  {
    return true
  }
 }  
 	})