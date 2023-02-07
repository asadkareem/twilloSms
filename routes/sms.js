const express = require("express");
const router = express.Router();
const sendMessage = async (options) => {
  const client = require("twilio")(
    "AC607eea6c17af3f2c112ad47b50a27f04",
    "925010d79ff2895b5edcd713be97b009"
  );

  // 2) Define the email options
  const messageOptions = {
    body: options.message,
    from: "DMMobile",
    to: options.contactNumber,
    // html:
  };
  await client.messages.create(messageOptions);
};

router.route("/").post(async (req, res) => {
  console.log(req.body);

  try {
    await sendMessage({
      contactNumber: req.body.contact,
      message: req.body.message,
    });
  } catch (err) {
    console.log(err.message);
  }
  res.status(201).json({
    status: "success",
  });
});
module.exports = router;
