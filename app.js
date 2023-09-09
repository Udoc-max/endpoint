const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

app.get("/api", (req, res) => {
  const { track } = req.query; // Assuming slack_name is hardcoded
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDay = daysOfWeek[new Date().getDay()];
  const now = new Date();
  const utc = now.toISOString().slice(0, 19) + "Z";

  const responseApi = {
    slack_name: "Udochukwu", // Set slack_name to "Udochukwu"
    current_day: currentDay,
    utc_time: utc,
    track: track,
    github_file_url: "https://github.com/Udoc-max/Query-api/blob/main/app.js",
    github_repo_url: "https://github.com/Udoc-max/Query-api",
    status_code: 200,
  };

  return res.json(responseApi);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

