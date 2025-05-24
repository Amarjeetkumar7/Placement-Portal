// import React from "react";

// function Enhance() {
//   return (
//     <>
//       <h1 className="text-black-500"> hello code enhancer</h1>
//     </>
//   );
// }

// import { useState, useEffect } from "react";
// import "prismjs/themes/prism-tomorrow.css";
// import Editor from "react-simple-code-editor";
// import prism from "prismjs";
// import Markdown from "react-markdown";
// import rehypeHighlight from "rehype-highlight";
// import "highlight.js/styles/github-dark.css";
// import axios from "axios";

// function Enhance() {
//   const [code, setCode] = useState(`function sum() {
//     return 1 + 1;
//   }`);

//   const [review, setReview] = useState(``);

//   useEffect(() => {
//     prism.highlightAll();
//   }, []);

//   // Handle Code Review Request
//   async function reviewCode() {
//     try {
//       const response = await axios.post(
//         "http://localhost:3000/api/v1/ai/get-review",
//         {
//           code,
//         }
//       );
//       setReview(response.data);
//     } catch (error) {
//       console.error("Error fetching review:", error);
//       setReview("❌ Failed to get review. Please check your backend.");
//     }
//   }

//   return (
//     <main className="flex gap-4 h-screen p-6 bg-gray-900">
//       {/* Left Section (Code Editor) */}
//       <div className="flex-1 bg-black rounded-lg relative">
//         <div className="h-full">
//           <Editor
//             value={code}
//             onValueChange={(code) => setCode(code)}
//             highlight={(code) =>
//               prism.highlight(code, prism.languages.javascript, "javascript")
//             }
//             padding={10}
//             className="w-full h-full text-sm bg-[#0c0c0c] text-white font-mono rounded-lg"
//           />
//         </div>
//         <button
//           onClick={reviewCode}
//           className="absolute bottom-4 right-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
//         >
//           Review
//         </button>
//       </div>

//       {/* Right Section (Review Output) */}
//       <div className="flex-1 bg-gray-800 text-white p-4 rounded-lg overflow-auto">
//         <Markdown rehypePlugins={[rehypeHighlight]} className="text-lg">
//           {review}
//         </Markdown>
//       </div>
//     </main>
//   );
// }

// export default Enhance;

// Enhance.jsx
import React, { useState } from "react";
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import Prism from "prismjs";
import "highlight.js/styles/github-dark.css";
import Markdown from "react-markdown";
import useCodeReview from "../hooks/useCodeReview"; // ✅ Using custom hook

function Enhance() {
  // Code State
  const [code, setCode] = useState(`function sum() {
    return 1 + 1;
  }`);

  // Using custom hook for code review
  const { review, loading, error, reviewCode } = useCodeReview();

  // Handle Code Review Trigger
  const handleReview = async () => {
    if (!code.trim()) {
      alert("⚠️ Please enter some code.");
      return;
    }
    await reviewCode(code);
  };

  return (
    <main className="flex gap-4 h-screen p-6 bg-gray-900">
      {/* Left Section (Code Editor) */}
      <div className="flex-1 bg-black rounded-lg relative">
        <div className="h-full">
          <Editor
            value={code}
            onValueChange={(code) => setCode(code)}
            highlight={(code) =>
              Prism.highlight(code, Prism.languages.js, "javascript")
            }
            padding={10}
            className="w-full h-full text-sm bg-[#0c0c0c] text-white font-mono rounded-lg"
          />
        </div>
        <button
          onClick={handleReview}
          className="absolute bottom-4 right-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          disabled={loading}
        >
          {loading ? "Reviewing..." : "Review"}
        </button>
      </div>

      {/* Right Section (Review Output) */}
      <div className="flex-1 bg-gray-800 text-white p-4 rounded-lg overflow-auto">
        {loading && <p className="text-blue-400">⏳ Reviewing code...</p>}
        {error && <p className="text-red-400">❌ {error}</p>}
        {review && <Markdown className="text-lg">{review}</Markdown>}
      </div>
    </main>
  );
}

export default Enhance;
