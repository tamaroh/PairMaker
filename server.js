require("dotenv").config();
const path = require("path");
const express = require("express");

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

  let data = await req.body;
  data = JSON.parse(data.input);
  console.log("Input data: ", data);

  const spreadsheetId = process.env.SHEET_ID;
  const range = "pairmaker-result!B2:U21";
  const valueInputOption = "USER_ENTERED";
  const values = data;
  batchUpdateValues(spreadsheetId, range, valueInputOption, values);
  res.send(`Update spread sheet done!`);
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log("App listening on port " + port);
});
