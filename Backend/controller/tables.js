import AsyncHandler from "express-async-handler";
import Places from "../model/places.js";
import ErrorHandler from "../utils/errorCreator.js";
import mongoose from "mongoose";

const bookTable = AsyncHandler(async (req, res, next) => {
  try {
    const userId = req.user._id;
    const date = Date.parse(req.body.date);
    const { time, name, personsNumber, note } = req.body;

    const stringDate = new Date(date).toLocaleDateString();
    const placeId = req.body.placeId;

    const table = await Places.findOne({
      _id: placeId,
      "tables[0].bookings": {
        $not: {
          $elemMatch: { $and: [{ Date: stringDate }, { Time: time }] },
        },
      },
    });

    // table.tables[0].isBooked = true;
    // table.tables.bookings.push({
    //   Name: name,
    //   Time: time,
    //   Date: stringDate,
    //   numOfPersons: parseInt(personsNumber),
    //   Note: note,
    //   User: userId,
    // });

    // await table.save();
    console.log(table);
    res.status(200).json(`SUCESS`);
  } catch (err) {
    console.log(err);
    return next(new ErrorHandler(" Not Work Please try again...", 500));
  }
});

export { bookTable };
