require("dotenv").config();
const path = require("path");
const express = require("express");

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "/build")));

/**
 * Batch Updates values in a Spreadsheet.
 * @param {string} spreadsheetId The spreadsheet ID.
 * @param {string} range The range of values to update.
 * @param {object} valueInputOption Value update options.
 * @param {(string[])[]} _values A 2d array of values to update.
 * @return {obj} spreadsheet information
 */
async function batchUpdateValues(
  spreadsheetId,
  range,
  valueInputOption,
  _values
) {
  const { GoogleAuth } = require("google-auth-library");
  const { google } = require("googleapis");

  //   const auth = new GoogleAuth({
  //     scopes: "https://www.googleapis.com/auth/spreadsheets",
  //   });
  const auth = new google.auth.JWT(
    //   credentials.client_email,
    process.env.GOOGLE_SPREADSHEET_CLIENT_EMAIL,
    null,
    //   credentials.private_key,
    process.env.GOOGLE_SPREADSHEET_PRIVATE_KEY,
    ["https://www.googleapis.com/auth/spreadsheets"]
  );

  const service = google.sheets({ version: "v4", auth });
    let values = _values;
//     [
//       // Cell values ...
//     ],
//     // Additional rows ...
//   ];
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
    // TODO (developer) - Handle exception
      console.log("err", err)
    throw err;
  }
}

app.post("/gcp", async (req, res) => {
  //   await doc.loadInfo(); // loads document properties and worksheets
  //   console.log(doc.title);

  let data = await req.body;
  data = JSON.parse(data.input);
  console.log("data: ", data);
  console.log("data length: ", data.length);

  /*
    spreadsheetId,
    range,
    valueInputOption,
    _values
    */
  const spreadsheetId = process.env.SHEET_ID;
  const range = "cc-pairmaker-test!B2";
  const valueInputOption = "USER_ENTERED";
  const values = [["A1"]];
  batchUpdateValues(spreadsheetId, range, valueInputOption, values);
  res.send(`update spread sheet!`);
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log("App listening on port " + port);
});
