require("dotenv").config();
const path = require("path");
const express = require("express");

const utility = require("./utility")

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "/build")));

async function batchUpdateValues(
  spreadsheetId,
  range,
  valueInputOption,
  _values
) {
  const { google } = require("googleapis");
  const auth = new google.auth.JWT(
    process.env.GOOGLE_SPREADSHEET_CLIENT_EMAIL,
    null,
    process.env.GOOGLE_SPREADSHEET_PRIVATE_KEY,
    ["https://www.googleapis.com/auth/spreadsheets"]
  );

  const service = google.sheets({ version: "v4", auth });
    let values = _values;
  const data = [
    {
      range,
      values,
    },
  ];
  const resource = {
    data,
    valueInputOption,
  };
  try {
    const result = await service.spreadsheets.values.batchUpdate({
      spreadsheetId,
      resource,
    });
      console.log("%d cells updated.", result.data.totalUpdatedCells);
    return result;
  } catch (err) {
      console.log("err", err)
    throw err;
  }
}

app.post("/gcp", async (req, res) => {
  let pairs = ""; 
  let sheetId = ""; 

  let data = await req.body;
  pairs = JSON.parse(data.input_pairs);
  sheetId = JSON.parse(data.input_sheetId);
  console.log("Input pairs: ", pairs);
  // console.log("Input sheetId: ", sheetId);
  const numberOfPairs = utility.setChar(pairs[0].length) //Google Spreadsheet 書き込み範囲のセル番地（行）を取得

  const spreadsheetId = sheetId;
  const range = `pairmaker-result!B2:${numberOfPairs}21`; //書きこみ先と書き込み範囲をシートタイトルとセル番地で指定
  const valueInputOption = "USER_ENTERED";
  const values = pairs;
  batchUpdateValues(spreadsheetId, range, valueInputOption, values);
  res.send(`Update spread sheet done!`);
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log("App listening on port " + port);
});
