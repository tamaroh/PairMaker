const path = require("path");
const express = require("express");
const doc = require("./google_spreadsheet_auth");

const { google } = require("googleapis");
const authClient = require("./google_api_auth");
console.log("authClient after req: ", authClient)
const sheets = google.sheets("v4");

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "/build")));

app.post("/gcp", async (req, res) => {

  const auth = await authClient();
  // console.log("auth: ", auth)
  const data = [
    {
      range: "cc-pairmaker-test!A1", // Update single cell
      values: [["A1"]],
    },
  ];
  const request = {
    // The spreadsheet to apply the updates to.
    spreadsheetId: process.env.SHEET_ID,

    resource: {
      // A list of updates to apply to the spreadsheet.
      // Requests will be applied in the order they are specified.
      // If any request is not valid, no requests will be applied.
      requests: [], // TODO: Update placeholder value.

      // TODO: Add desired properties to the request body.
      data: data
    },

    auth: auth,
  };

  try {
    const response = (await sheets.spreadsheets.batchUpdate(request)).data;
    // TODO: Change code below to process the `response` object:
    console.log(JSON.stringify(response, null, 2));
  } catch (err) {
    console.error(err);
  }




  // await doc.loadInfo(); // loads document properties and worksheets
  // console.log(doc.title);

  // const sheet = doc.sheetsByTitle["cc-pairmaker-test"];

  // let data = await req.body;
  // data = JSON.parse(data.input);
  // console.log("data: ", data);
  // console.log("data length: ", data.length);


  // await sheet.loadCells("A1:U21"); //セルの操作（読み込み）, @miku 20日分以上の組み合わせを作成または20組以上のペアを作成する場合は変更が必要
  
  /*
  スプレッドシートに書き込みはできるけど、どうしてもリクエスト過多のエラーが出てしまう。

  let day_offset = 1; //　行のタイトル分のオフセット
  // let pair_offset = 1; // 列のタイトル分のオフセット
  // let counter = 0;
  //20日分ペアを組む設定　※定値
  for (
    let day_index = 0 + day_offset;
    day_index < data.length + day_offset;
    day_index++
  ) {
    new Promise((resolve) => {
      setTimeout(() => {
        data[day_index - 1].forEach((_, index) => {
          const cell = sheet.getCell(day_index, index + 1);
          cell.value = data[day_index - 1][index];
          sheet.saveUpdatedCells();
          resolve("update!")
        });
      }, 20000);
    }).then((e) => {
      console.log(e);
    });
    */

//   }
  res.send(`update spread sheet!`);
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log("App listening on port " + port);
});
