const express = require("express");
const moment = require("moment-timezone");

const app = express();

app.get("/zones", (req, res) => {
  const countries = moment.tz.names();
  const timeZones = [];
  countries.forEach((c) => {
    const value = moment("2022-02-03").tz(c).format("Z");
    timeZones.push({ country: c, zone: value });
  });
  res.send(timeZones);
});

app.listen(4000, () => console.log("started"));
