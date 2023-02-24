import express from "express";
const router = express.Router();

import {
  createJob,
  deleteJob,
  getAllJobs,
  updateJob,
  showStats,
} from "../controllers/jobsController.js";

router.route("/").post(createJob).get(getAllJobs);
router.route("/stats").get(showStats); // must be before the dynamic-route (:id)
router.route("/:id").delete(deleteJob).patch(updateJob);

export default router;
