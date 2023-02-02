const path = require("path");
const express = require("express");
const {
  GoogleSpreadsheet,
  // GoogleSpreadsheetWorksheet,
} = require("google-spreadsheet");
require("dotenv").config();

const app = express();

const doc = new GoogleSpreadsheet(process.env.SHEET_ID);

app.use(express.json());
app.use(express.static(path.join(__dirname, "/build")));

// Initialize Auth
(async function () {
  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY,
  });
})();

app.post("/gcp", async (req, res) => {
  await doc.loadInfo(); // loads document properties and worksheets
  console.log(doc.title);

  const sheet = doc.sheetsById[0];

  const data = await req.body;
  console.log("data ", data);

  await sheet.loadCells("A1:E10"); //セルの操作（読み込み）
  const a1 = await sheet.getCell(0, 0);

  a1.value = data.input; //セルの操作（書き込み）
  await sheet.saveUpdatedCells();

  res.send("update!");
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log("App listening on port " + port);
});
