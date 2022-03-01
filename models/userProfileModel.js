import mongoose, { Schema, Types } from "mongoose";

const userProfileSchema = new mongoose.Schema(
  {
    asu: { type: mongoose.Types.ObjectId },
    name: { type: String, required: false },
    age: { type: Number, required: false },
    address: { type: String, required: false },
    "phone-number": { type: String, required: false },
    gender: { type: String, required: false },
    date: { type: Date, required: false },
    about: { type: String, required: false },
  },
  { timestamps: true }
);

let UserProfiles =
  mongoose.models.userprofile ||
  mongoose.model("userprofile", userProfileSchema);

export default UserProfiles;
