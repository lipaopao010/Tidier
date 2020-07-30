const express = require("express");
const moment = require("moment");
const router = express.Router();
const Routines = require("./../../models/routines");


//FUNCTIONS FOR TASK PAGE

// DONE BUTTON

// TODAY'S TASKS:
// 1. LOAD ALL THE DAILY TASKS "UNDONE"--"UNDONE"

router.get("/tasks/day", (req, res) => {
  Routines.find({ user_id: req.user._id, type: "day" }, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      console.log("all day task undone above");
      res.json(data);
    }
  });
});

// 2. LOAD ALL THE WEEKLY TASKS "UNDONE"--"UNDONE" & DAY OF THIS WEEK

router.get("/routines/week", (req, res) => {
  let query = { user_id: req.user._id, type: "week" };
  if (req.query.day) {
    query.dayofWeek = req.query.day.toLowerCase();
  }

  Routines.find(query, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.json(data);
    }
  });
});
// 3. LOAD ALL OTHER ROUTINES "UNDONE" --"UNDONE" & OF CURRENT DAY

// TASKS FOR LATER:
// 1. ALL WEEKLY TASKS "LATER"
// load all routines with"later"
// 2 . ALL OTHER TASKS "LATER"

//5. mark the completed routines-WHEN THE USER CLICK THE "DONE" BUTTON

router.patch("/tasks/:id/done", (req, res) => {
    Routines.findOneAndUpdate(
      req.params.id,
      {
        $set: {
          lastCompletedAt: moment().format(),
        },
      },
      { new: true, runValidators: true }
    ).then((updated) => {
      res.json({
        data: updated,
      });
    });
  });
