// useCodeReview.js
// import { useState } from "react";
// import axios from "axios";
// import { AI_API_END_POINT } from "@/utils/constant"; // ✅ Import endpoint

// // Custom hook to handle AI Code Review API
// const useCodeReview = () => {
//   const [review, setReview] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // Function to send code to AI and get review
//   const reviewCode = async (code) => {
//     setLoading(true);
//     setError(null);

//     try {
//       const response = await axios.post(
//         `${AI_API_END_POINT}/get-review`,
//         { withCredentials: true },
//         {
//           code,
//         }
//       );
//       setReview(response.data);
//     } catch (err) {
//       console.error("Error fetching review:", err);
//       console.log("error is", err);
//       setError("❌ Failed to get review. Please check your backend.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return { review, loading, error, reviewCode };
// };

// export default useCodeReview;

import { useState } from "react";
import axios from "axios";
import { AI_API_END_POINT } from "../utils/constant"; // ✅ Correct endpoint

const useCodeReview = () => {
  const [review, setReview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to send code to AI and get review
  const reviewCode = async (code) => {
    setLoading(true);
    setError(null);

    try {
      // console.log("📤 Sending code for review:", code); // ✅ Debugging code

      const response = await axios.post(
        `${AI_API_END_POINT}/get-review`, // ✅ Correct endpoint
        { code }, // ✅ Correct payload
        {
          headers: {
            "Content-Type": "application/json", // ✅ Correct header
          },
          withCredentials: true, // ✅ Move withCredentials here
        }
      );

      setReview(response.data);
    } catch (err) {
      console.error("❌ Error fetching review:", err);
      setError("❌ Failed to get review. Please check your backend.");
    } finally {
      setLoading(false);
    }
  };

  return { review, loading, error, reviewCode };
};

export default useCodeReview;
