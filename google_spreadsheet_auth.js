const { GoogleSpreadsheet } = require("google-spreadsheet");
require("dotenv").config();

//Google spread sheet Initialize Auth
const doc = new GoogleSpreadsheet(process.env.SHEET_ID);
(async function () {
  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SPREADSHEET_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_SPREADSHEET_PRIVATE_KEY,
  });
})();

module.exports = doc; 