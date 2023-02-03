const path = require("path");
const express = require("express");
// const doc = require("./google_spreadsheet_auth")
const secrets = require("/etc/secrets/.env"); 
console.log(secrets)

const { GoogleSpreadsheet } = require("google-spreadsheet");
require("dotenv").config();


const doc = new GoogleSpreadsheet(process.env.SHEET_ID);
(async function () {
  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SPREADSHEET_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_SPREADSHEET_PRIVATE_KEY,
  });
})();

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "/build")));


app.post("/gcp", async (req, res) => {
  await doc.loadInfo(); // loads document properties and worksheets
  console.log(doc.title);

  const sheet = doc.sheetsByTitle["cc-pairmaker-test"];

  let data = await req.body;
  data = JSON.parse(data.input);

  await sheet.loadCells("A1:F6"); //セルの操作（読み込み）
  let day_offset = 1; //　行のタイトル分のオフセット
  let pair_offset = 1; // 列のタイトル分のオフセット
  let counter = 0;
  //現在は1日分だけペアを組む設定　※後で変更必要
  for (
    let day_index = 0 + day_offset;
    day_index < 1 + day_offset;
    day_index++
  ) {
    for (
      let pair_index = 0 + pair_offset;
      pair_index < data.length + pair_offset;
      pair_index++
    ) {
      const cell = await sheet.getCell(day_index, pair_index);

      cell.value = data[counter];
      await sheet.saveUpdatedCells();
      counter++;
    }
  }
  res.send("update spread sheet!");
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log("App listening on port " + port);
});
