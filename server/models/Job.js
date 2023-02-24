import mongoose from "mongoose";

const JobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, "Please provide company"],
      maxlength: 50,
    },
    position: {
      type: String,
      required: [true, "Please provide position"],
      maxlength: 100,
    },
    status: {
      type: String,
      enum: ["interview", "declined", "pending"], // the input is of type select
      default: "pending",
    },
    jobType: {
      type: String,
      enum: ["full-time", "part-time", "remote", "internship"], // the input is of type select
      default: "full-time",
    },
    jobLocation: {
      type: String,
      default: "my city", // not empty-string so that we can update it
      required: true,
    },
    createdBy: {
      type: mongoose.Types.ObjectId, // so that we we can filter by creator to show the jobs to the user related to them
      ref: "User",
      required: [true, "Please provide user"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Job", JobSchema);
