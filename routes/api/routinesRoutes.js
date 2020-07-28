const express = require("express");
const moment = require("moment");
const router = express.Router();
const Routines = require("./../../models/routines");

//1. load all the daily routines for the certain user

//find all the routines by the user id

//get user id ?

// get api/routines/daily

router.get("/routines/day", (req, res) => {
  Routines.find({ user_id: req.user._id, type: "day" }, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      console.log("here")
      res.json(data);
    }
  });
});

// get api/routines/weekly

router.get("/routines/week", (req, res) => {

  let query = { user_id: req.user._id, type: "week" }
  if(req.query.day){
    query.dayofWeek = req.query.day.toLowerCase()
  }

    Routines.find(query, (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.json(data);
      }
    });
  });

  



// 2. delete routine for that user, /api/routines/:id

router.delete("/routines/:id", (req, res) => {
  Routines.findByIdAndDelete(req.params.id).then((deleted) => {
    res.json({
      data: true,
    });
  });
});



// 3. add new routine for that user, will add the user id in that routine

router.post("/routines/day", (req, res) => {
  // validation
  Routines.create({
    type:"day",
    name: req.body.name,
    details:req.body.details,
    user_id: req.user._id,
    
  }).then( (created) => {
    

    // to keep data structure consistent
    console.log({ created });

    res.json({
      data: created,
    });
  });
});





// 4. update the current routine

router.patch("/routines/:id", (req, res) => {
  Routines.findByIdAndUpdate(
    req.params.id,
    {
      $push: req.body,
    },
    { new: true, runValidators: true }
  ).then((updated) => {
    res.json({
      data: updated,
    });
  });
});



//5. mark the completed routines

router.patch("/routines/:id/done", (req, res) => {
  Routines.findOneAndUpdate(
    req.params.id,
    {
      $push: {
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






// router.get("/posts/:id", (req, res) => {
//     Post.findOne({
//         _id: req.params.id
//     })
//     .populate('user')
//     .then((result) => {
//         result.user =
//         res.json({
//             data: result,
//         });
//     });
// });

//const { Routines } = require ("./../../controllers");

//get api/routines

//router.get("/", book.list);

// //post api/books

// router.post("/", book.add);

// //delete api/book/id

// router.delete("/:_id",book.delete);

// module.exports = router;

module.exports = router;
