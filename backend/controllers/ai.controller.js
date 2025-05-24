// const aiService = require("../services/ai.service")
import aiService from "../services/ai.service.js"
// ✅ Correct import
// import  generateContent  from "../services/ai.service.js";


export const getReview = async (req, res) => {
  console.log("🔍 Received payload:", req.body);

    const code = req.body.code;

    if (!code) {
        return res.status(400).send("Prompt is required");
    }

    const response = await aiService(code);


    res.send(response);

}