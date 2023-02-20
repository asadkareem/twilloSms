const express = require("express");
const app = express();
const smsRouter = require("./routes/sms");
app.use(express.json({ limit: "10kb" }));
app.use("/sms", smsRouter);
app.listen(process.env.PORT, () => {
  console.log("Express server listening on port 3000");
});
