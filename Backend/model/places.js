import mongoose from "mongoose";
import bcrypt from "bcrypt";

const Schema = mongoose.Schema;

const placesSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    hasTables: {
      type: Boolean,
      required: true,
    },
    numOfTables: {
      type: Number,
      required: false,
    },
    profile: {
      type: String,
      required: true,
    },
    workingAt: {
      type: String,
      required: true,
    },
    deliveryAt: {
      type: String,
      required: true,
    },
    deliveryFee: {
      type: Number,
      required: true,
    },
    posts: {
      food: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Foods",
        },
      ],
      fastFood: [{ type: mongoose.Schema.Types.ObjectId, ref: "Foods" }],
      drink: [{ type: mongoose.Schema.Types.ObjectId, ref: "Foods" }],
      sweet: [{ type: mongoose.Schema.Types.ObjectId, ref: "Foods" }],
      seaFood: [{ type: mongoose.Schema.Types.ObjectId, ref: "Foods" }],
    },
    tables: [
      {
        num: Number,
        isBooked: {
          type: Boolean,
          default: false,
        },
        bookings: [
          {
            User: {
              type: mongoose.Schema.Types.ObjectId,
              ref: "Users",
            },
            Name: {
              type: String,
            },
            Date: {
              type: String,
            },
            Time: {
              type: String,
            },
            Note: {
              type: String,
            },
            numOfPersons: {
              type: Number,
            },
          },
        ],
      },
    ],
  },
  {
    timestamps: true,
  }
);

placesSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

placesSchema.methods.signIn = async function (enteredPass) {
  return await bcrypt.compare(enteredPass, this.password);
};

export default mongoose.model("Places", placesSchema);
