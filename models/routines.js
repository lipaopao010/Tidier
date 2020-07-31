const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const moment = require("moment");

const routinesSchema = new Schema(
  {
    type: {
      type: String,
      enum: ["day", "week", "month", "year"],
      required: true,
    },
    frequency: {
      type: Number,
      min: 1,
      default: 1,
      required: true,
    },

    name: {
      type: String,
      required: true,
    },

    details: {
      type: String,
      default: "",
    },

    lastCompletedAt: {
      type: Date,
    },

    startDate: {
      type: Date,
      default: Date.now,
      required: true,
    },
    dayofWeek: {
      type: String,
      enum: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
    },

    //user
    user_id: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true, // to include virtual properties in json response
    },
  }
);

routinesSchema.virtual("status").get(function () {
  // * week starts on monday - sunday
  // * catch up day -- Friday
  // 1. task due on wed, today is mon, task is undone
  // 2. task due on monday, today is monday , task is undone
  // 2. task due on tuesday, today is monday , task is done
  // 3. task due monday, today is wed, task is later

  if (!this.lastCompletedAt) {
    return "undone";
  }

  let boundary = moment().startOf(this.type).toString();
  console.log(boundary);
  let todayNumber = moment().day();

  if (todayNumber === 0) {
    todayNumber = 7;
  }

  let weekdays = moment.weekdays();

  weekdays.splice(0, 1);
  weekdays.push("Sunday");

  // weekly task
  const dueDay = weekdays.indexOf(this.dayofWeek) + 1;
  let isDued = todayNumber - dueDay > 0; // if this is positive num, return later

  if (isDued && this.type === "week") {
    return "later";
  }

  if (moment(this.lastCompletedAt) > boundary) {
    return "done";
  } else {
    return "undone";
  }

  // undone
  // done
  // later
});

// this is for the "done" button
// for the daily and weekly tasks// lastCompledAt will be updated once clicked " DONE " button.
// check if last completed is after boundary, if yes, that means task has completed

routinesSchema.virtual("isCompleted").get(function () {
  let boundary = moment().startOf("day").toDate();
  return moment(this.lastCompletedAt) > boundary
});

const Routines = mongoose.model("Routines", routinesSchema);

module.exports = Routines;
