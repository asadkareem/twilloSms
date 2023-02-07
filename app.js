const express = require("express");
const app = express();
const smsRouter = require("./routes/sms");
app.use(express.json({ limit: "10kb" }));
app.use("/sms", smsRouter);
app.listen(3000, () => {
  console.log("Express server listening on port 3000");
});
