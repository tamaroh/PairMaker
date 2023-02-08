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
//   const { GoogleAuth } = require("google-auth-library");
  const { google } = require("googleapis");

  //   const auth = new GoogleAuth({
  //     scopes: "https://www.googleapis.com/auth/spreadsheets",
  //   });
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
  // Additional ranges to update ...
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
      console.log("result ", result)
    return result;
  } catch (err) {
      console.log("err", err)
    throw err;
  }
}

app.post("/gcp", async (req, res) => {

  let data = await req.body;
  data = JSON.parse(data.input);
  console.log("data: ", data);
  console.log("data length: ", data.length);

  const spreadsheetId = process.env.SHEET_ID;
  const range = "cc-pairmaker-test!B2:U21";
  const valueInputOption = "USER_ENTERED";
  const values = data;
  batchUpdateValues(spreadsheetId, range, valueInputOption, values);
  res.send(`update spread sheet!`);
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log("App listening on port " + port);
});
