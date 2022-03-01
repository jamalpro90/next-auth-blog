import { getSession } from "next-auth/react";
import connectDB from "../../../config/connectDB";
import UserProfiles from "../../../models/userProfileModel";

connectDB();

export default async function handler(req, res) {
  switch (req.method) {
    case "PUT":
      await updateProfile(req, res);
      break;
    case "GET":
      await getProfile(req, res);
      break;
  }
}

const updateProfile = async (req, res) => {
  try {
    const session = await getSession({ req });
    const { values } = req.body;
    const { userId } = session;

    const checkProfile = await UserProfiles.find();
    const checkProfileLength = checkProfile.filter(
      pro => pro.asu.toString() === userId
    ).length;

    const newUserProfile = new UserProfiles({
      asu: userId,
      name: values.name,
      age: values.age,
      address: values.address,
      "phone-number": values["phone-number"],
      gender: values.gender,
      date: values.date,
      about: values.about,
    });

    // console.log("checkProfile : ", checkProfileLength === 1);

    // Cek jika sudah ada use profile yg tersedia
    if (checkProfileLength === 1) {
      const a = await UserProfiles.findOneAndUpdate(
        { asu: userId },
        {
          asu: userId,
          name: values.name,
          age: values.age,
          address: values.address,
          "phone-number": values["phone-number"],
          gender: values.gender,
          date: values.date,
          about: values.about,
        }
      );
      return res.json({ message: "Success update user profile" });
    }

    await newUserProfile.save();
    // console.log(typeof userId);
    res.json({ message: "Success add user profile" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getProfile = async (req, res) => {
  try {
    const session = await getSession({ req });
    // const { userId } = session;

    const userProfile = await UserProfiles.find();
    // console.log(user);
    res.json(userProfile);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
