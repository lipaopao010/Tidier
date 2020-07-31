const connectDb = require("./../config/database");
const db = require("../models");
const moment = require("moment");
const Routines = require("../models/routines");
const mongoose = require('mongoose');

// connected to DB
connectDb();

initialData = [
  {
    type: "day",
    name: "Make beds",
    details: "make beds after get up",
    user_id: mongoose.Types.ObjectId("5f1faa93dc5c13d0dfdd4311")
  },
  {
    type: "day",
    name: "Check floors",
    details: "Sweep or vaccum only if needed",
    user_id: mongoose.Types.ObjectId("5f1faa93dc5c13d0dfdd4311")
  },
  {
    type: "day",
    name: "Wipe counters",
    details: "can do it before work or after dinner",
    user_id: mongoose.Types.ObjectId("5f1faa93dc5c13d0dfdd4311")
  },
  {
    type: "day",
    name: "Declutter",
    details: "declutter whenever have time",
    user_id: mongoose.Types.ObjectId("5f1faa93dc5c13d0dfdd4311")
  },
  {
    type: "day",
    name: "Laundry",
    details:
      "Do the laundery every day, can set time to start at 5am and put in the dryer before leave home",
      user_id: mongoose.Types.ObjectId("5f1faa93dc5c13d0dfdd4311")
  },
  

  {
    type: "week",
    name: "Bathroom cleaning day",
    details: "use the cleaning tool to clean the bathroom!",
    dayofWeek: "Monday",
    startDate: moment().day("Monday"),
    user_id: mongoose.Types.ObjectId("5f1faa93dc5c13d0dfdd4311")
  },
  {
    type: "week",
    name: "Dusting day",
    details: "general dusting",
    dayofWeek: "Tuesday",
    startDate: moment().day("Tuesday"),
    user_id: mongoose.Types.ObjectId("5f1faa93dc5c13d0dfdd4311")
  },
  {
    type: "week",
    name: "Vacuuming day",
    details: "vacuum one room or the whole house",
    dayofWeek: "Wednesday",
    startDate: moment().day("Wednesday"),
    user_id: mongoose.Types.ObjectId("5f1faa93dc5c13d0dfdd4311")
  },
  {
    type: "week",
    name: "Floor washing day",
    details: "Wipe the floor today",
    dayofWeek: "Thursday",
    startDate: moment().day("Thursday"),
    user_id: mongoose.Types.ObjectId("5f1faa93dc5c13d0dfdd4311")
  },
  {
    type: "week",
    name: "Catch-up day",
    details: "do anything left during the week!",
    dayofWeek: "Friday",
    startDate: moment().day("Friday"),
    user_id: mongoose.Types.ObjectId("5f1faa93dc5c13d0dfdd4311")
  },
  {
    type: "week",
    name: "Sheets and towel day",
    details: "wash all the sheets and towels",
    dayofWeek: "Saturday",
    startDate: moment().day("Saturday"),
    user_id: mongoose.Types.ObjectId("5f1faa93dc5c13d0dfdd4311")
  },
  {
    type: "week",
    name: "Take a break",
    details: "enjoy the break and just do the daily routines!",
    dayofWeek: "Sunday",
    startDate: moment().day("Sunday"),
    user_id: mongoose.Types.ObjectId("5f1faa93dc5c13d0dfdd4311")
  },
  {
    type: "month",
    name: "clean the window",
    details: "clean the window today!",
    startDate: moment().date(1),
    user_id: mongoose.Types.ObjectId("5f1faa93dc5c13d0dfdd4311")
  },
  {
    type: "month",
    frequency: 3,
    name: "clean the car",
    details: "enjoy the break and just do the daily routines!",
    startDate: moment().date(1),
    user_id: mongoose.Types.ObjectId("5f1faa93dc5c13d0dfdd4311")
  },
  
];


function  addDefaultRoutine(user_id){
  const userRoutines= initialData.map(eachRoutine=>({...eachRoutine, user_id}))
  db.Routines.insertMany(userRoutines)
  .then(() => {
    console.log(" inital routines inserted!");
  })
  .catch((err) => {
    console.error(err);
 
  })
}
    


module.exports = addDefaultRoutine;