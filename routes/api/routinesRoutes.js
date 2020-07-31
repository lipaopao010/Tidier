const express = require("express");
const moment = require("moment");
const router = express.Router();
const Routines = require("./../../models/routines");




// 1. LOAD ALL THE DAILY ROUTINES

// get api/routines/day

router.get("/routines/day", (req, res) => {
  Routines.find({ user_id: req.user._id, type: "day" }, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      console.log("get user daily routines");
      console.log(req.user);
      res.json(data);
    }
  });
});

// 2. ADD DAILY ROUTINES

router.post("/routines/day", (req, res) => {
  // validation
  Routines.create({
    type: "day",
    name: req.body.name,
    details: req.body.details,
    user_id: req.user._id,
  }).then((created) => {
    // to keep data structure consistent
    console.log({ created })
    console.log("daily routine is added above")

    res.json(created)
    
  });
});


// 3. UPDATE DAILY ROUTINES--?

router.patch("/routines/:id", (req, res) => {
  Routines.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    { new: true, runValidators: true }
  ).then((updated) => {
    console.log("updated in router")
    res.json({
      data: updated,
    });
  });
});

// 4. DELETE DAILY ROUTINES

router.delete("/routines/:id", (req, res) => {
  Routines.findByIdAndDelete(req.params.id).then((deleted) => {
    res.json({
      data: true,
    });
  });
});


// 5. LOAD ALL THE WEEKLY ROUTINES--??
// need to load each dayof week routines depends on Monday to Sunday

router.get("/routines/week", (req, res) => {
  let query = { user_id: req.user._id, type: "week" };
  if (req.query.day) {
    query.dayofWeek = req.query.day;
  }
  console.log("get week routines")
  Routines.find(query, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.json(data);

    }
  });
});

// 6. ADD WEEKLY ROUTINES--user will select day of week for this routine

router.post("/routines/week", (req, res) => {
  
  Routines.create({
    type: "week",
    name: req.body.name,
    details: req.body.details,
    dayofWeek: req.body.dayofWeek,
    user_id: req.user._id,
  }).then((created) => {
    // to keep data structure consistent
    console.log({ created })
    console.log("week routine is added above")

    res.json(created);
  });
});
// 7. UPDATE WEEKLY ROUTINES--?
// 8. DELETE WEEKLY ROUTINES--SAME AS 4

// 9. LOAD ALL THE OTHER ROUTINES

// 10. ADD OTHER ROUTINES
// 11. UPDATE OTHER ROUTINES
// 12. DELETE OTHER ROUTINES--same as 4


module.exports = router;
