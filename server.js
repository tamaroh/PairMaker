const path = require("path");
const express = require("express");
const doc = require("./google_spreadsheet_auth");

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "/build")));

app.post("/gcp", async (req, res) => {
  await doc.loadInfo(); // loads document properties and worksheets
  console.log(doc.title);

  const sheet = doc.sheetsByTitle["cc-pairmaker-test"];

  let data = await req.body;
  data = JSON.parse(data.input);
  console.log("data: ", data)

  await sheet.loadCells("A1:U21"); //セルの操作（読み込み）, @miku 20日分以上の組み合わせを作成または20組以上のペアを作成する場合は変更が必要
  let day_offset = 1; //　行のタイトル分のオフセット
  let pair_offset = 1; // 列のタイトル分のオフセット
  let counter = 0;
  //20日分ペアを組む設定　※定値
  for (
    let day_index = 0 + day_offset;
    day_index < data.length + day_offset;
    day_index++
  ) {
    console.log("day_index ", day_index); 
    await data[day_index - 1].forEach((_, index) => {
      return new Promise((resolve) => {
          const cell = sheet.getCell(day_index, index + 1);
          // console.log("cell 1: ", cell);
          return resolve(cell);
      }).then((cell) => {
        setTimeout(() => {
          console.log("cell 2: ", cell);
          cell.value = data[day_index - 1][index];
          sheet.saveUpdatedCells();
        }, 5000)
      });
    });
  }
  res.send("update spread sheet!");
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log("App listening on port " + port);
});
