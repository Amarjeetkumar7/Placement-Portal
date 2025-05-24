// const express = require('express');
import express from "express"
// const aiController = require("../controllers/ai.controller")
// import aiController from "../controllers/ai.controller.js"
import { getReview } from "../controllers/ai.controller.js";

const router = express.Router();


router.route("/get-review").post( getReview)


export default router;    