
const connectDb = require('./../config/database');
const db = require("../models");
const moment = require('moment');


// connected to DB
connectDb();


// create user
// const db.User



const routinesSeed = [
  
  {
      type:"day",
      name:"Make beds",
      details:"make beds after get up",
     
  },
  {
    type:"day",
    name:"Check floors",
    details:"Sweep or vaccum only if needed",
   
},
{
    type:"day",
    name:"Wipe counters",
    details:"can do it before work or after dinner",
    
},
{
    type:"day",
    name:"Declutter",
    details:"declutter whenever have time",
    
},
{
    type:"day",
    name:"Laundry",
    details:"Do the laundery every day, can set time to start at 5am and put in the dryer before leave home",
   
},

{
    type:"week",
    name:"Bathroom cleaning day",
    details:"use the cleaning tool to clean the bathroom!",
    dayofthistask:"Monday",
    startDate: moment().day("Monday")
    
},
{
    type:"week",
    name:"Dusting day",
    details:"general dusting",
    dayofthistask:"Tuesday",
    startDate: moment().day("Tuesday")
},
{
    type:"week",
    name:"Vacuuming day",
    details:"vacuum one room or the whole house",
    dayofthistask:"Wednesday",
    startDate: moment().day("Wednesday")
},
{
    type:"week",
    name:"Floor washing day",
    details:"Wipe the floor today",
    dayofthistask:"Thursday",
    startDate: moment().day("Thursday")
},
{
    type:"week",
    name:"Catch-up day",
    details:"do anything left during the week!",
    startDate: moment().day("Friday")
    
},
{
    type:"week",
    name:"Sheets and towel day",
    details:"wash all the sheets and towels",
    startDate: moment().day("Saturday")
},
{
    type:"week",
    name:"Take a break",
    details:"enjoy the break and just do the daily routines!",
    startDate: moment().day("Sunday")
},
{
    type:"month",
    name:"clean the window",
    details:"clean the window today!",
    startDate: moment().date(1)
},
{
    type:"month",
    frequency:3,
    name:"clean the car",
    details:"enjoy the break and just do the daily routines!",
    startDate: moment().date(1)
},
]


db.Routines.remove({})
  .then(() => db.Routines.insertMany(routinesSeed))
  .then(() => {
    console.log(" dara seed records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

