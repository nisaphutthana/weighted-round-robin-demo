// Import "express" package to create Node.js server
import express from "express";

const app = express();
const PORT = 3003;

// Create the simple `GET` API
app.get("/", (req, res) => {
  res.send("Response from Server C");
});

// Listen to the request at PORT 3003
app.listen(PORT, () => {
  // When the server start log `Server C is running ...` message
  console.log(`Server C is running on port ${PORT}`);
});
