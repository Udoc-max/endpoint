const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

app.get("/data", (req, res) => {
  const { slack_name, track } = req.query;
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDay = daysOfWeek[new Date().getDay()];
  const now = new Date();
  const utcTime = new Date(now.getTime() + (now.getTimezoneOffset() * 60000)).toISOString();
  
  const responseData = {
    slack_name: slack_name,
    current_day: currentDay,
    utc_time: utcTime,
    track: track,
    github_file_url: "https://github.com/Udoc-max/Query-api/blob/main/app.js",
    github_repo_url: "https://github.com/Udoc-max/Query-api",
    status_code: 200,
  };

  return res.json(responseData);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
